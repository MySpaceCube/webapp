<template>
  <h1>
    <span v-if="pending">{{ $t('global.loading') }}</span>
    <span v-if="!pending">{{ news.data.title }}</span>
  </h1>
    <div v-if='!pending && news.data'>
      <div class="card">
        <div class="border-round border-1 surface-border p-4 surface-card">
          <div class="flex mb-3">
            <div>
              <p>{{ news.data.author.username }}</p>
              <p>{{ news.data.createdAt }}</p>
            </div>
          </div>
          <p>{{ news.data.content }}</p>
        </div>
      </div>
    </div>
    <div v-if='pending'>
      <div class="card">
        <div class="border-round border-1 surface-border p-4 surface-card">
          <div class="flex mb-3">
            <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>
            <div>
              <Skeleton width="10rem" class="mb-2"></Skeleton>
              <Skeleton width="5rem" class="mb-2"></Skeleton>
              <Skeleton height=".5rem"></Skeleton>
            </div>
          </div>
          <Skeleton width="100%" height="150px"></Skeleton>
          <div class="flex justify-content-between mt-3">
            <Skeleton width="4rem" height="2rem"></Skeleton>
            <Skeleton width="4rem" height="2rem"></Skeleton>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { useLazyAsyncData, useRuntimeConfig } from 'nuxt/app';
const api = useRuntimeConfig().public.apiUrl;
const $route = useRoute();
const slug = $route.params.id;
console.log(slug);
const { pending, data: news } = await useLazyAsyncData('news', () => $fetch(`${api}/news/${slug}`)) || {
  data: []
};

useHead({
  title: `${pending ? '' : news.data.title} | Space-Cube`,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});
</script>
<style lang="scss">

</style>
