<template>
  <div>
    <h1>Feedbacks</h1>
    <section v-if='!pendingPinned'>
      <section
        v-for="feedback in feedbacksPinned"
        :key='feedback.id' class="pined-card-section">
        <PinedCard
          :title="feedback.title"
          :description="feedback.description"
          cta-label="play.space-cube.xyz"
          :cta-path="`/feedbacks/${feedback.id}`"
          :is-icon-hidden="false"
          card-img="https://www.minecraft.net/content/dam/games/badger/key-art/MC_Badger-Gather-Your-Strength_1200x540.png.transform/minecraft-image-large/image.png"
        />
      </section>
    </section>
    <!-- TODO COMPONENTS   -->
    <section>
      <h2>Other Feedback</h2>
      <div v-if='!pending'>
        <ul
          v-for="feedback in feedbacks.data"
          :key='feedback.id'
        >
          <li>
            <NuxtLink :to="`/feedbacks/${feedback.id}`">{{ feedback.title }}</NuxtLink>
            {{ $t('global.createdBy') }}
            <NuxtLink :to="`/users/${feedback.author.username}`">{{ feedback.author.username }}</NuxtLink>
            at
          </li>
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
import Skeleton from 'primevue/skeleton';

useHead({
  title: 'Space-Cube | Feedbacks',
  meta: [
    {name: 'description', content: 'My amazing site.'}
  ],
  bodyAttrs: {
    class: 'test'
  }
});
const {
  pending,
  data: feedbacks
} = await useLazyAsyncData('feedbacks', () => $fetch('http://localhost:9080/feedbacks/'));
const {pendingPinned, data: feedbacksPinned} = await useLazyFetch('http://localhost:9080/feedbacks/pinned');
</script>
