<template>
  <section class="feedback-card d-flex flex-column" :class="isFeedbackInfos ? '' : 'animated'" :style="`background-image: url('${cardImg}')`">
    <div class="feedback-card-likes">
      <span class="feedback-date">{{ feedback.author.username }} <NuxtImg v-if="feedback.author" :src="`/img/` + getVerifyBadges(feedback.author)" alt="icon" loading="lazy" style="margin-left: 5px; "/> | {{ getDateFormat(feedback.createdAt) }}</span>
      &nbsp;-&nbsp;
      <span class="likes">1</span>
      <NuxtImg src="/img/heart-full.png" height="24px" width="24px" />
    </div>
    <NuxtLink :to="!isFeedbackInfos ? `feedbacks/${feedback.slug}` : ''" class="feedback-card-infos">
      <div class="d-flex row justify-content-between">
        <div class="d-flex flex-row justify-content-between">
          <NuxtImg :src="`${feedback.author.avatar}`" height="24" width="24" class="img-avatar-feedback" />
        </div>
        <div>
          <h3>{{ feedback.title }}</h3>
          <p>{{ formatDescription(feedback.description) }}</p>
        </div>
      </div>
      <div class="feedback-card-footer d-flex">
        <Badge :severity="feedbackVariantStatus(feedback.status)">
          {{ $t('global.feedbacksInfos.statuses.' + feedback.status) }}
        </Badge>
        <Badge :severity="feedbackVariantType(feedback.type)" style="margin-left: 0.5rem;">
          {{ $t('global.feedbacksInfos.types.' + feedback.type) }}
        </Badge>
        <Badge :severity="feedbackVariantTargetApp(feedback.targetApp.id)" style="margin-left: 0.5rem;">
          {{ $t('global.feedbacksInfos.targetApp.' + feedbackTransTargetApp(feedback.targetApp.id)) }}
        </Badge>
      </div>
    </NuxtLink>
  </section>
</template>

<script>
import Badge from 'primevue/badge';
import {
  feedbackVariantType,
  feedbackVariantStatus,
  feedbackVariantTargetApp,
  feedbackTransTargetApp,
  getVerifyBadges
} from '~/utils/utils';

export default {
  name: 'feedback-card',
  components: {
    Badge
  },
  data () {
    return {
      server: null
    };
  },
  props: {
    cardImg: {
      type: String,
      default: 'https://wallpapercave.com/wp/wp10584479.png',
      required: true
    },
    feedback: {
      type: Object,
      required: true
    },
    isFeedbackInfos: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatDescription (description) {
      if (this.isFeedbackInfos) {
        return description;
      }
      return description.substring(0, 40) + '...';
    },
    getVerifyBadges,
    feedbackTransTargetApp,
    feedbackVariantType,
    feedbackVariantTargetApp,
    feedbackVariantStatus
  }
};
</script>
<style lang="scss">
.feedbacks-card-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
  &> * {
    width: 49% !important;
  }
}
.feedback-card {
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  border-radius: 1rem;
  margin-bottom: 2rem;
  transition: 0.5s;

  &.animated {
    &:hover {
      transition: 0.5s;
      transform: scale(1.05);
      z-index: 5;
    }
  }

  .feedback-card-infos {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    padding: 14px 24px;
    min-height: 100%;
    min-width: 100%;
    border-radius: 1rem;
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    transition: 0.5s;
    &:hover {
      border: 1px solid #60A5FA;
      transition: 0.5s;
    }

    .cta-feedback-card {
      cursor: pointer;
      color: white;
      border-radius: 12px !important;
      border: 1px solid #60A5FA !important;
      padding: 8px 24px;
      height: 36px !important;
      width: 100%;
    }
  }
}
</style>
