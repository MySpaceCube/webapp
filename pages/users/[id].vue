<template>
  <h1>{{ $route.params.id }} <nuxt-img v-if="!pending && user.data" :src="getVerifyBadges(user.data.roles)" alt="icon" loading="lazy" height="20" width="20" style="margin-left: 5px; "/></h1>
  <img :src="user.data.avatar" alt="{{ user }}" height="60" width="60" style="border-radius: 12px">
</template>

<script setup>
useHead({
  title: 'Space-Cube | Feedbacks',
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
const route = useRoute();
const { pending, data: user } = await useLazyFetch(`http://localhost:9080/users/${route.params.id}`);
</script>
