<template>
  <h1>Profile page of {{ $route.params.id }}</h1>

  {{ pending }}
  {{ user }}
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
const route = useRoute();
const { pending, data: user } = await useLazyFetch(`http://localhost:9080/users/${route.params.id}`);
</script>
