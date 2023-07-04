<template>
  <section class="card" :class="signIn ? 'card-login' : ''" :style="`background-image: url('${cardImg}')`">
    <div class="card-infos" :class="signIn ? 'form-login' : ''">
      <div class="d-flex row justify-content-between">
        <div v-if="isIconHidden" class="card-col-icon">
          <i :class="`pi pi-${iconName}`"></i>
        </div>
        <form class="card-col-infos">
          <h2>{{ $t('global.sign-in') }}</h2>
          <input id="input-username" type="text" name="email" v-model="form.email" :placeholder="`${ $t('global.email') }`" required>
          <input id="input-password" type="password" name="password" v-model="form.password" :placeholder="`${ $t('global.password') }`" required>
        </form>
      </div>
      <button class="btn btn-primary" type="submit" @click="submit()" :disabled="isLoading || !isValid">
        <span v-if="isLoading">
          {{ $t('global.loading') }}
        </span>
        <span v-else>{{ $t('global.sign-in') }}</span>
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { authStore } from "~/store/auth";

export default {
  name: 'card',
  props: {
    cardImg: {
      type: String,
      default: 'https://cdn.wallpapersafari.com/3/32/iO2GTC.jpg',
      required: false
    },
    iconName: {
      type: String,
      default: null,
      required: false
    },
    isIconHidden: {
      type: Boolean,
      required: false,
      default: false
    },
    signIn: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    ...mapState(authStore, ['isLogged'])
  },
  watch: {
    'form.username' () {
      this.isLoading = false;
      if (this.form.email !== null && this.form.email !== undefined && this.form.email !== '') {
        document.getElementById('input-username').classList.add('valid');
        this.isValid = this.form.password !== null && this.form.password !== undefined && this.form.password !== '';
      } else {
        this.isValid = false;
        document.getElementById('input-username').classList.remove('valid');
      }
    },
    'form.password' () {
      this.isLoading = false;
      if (this.form.password !== null && this.form.password !== undefined && this.form.password !== '') {
        document.getElementById('input-password').classList.add('valid');
        this.isValid = this.form.password !== null && this.form.password !== undefined && this.form.password !== '';
      } else {
        this.isValid = false;
        document.getElementById('input-password').classList.remove('valid');
      }
    }
  },
  data () {
    return ({
      form: {
        email: null,
        password: null
      },
      isLoading: false,
      isValid: false,
    });
  },
  methods: {
    ...mapActions(authStore, ['fetchUser']),
    async submit() {
      this.isLoading = true;
      await this.fetchUser(this.form);
      if (this.isLogged) {
        return navigateTo('/');
      }
      this.isLoading = true;
    }
  }
};
</script>
<style lang="scss">
@import '../assets/scss/settings/color';
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

  &.card-login {
    justify-content: end !important;
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

    &.form-login {
      height: fit-content;
      width: 50%;
      justify-content: end !important;

      div, .card-col-infos {
        width: 100% !important;
        input {
          width: 100% !important;
          margin-bottom: 1rem;
          height: 36px !important;
          border-radius: 12px !important;
          background: rgba(26, 26, 26, 0.2) !important;
          -webkit-backdrop-filter: blur(6px);
          backdrop-filter: blur(6px);
          &:disabled {
            cursor: not-allowed !important;
          }

          &.valid {
            border: 1px solid $success !important;
          }
        }
      }
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

    .cta-card {
      cursor: pointer;
      color: white;
      border-radius: 12px !important;
      border: 1px solid #60A5FA !important;
      padding: 8px 24px;
      height: 36px !important;
      width: 100%;
    }

    button.btn.btn-primary {
      cursor: pointer;
      color: white;
      border-radius: 12px !important;
      border: 1px solid #60A5FA !important;
      background: linear-gradient(162.34deg, #161A42 22.61%, #0B0D21 118.29%) !important;
      padding: 8px 24px;
      height: 36px !important;
      width: 100%;
      transition: 0.5s ease-in-out;

      &:disabled {
        border: 1px solid #828282 !important;
        background: linear-gradient(162.34deg, #30345d 22.61%, #0B0D21 118.29%) !important;
        cursor: not-allowed !important;
        transition: 0.5s ease-in-out;
      }
    }
  }
}
</style>
