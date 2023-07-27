<template>
  <section class="feedback-infos mt-1">
    <p v-if="pending">Loading...</p>
    <div v-else-if="feedback">
      <div class="d-flex row justify-content-between">
        <h1>{{ feedback.data.title }} - {{ $t('global.feedback') }}</h1>
        <div
          v-if="store.user && store.user.roles && isGrantedAccess(store.user.roles, roles.ROLE_ADMIN)"
          class="d-flex row justify-content-between align-items-center"
        >
          <Button
            v-if="
            feedback.data.status !== 'accepted' &&
            feedback.data.status !== 'in-progress' &&
            feedback.data.status !== 'done'"
            severity="success"
            class="small-btn"
            type="button"
            @click="acceptFeedback(feedback.data.uuid)"
          >
            {{ $t('global.accept') }}
          </Button>
          <Button
            v-if="
              feedback.data.status !== 'refused' &&
              feedback.data.status !== 'in-progress' &&
              feedback.data.status !== 'done'"
            severity="danger"
            class="small-btn"
            type="button"
            @click="refuseFeedback(feedback.data.uuid)"
          >
            {{ $t('global.refuse') }}
          </Button>
        </div>
      </div>
      <Toast position="bottom-right" />
      <hr>
      <div class="d-flex">
        <FeedbackCard
          :card-img="feedback.data.img ? global.imgPath + feedback.data.img  : 'https://wallpapercave.com/wp/wp10584479.png'"
          :feedback="feedback.data"
          is-feedback-infos
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLazyFetch, useRoute } from '#app';
import { apiStore } from '~/store/api';
import { globalStore } from '~/store/global';
import { authStore } from '~/store/auth';
import FeedbackCard from '~/components/FeedbackCard.vue';
import { isGrantedAccess } from '~/utils/utils';
import { roles } from '~/utils/constant';
import axios from 'axios';
import { useToast } from 'primevue/usetoast';

const global = globalStore();
const store = authStore();
const api = apiStore();
const route = useRoute();
const toast = useToast();
const { pending, data: feedback } = await useLazyFetch(api.apiUrl + '/feedbacks/' + route.params.id);

useHead({
  title: `${pending ? '' : feedback.data.title} | Space-Cube`,
  meta: [
    { name: 'description', content: 'My amazing site.' }
  ]
});

const acceptFeedback = (uuid) => {
  axios.post(api.apiUrl + '/feedbacks/' + uuid + '/accept', {}, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + store.token
    }
  }).then((response) => {
    if (response) {
      if (feedback && feedback.data && feedback.data.status) {
        feedback.data.status = response.data.data.status;
      }
      toast.add({
        severity: 'success',
        summary: 'Success Message',
        detail: response.data.data.message,
        life: 5000
      });
    }
  }).catch((error) => {
    toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: error,
      life: 5000
    });
  });
};

const refuseFeedback = (uuid) => {
  axios.post(api.apiUrl + '/feedbacks/' + uuid + '/refuse', {}, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + store.token
    }
  }).then((response) => {
    if (response) {
      if (feedback && feedback.data && feedback.data.status) {
        feedback.data.status = response.data.data.status;
      }
      toast.add({
        severity: 'success',
        summary: 'Success Message',
        detail: response.data.data.message,
        life: 5000
      });
    }
  }).catch((error) => {
    toast.add({
      severity: 'error',
      summary: 'Error Message',
      detail: error,
      life: 5000
    });
  });
};
</script>
