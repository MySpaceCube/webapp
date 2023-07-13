<template>
  <h1>{{ store.user.username }} <nuxt-img v-if="store.user" :src="getVerifyBadges(store.user.roles[0])" alt="icon" loading="lazy" height="20" width="20" style="margin-left: 5px; "/></h1>
  <Message v-if="!store.user.isVerify" severity="warn" :closable="false" sticky>
    <span class="p-text-bold">{{ $t('global.user.isNotVerify') }}</span> {{ $t('global.user.isNotVerify2') }}
    <br>
    {{ $t('global.user.isNotVerifyEmail') }}
    <span style="text-decoration: underline; cursor: pointer" @click="sendConfirmationEmail()">{{ $t('global.user.isNotVerifyResend') }}</span>
  </Message>
  <Toast />
  <hr>
  <form action="">
    <Card>
      <template #title>{{ $t('global.user.basicInfos') }}</template>
      <template #content>
        <label for="username">Username :</label>
        <InputText id="username" type="text" v-model="username" disabled />
        <label for="email">Email :</label>
        <InputText id="email" type="text" v-model="email" />
        <label for="password">Password :</label>
        <InputText id="password" type="text" v-model="password" />
        <label for="newPassword">newPassord :</label>
        <InputText id="newPassword" type="text" v-model="newPassword" />
      </template>
    </Card>
  </form>
  <hr>
  <form action="">
    <Card>
      <template #title>{{ $t('global.user.experimentalFeature') }}</template>
      <template #content>
        <SelectButton v-model="beta" :options="options" aria-labelledby="basic" />
      </template>
    </Card>
  </form>
</template>

<script setup>
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import SelectButton from 'primevue/selectbutton';
import { authStore } from '~/store/auth';
import { apiStore } from '~/store/api';
import { ref } from 'vue';
import axios from 'axios';
const store = authStore();
const api = apiStore();

const beta = ref(store.user.beta ? 'On' : 'Off');
const username = ref(store.user.username);
const email = ref(store.user.email);
const password = ref('');
const newPassword = ref('');
const options = ref(['Off', 'On']);
useHead({
  title: 'Space-Cube | Settings',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
const getVerifyBadges = (rank) => {
  if (Object.values(rank).indexOf('ROLE_ADMIN') === 0 || Object.values(rank).indexOf('ROLE_SUPER_ADMIN') === 0) {
    return 'verify/verify-admin.svg';
  }
  if (Object.values(rank).indexOf('ROLE_MODERATOR') === 0) {
    return 'verify/verify-moderator.svg';
  }
  if (Object.values(rank).indexOf('ROLE_AUTHOR') === 0) {
    return 'verify/verify-author.svg';
  }
  return 'verify/verify-all.svg';
};

const sendConfirmationEmail = () => {
  axios.get(api.apiUrl + '/sendConfirmationEmail', {
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  }).then((response) => {
    useToast().add({ severity: 'success', summary: 'Success Message', detail: response.data.message, life: 5000 });
  }).catch((error) => {
    useToast().add({ severity: 'error', summary: 'Error Message', detail: error, life: 5000 });
  });
};
</script>
