<template>
  <h1>{{ store.user.username }} <nuxt-img v-if="store.user" :src="getVerifyBadges(store.user.roles[0])" alt="icon" loading="lazy" height="20" width="20" style="margin-left: 5px; "/></h1>
  <Message v-if="store.user.isVerify" severity="warn" :closable="false" sticky>
    <span class="p-text-bold">Your account is not verified!</span> Please verify your account to get access to all features.
  </Message>
  <hr>
  <form action="">
    <Card>
      <template #title>Experimental Features</template>
      <template #content>
        <SelectButton v-model="beta" :options="options" aria-labelledby="basic" />
      </template>
    </Card>
  </form>
</template>

<script setup>
import Card from 'primevue/card';
import Message from 'primevue/message';
import SelectButton from 'primevue/selectbutton';
import { authStore } from '~/store/auth';
import { ref } from 'vue';
const store = authStore();

const beta = ref(store.user.beta ? 'On' : 'Off');
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
function getVerifyBadges (rank) {
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
}
</script>
