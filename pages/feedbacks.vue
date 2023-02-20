<template>
  <div>
    <h1>Feedbacks</h1>
    <section>
      <section class="pined-card-section">
        <PinedCard
          title="SpaceCube Hardcore"
          description="Tu vas manger tes grands morts"
          cta-label="play.space-cube.xyz"
          cta-path="/servers/spacecube"
          :is-icon-hidden="false"
          is-show-server-infos
          card-img="https://www.minecraft.net/content/dam/games/badger/key-art/MC_Badger-Gather-Your-Strength_1200x540.png.transform/minecraft-image-large/image.png"
        />
        <PinedCard
          title="PeepsLords"
          description="Serveur Moddes avec le modpack Medieval"
          cta-label="peepslords.space-cube.xyz"
          cta-path="/servers/peepslords"
          card-img="https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Dungeons_Image-0_XGP-Dungeons_1200x432.jpg.transform/minecraft-image-large/image.jpg"
          invert-infos
          :is-icon-hidden="false"
          is-show-server-infos
        />
      </section>
    </section>
    <!-- TODO COMPONENTS   -->
    <section>
      <h2>Other Feedback</h2>
      <div v-if='!pending'>
        <ul
          v-for="feedback in feedbacks"
          :key='feedback.id'
          >
          <li>
            {{ feedback.title }} created by {{ feedback.author.username }} at {{ feedback.createdAt }}
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
    { name: 'description', content: 'My amazing site.' }
  ],
  bodyAttrs: {
    class: 'test'
  }
});
const { pending, data } = await useLazyAsyncData('feedbacks', () => $fetch('http://localhost:9080/feedbacks'));
watch(data, (feedbacks) => {
  // Because count starts out null, you won't have access
  // to its contents immediately, but you can watch it.
  console.log(feedbacks);
  console.log(pending);
});
</script>
