<template>
  <section :class="`pined-card invert-${invertInfos}`" :style="`background-image: url('${cardImg}')`">
    <div class="pined-card-infos">
      <div class="d-flex row justify-content-between">
        <div v-if="isIconHidden" class="pined-card-col-icon">
          <i :class="`pi pi-${iconName}`"></i>
        </div>
        <div class="pined-card-col-infos">
          <h3>{{ title }}</h3>
          <p>{{ description }}</p>
        </div>
        <div v-if="isShowServerInfos" class="pined-card-col-server_infos d-flex flex-column">
            <div class="d-flex row count-players">17/50</div>
            <div class="d-flex row">players</div>
        </div>
      </div>
      <NuxtLink :to="ctaPath">
        <button class="cta-pined-card">{{ ctaLabel}}</button>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pined-card',
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
    iconName: {
      type: String,
      default: 'hourglass'
    },
    isIconHidden: {
      type: Boolean,
      default: false
    },
    isShowServerInfos: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style lang="scss">
.pined-card {
  width: calc(50% - 30px);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 19rem;
  height: 19rem;
  min-height: 13rem;
  padding: 14px 24px;
  display: flex;
  align-items: flex-end;
  border-radius: 1rem;

  &.invert-true {
    justify-content: end;
  }

  .count-players {
    font-size: 1.2rem;
    font-weight: 400;
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
    height: 50%;
    width: 357px;
    border-radius: 1rem;
    border: 1px solid #60A5FA;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

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
