<template>
  <section :class="`pined-card invert-${invertInfos}`" :style="`background-image: url('${cardImg}')`">
    <div class="pined-card-infos">
      <div v-if="isFeedback" class="feedback-card-likes">
        <span class="feedback-date">{{ feedback.author.username }}<NuxtImg v-if="feedback.author" :src="`/img/` + getVerifyBadges(feedback.author)" alt="icon" loading="lazy" style="margin-left: 5px; "/> | {{ getDateFormat(feedback.createdAt) }}</span>
        &nbsp;-&nbsp;
        <span class="likes">1</span>
        <NuxtImg src="/img/heart-full.png" height="24px" width="24px" />
      </div>
      <div class="d-flex row justify-content-between">
        <div v-if="!isIconHidden" class="pined-card-col-icon">
          <i :class="`pi pi-${iconName}`"></i>
        </div>
        <div v-if="isFeedback" class="d-flex flex-row justify-content-between">
          <NuxtImg :src="`${author.avatar}`" height="24" width="24" class="img-avatar-feedback" />
        </div>
        <div class="pined-card-col-infos">
          <h3>{{ title }}</h3>
          <p>{{ formatDescription(description) }}</p>
        </div>
        <div v-if="isShowServerInfos && server" class="pined-card-col-server_infos d-flex flex-column">
            <div v-if="server" class="d-flex row count-players">{{ server.players.online }}/{{ server.players.max }}</div>
            <div class="d-flex row count-players-label">players</div>
        </div>
      </div>
      <NuxtLink :to="ctaPath">
        <button class="cta-pined-card">{{ ctaLabel}}</button>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'pined-card',
  mounted () {
    if (!this.isShowServerInfos) return;
    // TODO: set server ip in const
    axios.get('https://api.minetools.eu/ping/87.98.154.169/25583')
      .then((response) => {
        this.server = response.data;
      });
  },
  data () {
    return {
      server: null
    };
  },
  props: {
    title: {
      type: String,
      default: 'title',
      required: true
    },
    description: {
      type: String,
      default: 'description',
      required: true
    },
    ctaPath: {
      type: String,
      required: true
    },
    ctaLabel: {
      type: String,
      required: true
    },
    cardImg: {
      type: String,
      default: 'https://wallpapercave.com/wp/wp10584479.png',
      required: true
    },
    invertInfos: {
      type: Boolean,
      default: false
    },
    isFeedback: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: 'hourglass'
    },
    author: {
      type: Object,
      required: false
    },
    feedback: {
      type: Object,
      required: false
    },
    isIconHidden: {
      type: Boolean,
      default: true
    },
    isShowServerInfos: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    formatDescription (description) {
      return description.substring(0, 40) + '...';
    }
  }
};
</script>
<style lang="scss">
.pined-card-section {
  display: flex;
  flex-wrap: wrap;
}
@media (max-width: 1200px) {
  .pined-card-section > * {
    width: 49% !important;
    &:first-child:nth-last-child(1) {
      width: 100% !important;
    }
  }
}
.pined-card {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 19rem;
  height: 19rem;
  min-height: 13rem;
  min-width: 100%;
  padding: 14px 24px;
  display: flex;
  align-items: flex-end;
  border-radius: 1rem;
  margin-bottom: 1rem;
  @media screen and (min-width: 1200px) {
    min-width: 49%;
  }

  &.invert-true {
    justify-content: end;
  }

  .count-players {
    font-size: 0.75rem;
    font-weight: 400;
    position: absolute;
    right: 5px;
  }

  .count-players-label {
    display: none;
  }

  @media screen and (min-width: 1200px) {
    .count-players {
      font-size: 1.2rem;
      font-weight: 400;
    }
    .count-players-label {
      display: block;
    }
  }

  i.pi {
    background: linear-gradient(24.06deg, #50C9C3 2.61%, #B6DE96 118.09%);
    // box-shadow: 0px 13px 17px rgba(140, 213, 105, 0.6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
    font-size: 1.5rem;
    margin-right: 1rem;
    margin-top: 0.3rem;
  }

  .pined-card-infos {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    padding: 14px 24px;
    min-height: 50%;
    width: 357px;
    max-width: 100%;
    border-radius: 1rem;
    border: 1px solid #60A5FA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    div.pined-card-col-infos {
      width: 80%;
    }

    h3 {
      margin: 0;
    }

    p {
      margin: 6px 0;
      width: 200px;
      font-size: 12px;
      line-height: 1rem;
    }

    a {
      text-decoration: none !important;
      background-image: none;
      width: 100%;
    }

    .cta-pined-card {
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
