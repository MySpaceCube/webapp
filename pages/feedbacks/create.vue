<template>
  <div>
    <h1>{{ $t('global.feedbackPage.create') }}</h1>
    <hr>
    <form action="">
      <Card>
        <template #content>
          <label for="title">{{ $t('global.form.title.label') }} :</label>
          <InputText id="title" type="text" v-model="title" />
          <label for="description">{{ $t('global.form.title.label') }} :</label>
          <Textarea v-model="description" rows="5" cols="30" style="display: block; margin-top: 1rem; margin-bottom: 1rem"/>
          <p>Please choose your targetApp.</p>
          <div class="d-flex flex-wrap justify-content-between" style="width: 50%">
            <div class="flex align-items-center">
              <RadioButton v-model="targetApp" inputId="targetApp_administration" name="administration" value="administration" />
              <label for="targetApp_administration" class="ml-2">{{ $t('global.feedbacksInfos.targetApp.administration') }}</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="targetApp" inputId="targetApp_website" name="website" value="website" />
              <label for="targetApp_website" class="ml-2">{{ $t('global.feedbacksInfos.targetApp.website') }}</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="targetApp" inputId="targetApp_server" name="minecraft" value="server" />
              <label for="targetApp_server" class="ml-2">{{ $t('global.feedbacksInfos.targetApp.minecraft') }}</label>
            </div>
          </div>
          <p>Please choose feedback type.</p>
          <div class="d-flex flex-wrap justify-content-between" style="width: 50%">
            <div class="flex align-items-center">
              <RadioButton v-model="type" inputId="type_administration" name="style" value="style" />
              <label for="type_administration" class="ml-2">{{ $t('global.feedbacksInfos.types.style') }}</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="type" inputId="type_feature" name="feature" value="feature" />
              <label for="type_feature" class="ml-2">{{ $t('global.feedbacksInfos.types.feature') }}</label>
            </div>
            <div class="flex align-items-center">
              <RadioButton v-model="type" inputId="type_bug" name="bug" value="bug" />
              <label for="type_bug" class="ml-2">{{ $t('global.feedbacksInfos.types.bug') }}</label>
            </div>
          </div>
          <Button
            label="Submit"
            icon="pi pi-check"
            class="mt-3"
            type="button"
            @click="postFeedback"
          />
        </template>
      </Card>
    </form>
  </div>
</template>

<script setup>
import { apiStore } from '~/store/api';
import { authStore } from '~/store/auth';
import { globalStore } from '~/store/global';
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from 'primevue/textarea';
import RadioButton from 'primevue/radiobutton';
import Button from 'primevue/button';
import axios from "axios";

const title = ref('');
const description = ref('');
const targetApp = ref('');
const type = ref('');

const api = apiStore();
const auth = authStore();
const global = globalStore();

const postFeedback = () => {
  axios.post(api.apiUrl + '/feedbacks', {
    title: title.value,
    description: description.value,
    targetApp: targetApp.value,
    type: type.value,
  }, {
    headers: {
      'Authorization': 'Bearer ' + auth.token,
    }
  })
    .then((response) => {
      console.log(response);

      return response;
    })
    .catch((error) => {
      console.error(error);

      return error;
    });
}

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
