<template>
  <h1>{{ $t('global.resources') }}</h1>
    <div v-if='!pending && resources.data'>
      <ul class="d-flex feedbacks-card-section">
        <li v-for="resource in resources.data" :key="resource.id">
          <ResourceCard :resource="resource"></ResourceCard>
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
  data: resources
} = await useLazyAsyncData(
  'resources',
  () => $fetch($api + '/resources?page=' + page)
) || {
  data: []
};
</script>
