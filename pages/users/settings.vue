<template>
  <h1>{{ store.user.username }} <NuxtImg v-if="store.user && (store.user.isVerify || store.user.isMinecraftVerify)" :src="`/img/` + getVerifyBadges(store.user)" alt="icon" height="20" width="20" style="margin-left: 5px; "/></h1>
  <Message v-if="store.user && !store.user.isVerify" severity="warn" :closable="false" sticky>
    <span class="p-text-bold">{{ $t('global.user.isNotVerify') }}</span> {{ $t('global.user.isNotVerify2') }}
    <br>
    {{ $t('global.user.isNotVerifyEmail') }}
    <span style="text-decoration: underline; cursor: pointer" @click="sendConfirmationEmail()">{{ $t('global.user.isNotVerifyResend') }}</span>
  </Message>
  <Message v-if="store.user && !store.user.isMinecraftVerify" severity="warn" :closable="false" sticky>
    <span class="p-text-bold">{{ $t('global.user.isNotMinecraftVerify') }}</span>
    <br>
    {{ $t('global.user.isNotMinecraftVerify_explain') }}
    <br>
    <br>
    <code>play.space-cube.xyz</code>
    <br>
    <br>
    {{ $t('global.user.isNotMinecraftVerify_explain_next') }}
    <br>
    <br>
    <Code :code="`/verify ${store.user.tokenConfirmationMinecraft}`"></Code>
  </Message>
  <Message v-if="isEmailVerify" severity="success" sticky>
    <span>{{ $t('global.user.emailVerify.confirm') }}</span>
  </Message>
  <Toast position="bottom-right" />
  <hr>
  <form action="">
    <Card>
      <template #title>{{ $t('global.user.basicInfos') }}</template>
      <template #content>
        <label for="username">Username :</label>
        <InputText id="username" type="text" v-model="username" disabled />
        <label for="email">Email :</label>
        <InputText id="email" type="text" v-model="email" disabled />
        <label for="password">Password :</label>
        <InputText id="password" type="text" v-model="password" disabled />
        <label for="newPassword">newPassord :</label>
        <InputText id="newPassword" type="text" v-model="newPassword" disabled />
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
import { useToast } from 'primevue/usetoast';
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import SelectButton from 'primevue/selectbutton';
import { authStore } from '~/store/auth';
import { apiStore } from '~/store/api';
import { ref } from 'vue';
import axios from 'axios';
import { getVerifyBadges } from '~/utils/utils';

const store = authStore();
const api = apiStore();
const route = useRoute();
const isEmailVerify = (route.query.successVerifyEmail === '1');
const beta = ref(store.user.beta ? 'On' : 'Off');
const username = ref(store.user.username);
const email = ref(store.user.email);
const password = ref('');
const newPassword = ref('');
const options = ref(['Off', 'On']);
const toast = useToast();
useHead({
  title: 'Space-Cube | Settings',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
if (isEmailVerify) {
  if (route.query.successVerifyEmail === '1') {
    delete route.query.successVerifyEmail;
  }
}

const sendConfirmationEmail = () => {
  axios.get(api.apiUrl + '/sendConfirmationEmail', {
    headers: {
      Authorization: 'Bearer ' + store.token
    }
  }).then((response) => {
    toast.add({ severity: 'success', summary: 'Success Message', detail: response.data.data.message, life: 5000 });
  }).catch((error) => {
    toast.add({ severity: 'error', summary: 'Error Message', detail: error, life: 5000 });
  });
};
</script>
<style lang="scss">
.p-message .p-message-text {
  width: 90%;
}
</style>
