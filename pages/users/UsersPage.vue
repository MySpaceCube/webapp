<template>
  <h1>I am the parent view. Created by <NuxtLink to='/users/neerfix'>Neerfix</NuxtLink></h1>
</template>

<script>
export default {
  name: 'UsersPage',
  key (route) {
    return route.fullPath;
  }
};
</script>

<style scoped>

</style>
