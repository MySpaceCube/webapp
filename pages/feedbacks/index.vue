<template>
  <div>
    <h1>Feedbacks</h1>
    <section v-if='!pendingPinned && feedbacksPinned' class="pined-card-section">
      <section
        v-for="(feedback, key) in feedbacksPinned.data"
        :key='key'>
        <PinedCard
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
    </section>
    <br>
    <hr>
    <section>
      <h2>{{ $t('global.other') }} {{ $t('global.feedbacks') }}</h2>
      <div v-if='!pending && feedbacks.data'>
        <ul class="d-flex feedbacks-card-section">
          <FeedbackCard
            v-for="feedback in feedbacks.data"
            :key='feedback.id'
            :feedback="feedback"
            :card-img="feedback.img ? global.imgPath + feedback.img  : 'https://wallpapercave.com/wp/wp10584479.png'"
          />
        </ul>
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
import FeedbackCard from '~/components/FeedbackCard.vue';

const api = apiStore();
const global = globalStore();

useHead({
  title: 'Space-Cube | Feedbacks',
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
const {
  pending,
  data: feedbacks
} = await useLazyAsyncData('feedbacks', () => $fetch(api.apiUrl + '/feedbacks/')) || { data: [] };
const { pendingPinned, data: feedbacksPinned } = await useLazyFetch(api.apiUrl + '/feedbacks/pinned') || { data: [] };
</script>
