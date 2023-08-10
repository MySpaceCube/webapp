<script setup>

defineProps({
  resource: Object
})
</script>

<template>
  <article class="card">
    <div class="card-img">
      <img :src="resource.img" :alt="resource.title">
    </div>
    <div class="card-body">
      <h1>{{ resource.title }}</h1>
      <p>{{ resource.description }}</p>
      <p>{{ resource.downloadCount }}</p>
      <a :href="resource.link" target="_blank" class="btn btn-primary">{{ $t('global.download') }}</a>
    </div>
  </article>
</template>

<style lang="scss">

</style>
