<template>
  <section class="d-flex d-lg-block top-players">
    <h2>⭐ Top Contributors</h2>
    <section v-if="!pending && userTop" class="d-flex top-players-list">
      <div v-for="user in userTop.data">
        <section class="top-players-player d-flex mr-5">
          <img :src="user.avatar" alt="{{ user }}" height="60" width="60" style="border-radius: 12px">
          <section>
          <NuxtLink :to="`/users/${user.username}`" class="d-flex flex-row top-players-username">
            @{{ user.username }}
            <NuxtImg
              :src="`/img/` + getVerifyBadges(user)"
              alt="icon"
              loading="lazy"
              height="20"
              width="20"
              style="margin-left: 5px; "
            />
          </NuxtLink>
            <span class="top-players-countPoints">
              <NuxtImg src="/img/emerald.png" alt="icon of spacecube points" loading="lazy" height="15" width="15" style="transform: translateY(3px)"/> {{ getPoints(user.points) }}
            </span>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script setup>
import { getVerifyBadges, getPoints } from '~/utils/utils';
import { useLazyAsyncData } from 'nuxt/app';

const { $api } = useNuxtApp();

const {
  pending,
  data: userTop
} = await useLazyAsyncData('userTop', () => $fetch($api + '/users/top')) || { data: [] };
</script>

<style>
.top-players {
  margin-bottom: 40px;
  flex-direction: column;
  .top-players-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    @media (min-width: 992px) {
      flex-direction: row;
    }
  }
  .top-players-player {
    margin-right: 55px;
    margin-bottom: 1rem;
    width: 175px;
    > img {
      margin-right: 12px;
    }
    .top-players-username {
      font-weight: bold;
    }
  }
}
</style>
