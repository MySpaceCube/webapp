<template>
  <h1>{{ $t('global.news') }}</h1>
    <div v-if='!pending && news.data'>
      <ul class="d-flex feedbacks-card-section">
        <li v-for="article in news.data" :key="article.id">
          <NuxtLink :to='`./news/${article.slug}`'>
            {{ article.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <div v-if='pending'>
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
</template>
<script setup>
import Skeleton from 'primevue/skeleton';
import { useLazyAsyncData, useRuntimeConfig } from 'nuxt/app';
const api = useRuntimeConfig().public.apiUrl;

const page = 1;

const {
  pending,
  data: news
} = await useLazyAsyncData(
  'news',
  () => $fetch(api + '/news?page=' + page)
) || {
  data: []
};
</script>
