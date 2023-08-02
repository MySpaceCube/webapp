<template>
  <div>
    <h1>Feedbacks</h1>
      <section
        v-if='!pendingPinned && feedbacksPinned'
        class="pined-card-section">
        <PinedCard
          v-for="(feedback, key) in feedbacksPinned.data"
          :key='key'
          :invertInfos="key === 1"
          :title="feedback.title"
          :description="feedback.description"
          is-feedback
          :feedback="feedback"
          :author="feedback.author"
          :card-path="`/feedbacks/${feedback.slug}`"
          :cta-label="$t('global.readMore')"
          :cta-path="`/feedbacks/${feedback.slug}`"
          :card-img="`${global.imgPath}${feedback.img}` || 'https://www.minecraft.net/content/dam/games/badger/key-art/MC_Badger-Gather-Your-Strength_1200x540.png.transform/minecraft-image-large/image.png'"
        />
      </section>
    <br>
    <hr>
    <section>
      <h2>{{ $t('global.other') }} {{ $t('global.feedbacks') }}</h2>
      <div v-if='!pending && feedback.feedbacks'>
        <ul class="d-flex feedbacks-card-section">
          <li v-for="feedback in feedback.feedbacks" :key="feedback.id">
            <FeedbackCard :feedback="feedback"></FeedbackCard>
          </li>
        </ul>
        <Paginate v-model="page"
                  :page-count="feedback.pagination.maxPage"
                  :click-handler="updatePagination">
        </Paginate>
      </div>
      <div v-if='pending'>
        <Skeleton shape='list'/>
        <Skeleton shape='list'/>
        <Skeleton shape='list'/>
        <Skeleton shape='list'/>
      </div>
    </section>
  </div>
</template>

<script setup>
import { apiStore } from '~/store/api';
import { globalStore } from '~/store/global';
import Skeleton from 'primevue/skeleton';
import PinedCard from '~/components/PinedCard.vue';
import { feedbackStore } from '~/store/feedback';

import Paginate from 'vuejs-paginate-next';

const api = apiStore();
const global = globalStore();
const feedback = feedbackStore();

let page = 1;
useHead({
  title: 'Space-Cube | Feedbacks',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
feedback.getFeedbacks(page);

const updatePagination = (data) => {
  page = data;
  feedback.getFeedbacks(page);
};
const { pendingPinned, data: feedbacksPinned } = await useLazyFetch(api.apiUrl + '/feedbacks/pinned') || { data: [] };
</script>
