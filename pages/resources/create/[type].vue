<template>
  <div>
    <h1>{{ $t('global.resource.'+resourceType+'.create') }}</h1>
    <hr>
    <Toast position="bottom-right" />
    <form>
      <Card>
        <template #content>
          <span class="p-float-label">
              <InputText
                id="title"
                v-model="title"
                @change="isValidateForm()"
                required
                :class="{ 'p-invalid': errorMessage.title }"
              />
              <label for="title">{{ $t('global.form.title.label') }}</label>
          </span>
          <small v-if="errorMessage.title" id="text-error" class="p-error" style="display: block;">
            {{ errorMessage.title || '&nbsp;' }}
          </small>
          <span class="p-float-label">
              <InputText
                id="link"
                v-model="link"
                @change="isValidateForm()"
                required
                :class="{ 'p-invalid': errorMessage.link }"
              />
              <label for="link">{{ $t('global.form.link.label') }}</label>
          </span>
          <small v-if="errorMessage.link" id="text-error" class="p-error" style="display: block;">
            {{ errorMessage.link || '&nbsp;' }}
          </small>
          <span class="p-float-label">
              <InputText
                id="author"
                v-model="author"
                @change="isValidateForm()"
                required
                :class="{ 'p-invalid': errorMessage.author }"
              />
              <label for="author">{{ $t('global.form.author.label') }}</label>
          </span>
          <small v-if="errorMessage.author" id="text-error" class="p-error" style="display: block;">
            {{ errorMessage.author || '&nbsp;' }}
          </small>
          <span class="p-float-label">
            <Textarea
              id="description"
              v-model="description"
              :class="{ 'p-invalid': errorMessage.description }"
              style="display: block; width: 100%; min-height: 200px; margin-top: 1rem; margin-bottom: 1rem"
              @change="isValidateForm()"
              required
            />
            <label for="description">{{ $t('global.form.description.label') }} :</label>
          </span>
          <small v-if="errorMessage.description" id="text-error" class="p-error" style="display: block;">
            {{ errorMessage.description || '&nbsp;' }}
          </small>
          <Dropdown
            v-model="selectedCategory"
            :options="catStore.categoriesListing"
            filter
            optionLabel="name"
            placeholder="Select a Category"
            class="w-full md:w-14rem"
          >
            <template #value="slotProps">
              <div v-if="slotProps.value" class="flex align-items-center">
                <div>{{ slotProps.value.name }}</div>
              </div>
              <span v-else>
                {{ slotProps.placeholder }}
              </span>
            </template>
            <template #option="slotProps">
              <div class="flex align-items-center">
                <div>{{ slotProps.option.name }}</div>
              </div>
            </template>
          </Dropdown>
          <small v-if="errorMessage.category" id="text-error" class="p-error" style="display: block;">
            {{ errorMessage.category || '&nbsp;' }}
          </small>
          <FileUpload
            name="file[]"
            :url="`${api.apiUrl}/upload`"
            @upload="onAdvancedUpload($event)"
            :multiple="true"
            accept="image/webp"
            :file-limit="auth.isAdmin ? 100 : 2"
            :maxFileSize="1000000"
          >
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>
          <small v-if="errorMessage.previewImg" id="text-error" class="p-error" style="display: block;">
            {{ errorMessage.previewImg || '&nbsp;' }}
          </small>
          <span class="p-input">
            <Button
              icon="pi pi-check"
              class="p-button p-component input p-button-text mt-3"
              type="button"
              @click="onSubmit"
              :disabled="disabled"
            >
              {{ $t('global.submit') }}
            </Button>
          </span>
        </template>
      </Card>
    </form>
  </div>
</template>

<script setup>
import { apiStore } from '~/store/api';
import { authStore } from '~/store/auth';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import FileUpload from 'primevue/fileupload';
import Dropdown from 'primevue/dropdown';
import { categoryStore } from '~/store/category';
const { t } = useI18n();

const route = useRoute();
const title = ref('');
const description = ref('');
const selectedCategory = ref('');
const link = ref('');
const author = ref('');
let disabled = ref(true);
const resourceType = route.path.split('/')[3];
let previewImg = [];
let errorMessage = {};

const api = apiStore();
const auth = authStore();
const catStore = categoryStore();
const toast = useToast();
const { $bus } = useNuxtApp();

const onAdvancedUpload = (event) => {
  const response = JSON.parse(event.xhr.response);
  response.files.map((file) => {
    previewImg.push(file);
  });
  console.log(previewImg.length);
  if (previewImg.length > 0) {
    delete errorMessage.previewImg;
  }
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

watch([title, description, link, previewImg, selectedCategory], () => {
  isValidateForm();
  disabled = !isValidateForm();
});

const isValidateForm = () => {
  if (title.value.length < 7) {
    errorMessage.title = t('global.form.title.error');
  } else {
    delete errorMessage.title;
  }
  if (description.value.length < 20) {
    errorMessage.description = t('global.form.description.error');
  } else {
    delete errorMessage.description;
  }
  if (link.value.length < 20) {
    errorMessage.link = t('global.form.link.error');
  } else {
    delete errorMessage.link;
  }
  if (selectedCategory.value === null) {
    errorMessage.category = t('global.form.category.error');
  } else {
    delete errorMessage.category;
  }
  if (previewImg.length === 0) {
    errorMessage.previewImg = t('global.form.previewImg.error');
  } else {
    delete errorMessage.previewImg;
  }

  return errorMessage === {};
};

const resetForm = () => {
  errorMessage = {};
  title.value = '';
  description.value = '';
};

catStore.getCategories();

const onSubmit = () => {
  if (!isValidateForm()) {
    return false;
  }

  axios.post(api.apiUrl + '/resources', {
    title: title.value,
    description: description.value,
    link: link.value,
    author: author.value,
    category: selectedCategory.value.name,
    resourceType,
    previewImg
  }, {
    headers: {
      Authorization: 'Bearer ' + auth.token
    }
  })
    .then((response) => {
      $bus.$emit('updatePoints', { nbPoints: 1, isNegative: false });
      resetForm();
      toast.add({
        severity: 'success',
        summary: t('global.form.feedback.successTitle'),
        detail: t('global.form.feedback.successMessage'),
        life: 5000
      });
    })
    .catch(() => {
      toast.add({
        severity: 'danger',
        summary: t('global.form.feedback.errorTitle'),
        detail: t('global.error.message'),
        life: 5000
      });
    });
};

useHead({
  title: 'Space-Cube | Create resource',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
</script>
<style lang="scss">
@import 'assets/scss/settings/Settings.scss';
  .p-fileupload {
    margin-bottom: 2rem;
    margin-top: 2rem;
  }

  .p-fileupload-buttonbar {
    border-radius: 15px 15px 0 0 !important;
    background-color: $blue-dark !important;
    border: none !important;

    .p-button {
      height: 35px;
      border-radius: 10px !important;
      background-color: $blue;
    }
  }

  .p-fileupload-content {
    border-radius: 0 0 15px 15px !important;
    background-color: $blue-dark !important;
    border: none !important;
    border-top: 2px solid $blue !important;
  }

  .p-fileupload-file {
    color: $text-white !important;
  }

  .p-button.p-component.p-button-icon-only.p-button-danger.p-button-rounded.p-button-text.p-fileupload-file-remove {
    background-color: $pink-2 !important;
    border: none !important;
    color: $text-white !important;
    margin-left: 1rem;

    &:hover {
      background-color: $pink-3 !important;
    }
  }
</style>
