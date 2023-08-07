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
        <InputText
          id="username"
          v-model="username"
          disabled
        />
        <label for="email">Email :</label>
        <InputText
          id="email"
          v-model="email"
          disabled
        />
        <label for="password">Password :</label>
        <Password
          id="password"
          v-model="password"
          :placeholder="`${ $t('global.password') }`"
          toggleMask
          :feedback="false"
        />
        <label for="newPassword">newPassord :</label>
        <Password
          id="newPassword"
          v-model="newPassword"
          toggleMask
          promptLabel="Choose a password"
          weakLabel="Too simple"
          mediumLabel="Average complexity"
          strongLabel="Complex password"
          aria-autocomplete="none"
          autocomplete="false"
          required
        >
          <template #header>
            <h6>Pick a password</h6>
          </template>
          <template #footer>
            <Divider />
            <p class="mt-2">Suggestions</p>
            <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
              <li>At least one lowercase</li>
              <li>At least one uppercase</li>
              <li>At least one numeric</li>
              <li>Minimum 8 characters</li>
            </ul>
          </template>
        </Password>
      </template>
    </Card>
  </form>
  <hr>
  <form action="">
    <Card>
      <template #title>{{ $t('global.user.experimentalFeature') }}</template>
      <template #content>
        <div class="small">
          {{ $t('global.user.betaDescription') }}
        </div>
        <InputSwitch v-model="beta" />
      </template>
    </Card>
  </form>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';
import Card from 'primevue/card';
import Message from 'primevue/message';
import { authStore } from '~/store/auth';
import { apiStore } from '~/store/api';
import { ref } from 'vue';
import axios from 'axios';
import { getVerifyBadges } from '~/utils/utils';
import Password from 'primevue/password';
import InputText from 'primevue/inputtext';
import InputSwitch from 'primevue/inputswitch';

const store = authStore();
const api = apiStore();
const route = useRoute();
const isEmailVerify = (route.query.successVerifyEmail === '1');
const beta = ref(store.user.beta ? 'On' : 'Off');
const username = ref(store.user.username);
const email = ref(store.user.email);
const password = ref('');
const newPassword = ref('');
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
.p-message .p-message-text, {
  width: 90%;
}
.p-password {
  width: 100%;
}
</style>
