<template>
  <h1>{{ $t('global.logout') }}</h1>
</template>
<script setup>
import { authStore } from '~/store/auth';
const store = authStore();
store.logout();
onMounted(() => {
  localStorage.removeItem('token');
  navigateTo('/');
});
</script>
