<template>
  <section class="top-players">
    <h2>⭐ Top Contributors</h2>
    <section v-if="!pending && userTop" class="d-flex">
      <div v-for="user in userTop.data">
        <section class="top-players-player d-flex mr-5">
          <img :src="user.avatar" alt="{{ user }}" height="60" width="60" style="border-radius: 12px">
          <section>
          <NuxtLink :to="`/users/${user.username}`" class="d-flex flex-row top-players-username">
            @{{ user.username }}
            <nuxt-img :src="`/img/` + getVerifyBadges(user, false)" alt="icon" loading="lazy" height="20" width="20" style="margin-left: 5px; "/>
          </NuxtLink>
            <span class="top-players-countPoints">
              {{ getPoints(user.points) }} PTS
            </span>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup>
import { apiStore } from '~/store/api';
import { getVerifyBadges, getPoints } from '~/utils/utils';

const api = apiStore();

const {
  pending,
  data: userTop
} = await useLazyAsyncData('userTop', () => $fetch(api.apiUrl + '/users/top')) || { data: [] };
</script>

<style>
.top-players {
  margin-bottom: 40px;
  .top-players-player {
    > img {
      margin-right: 12px;
    }
    .top-players-username {
      font-weight: bold;
    }
    margin-right: 55px;
  }
}
</style>
