<template>
  <section :class="`pined-card ${invertInfos}`" :style="`background-image: url('${cardImg}')`">
    <div class="pined-card-infos">
      <h3>{{ title }}</h3>
      <p>{{ description }}</p>
      <a :href="ctaPath">
        <button class="cta-pined-card">{{ ctaLabel}}</button>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "pined-card",
  props: {
    title: {
      type: String,
      default: "title",
      required: true
    },
    description: {
      type: String,
      default: "description",
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
      default: "https://wallpapercave.com/wp/wp10584479.png",
      required: true
    },
    invertInfos: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss">
.pined-card {
  width: calc(50% - 30px);
  background-size: 100%;
  max-height: 19rem;
  min-height: 13rem;
  padding: 14px 24px;
  display: flex;
  align-items: end;
  border-radius: 1rem;
  .invertInfos {
    justify-content: end;
  }

  .pined-card-infos {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    padding: 14px 24px;
    height: 50%;
    border-radius: 1rem;
    border: 1px solid #60A5FA;

    .cta-pined-card {
      color: white;
    }
  }
}
</style>
