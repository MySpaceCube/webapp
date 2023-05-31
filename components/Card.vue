<template>
  <section :class="`card`" :style="`background-image: url('${cardImg}')`">
    <div class="card-infos">
      <div class="d-flex row justify-content-between">
        <div v-if="isIconHidden" class="card-col-icon">
          <i :class="`pi pi-${iconName}`"></i>
        </div>
        <form class="card-col-infos">
          <h2>{{ $t('global.sign-in') }}</h2>
          <input type="text" name="username" placeholder="Username" required>
        </form>
      </div>
      <button class="btn btn-primary" type="submit">{{ $t('global.sign-in') }}</button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'pined-card',
  props: {
    cardImg: {
      type: String,
      default: 'https://cdn.wallpapersafari.com/3/32/iO2GTC.jpg',
      required: true
    }
  }
};
</script>
<style lang="scss">
.card {
  width: calc(100%);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 30rem;
  height: 30rem;
  min-height: 13rem;
  padding: 14px 24px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  border-radius: 1rem;

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

  .card-infos {
    background-color: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(6px);
    padding: 14px 24px;
    height: 50%;
    width: 80%;
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

    .cta-card {
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
