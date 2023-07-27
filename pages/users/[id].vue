<template>
  <h1>{{ $route.params.id }} <nuxt-img v-if="!pending && user.data" :src="`/img/` + getVerifyBadges(user.data, true)" alt="icon" loading="lazy" height="20" width="20" style="margin-left: 5px; "/></h1>
  <img v-if="!pending && user.data" :src="user.data.avatar" alt="{{ user }}" height="60" width="60" style="border-radius: 12px">
</template>

<script setup>
import { getVerifyBadges } from '~/utils/utils';

useHead({
  title: 'Space-Cube | Feedbacks',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
const route = useRoute();
const { pending, data: user } = await useLazyFetch(`http://localhost:9080/users/${route.params.id}`);
</script>
