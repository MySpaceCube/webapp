<template>
  <section class="top-players">
    <h2>⭐ Top Contributors</h2>
    <section v-if="!pending" class="d-flex">
      <div v-for="user in userTop.data">
        <section class="top-players-player d-flex mr-5">
          <img :src="user.avatar" alt="{{ user }}" height="60" width="60" style="border-radius: 12px">
          <section>
          <NuxtLink :to="`/users/${user.username}`" class="d-flex flex-row top-players-username">
            @{{ user.username }}
            <nuxt-img :src="getVerifyBadges(user.roles)" alt="icon" loading="lazy" height="20" width="20" style="margin-left: 5px; "/>
          </NuxtLink>
            <span class="top-players-countPoints">
              {{ getPoints() }}
            </span>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup>
import { apiStore } from '~/store/api';

const api = apiStore();

function getPoints () {
  let points = Math.round(Math.random() * 20000);
  if (points.toString().length >= 4) {
    points /= 1000;
    points = Math.round(points, 1) + ' k';
  }
  return points;
}

function getVerifyBadges (rank) {
  if (Object.values(rank).indexOf('ROLE_ADMIN') === 0 || Object.values(rank).indexOf('ROLE_SUPER_ADMIN') === 0) {
    return 'verify/verify-admin.svg';
  }
  if (Object.values(rank).indexOf('ROLE_MODERATOR') === 0) {
    return 'verify/verify-moderator.svg';
  }
  if (Object.values(rank).indexOf('ROLE_AUTHOR') === 0) {
    return 'verify/verify-author.svg';
  }
  return 'verify/verify-all.svg';
}

const {
  pending,
  data: userTop
} = await useLazyAsyncData('userTop', () => $fetch(api.apiUrl + '/users/top'));
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
