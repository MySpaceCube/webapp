<template>
  <h1>{{ $t('global.forgotPassword') }}</h1>
  <Card>
    <template #content>
      <form autocomplete="new-password">
        <span v-if="!isEmailVerify" class="p-float-label">
          <InputText id="email" v-model="email" />
              <label for="email">Email</label>
        </span>
        <span v-if="isEmailVerify" class="p-float-label">
          <Password
            id="newPassword"
            v-model="newPassword"
            toggleMask
            promptLabel="Choose a password"
            weakLabel="Too simple"
            mediumLabel="Average complexity"
            strongLabel="Complex password"
            aria-autocomplete="none"
            :disabled="!validToken"
            required
            ref="passwordField"
          >
            <template #header>
              <h6>Pick a password</h6>
            </template>
            <template #footer>
              <Divider/>
              <p class="mt-2">Suggestions</p>
              <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
              </ul>
            </template>
          </Password>
          <label for="newPassword">New Password</label>
        </span>
        <Button @click="submitForm">
          {{ $t('global.send') }}
        </Button>
      </form>
      <Toast position="bottom-right"/>
    </template>
  </Card>
</template>
<script setup>
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import { apiStore } from '~/store/api';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';
import Password from 'primevue/password';
import { ref } from 'vue';

const route = useRoute();
const email = ref('');
const newPassword = ref('');
const validToken = ref(false);
const api = apiStore();
const toast = useToast();
const { t } = useI18n();
const isEmailVerify = (route.query.emailSend === '1');

const checkTokenExist = () => {
  axios.get(api.apiUrl + `/newPassword/${route.query.token}`)
    .then((response) => {
      if (response.status === 200) {
        validToken.value = true;
      } else {
        toast.add({
          severity: 'danger',
          summary: 'Error',
          detail: t(response.data.data.errors[0]),
          life: 5000
        });
      }
    })
    .catch((error) => {
      toast.add({
        severity: 'danger',
        summary: 'Error',
        detail: t(error.response.data.errors[0]),
        life: 5000
      });
    });
};

const submitForm = (e) => {
  e.preventDefault();
  axios.get(api.apiUrl + `/forgotPassword?email=${email.value}`)
    .then((response) => {
      toast.add({
        severity: 'success',
        summary: 'Success',
        detail: t(response.data.data.code),
        life: 5000
      });
    })
    .catch((error) => {
      toast.add({
        severity: 'danger',
        summary: 'Error Message',
        detail: error.message,
        life: 5000
      });
    });
};

onMounted(() => {
  if (route.query.token) {
    checkTokenExist();
    const passwordField = document.getElementById('newPassword').children[0];
    passwordField.setAttribute('autocomplete', 'off');
    passwordField.setAttribute('type', 'password');
    passwordField.removeAttribute('value');
  }
});
</script>
<style lang="scss">
@import '../assets/scss/global.scss';
.p-password-panel {
  background: $blue-dark;
  border: 3px solid $blue;
  color: $text-white;
  border-radius: 15px;
}
.p-password {
  width: 100%;
}
</style>
