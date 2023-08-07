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
          <div>
            <small id="text-error" class="p-error" style="display: block;">
              {{ errorMessage.title || '&nbsp;' }}
            </small> <br>
          </div>
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
          <div>
            <small id="text-error" class="p-error" style="display: block;">
              {{ errorMessage.link || '&nbsp;' }}
            </small> <br>
          </div>
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
          <div>
            <small id="text-error" class="p-error" style="display: block;">
              {{ errorMessage.link || '&nbsp;' }}
            </small> <br>
          </div>
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
          <div>
            <small id="text-error" class="p-error" style="display: block;">
              {{ errorMessage.description || '&nbsp;' }}
            </small> <br>
          </div>
          <Dropdown
            v-model="selectedCategory"
            :options="categories"
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
          <FileUpload name="file[]"
                      :url="`${api.apiUrl}/upload`"
                      @upload="onAdvancedUpload($event)"
                      :multiple="true"
                      accept="image/*"
                      :file-limit="auth.isAdmin ? 100 : 2"
                      :maxFileSize="1000000">
            <template #empty>
              <p>Drag and drop files to here to upload.</p>
            </template>
          </FileUpload>
          <span class="p-input">
            <Button
              icon="pi pi-check"
              class="p-button p-component input p-button-text mt-3"
              type="button"
              @click="onSubmit"
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
const { t } = useI18n();

const route = useRoute();
const title = ref('');
const description = ref('');
const selectedCategory = ref('');
const link = ref('');
const author = ref('');
const resourceType = route.path.split('/')[3];
let previewImg = [];
let errorMessage = {};

const api = apiStore();
const auth = authStore();
const toast = useToast();
const { $bus } = useNuxtApp();

const onAdvancedUpload = (event) => {
  const response = JSON.parse(event.xhr.response);
  previewImg = response.files;
  toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

watch([title, description], () => {
  isValidateForm();
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

  return errorMessage !== {};
};

const resetForm = () => {
  errorMessage = {};
  title.value = '';
  description.value = '';
};

let categories = ref([{ code: 'test', name: 'test' }]);

axios.get(api.apiUrl + '/categories', {
  headers: {
    Authorization: 'Bearer ' + auth.token
  }
}).then((response) => {
  categories = response.data.data.map((category) => {
    return {
      code: category.id,
      name: category.name
    };
  });
});

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
  title: 'Space-Cube | Create Feedback',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
</script>
