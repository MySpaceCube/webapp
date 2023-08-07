<template>
  <div>
    <h1>{{ $t('global.resource.texture.create') }}</h1>
    <hr>
    <Toast position="bottom-right" />
    <form>
      <Card>
        <template #content>
          <label for="title">{{ $t('global.form.title.label') }} :</label>
          <InputText
            id="title"
            v-model="title"
            type="text"
            :class="{ 'p-invalid': errorMessage.title }"
            @change="isValidateForm()"
            required
          />
          <div>
            <small id="text-error" class="p-error" style="display: block;">
              {{ errorMessage.title || '&nbsp;' }}
            </small> <br>
          </div>
          <label for="description">{{ $t('global.form.description.label') }} :</label>
          <Textarea
            v-model="description"
            :class="{ 'p-invalid': errorMessage.description }"
            style="display: block; width: 100%; min-height: 200px; margin-top: 1rem; margin-bottom: 1rem"
            @change="isValidateForm()"
            required
          />
          <div>
            <small id="text-error" class="p-error" style="display: block;">
              {{ errorMessage.description || '&nbsp;' }}
            </small> <br>
          </div>
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
const { t } = useI18n();

const title = ref('');
const description = ref('');
let images = [];
let errorMessage = {};

const api = apiStore();
const auth = authStore();
const toast = useToast();
const { $bus } = useNuxtApp();

const onAdvancedUpload = (event) => {
  const response = JSON.parse(event.xhr.response);
  images = response.files;
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

const onSubmit = () => {
  if (!isValidateForm()) {
    return false;
  }

  axios.post(api.apiUrl + '/feedbacks', {
    title: title.value,
    description: description.value
  }, {
    headers: {
      Authorization: 'Bearer ' + auth.token
    }
  })
    .then((response) => {
      $bus.$emit('updatePoints', { nbPoints: 1, isNegative: false });
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
  resetForm();
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
