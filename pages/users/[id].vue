<template>
  <h1>
    {{ $route.params.id }}
    <NuxtImg
      v-if="!pending && user.data"
      :src="`/img/` + getVerifyBadges(user.data)"
      alt="icon"
      loading="lazy"
      height="20"
      width="20"
      style="margin-left: 5px; "
    />
  </h1>
  <img
    v-if="!pending && user.data"
    :src="user.data.avatar"
    alt="{{ user }}"
    height="100"
    width="100"
    class="avatar"
    style="border-radius: 12px"
  >
</template>

<script setup>
import { getVerifyBadges } from '~/utils/utils';
import { useRoute } from '#app';

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
<style lang="scss">
.avatar {
  aspect-ratio: 1;
  clip-path: polygon(100.00% 50.00%,94.27% 73.24%,78.40% 91.15%,56.03% 99.64%,32.27% 96.75%,12.57% 83.16%,1.45% 61.97%,1.45% 38.03%,12.57% 16.84%,32.27% 3.25%,56.03% 0.36%,78.40% 8.85%,94.27% 26.76%);
}
</style>
