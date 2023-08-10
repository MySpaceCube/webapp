<template>
  <h1>{{ $t('global.news') }}</h1>
    <div v-if='!pending && news.data'>
      <ul class="d-flex feedbacks-card-section">
        <li v-for="article in news.data" :key="article.id">
          {{ article.title }}
        </li>
      </ul>
    </div>
    <div v-if='pending'>
      <Skeleton shape='list'/>
      <Skeleton shape='list'/>
      <Skeleton shape='list'/>
      <Skeleton shape='list'/>
    </div>
</template>
<script setup>
import Skeleton from 'primevue/skeleton';
import {useLazyAsyncData} from "nuxt/app";
import ResourceCard from "../../components/blocks/ResourceCard.vue";
const { $api } = useNuxtApp();

let page = 1;

const {
  pending,
  data: news
} = await useLazyAsyncData(
  'news',
  () => $fetch($api + '/news?page=' + page)
) || {
  data: []
};
</script>
