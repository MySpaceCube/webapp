<template>
  <aside class="d-none d-lg-flex">
    <nav>
      <NuxtLink to="/" class="logo">
        <NuxtImg src="/img/logo.png" alt="logo of spacecube" loading="lazy" height="40" width="40"/>
      </NuxtLink>
      <ul class="start">
        <li>
          <NuxtLink to="/">
            <i class="pi pi-home"></i>
            <span>{{ $t('global.nav.home') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news">
            <i class="pi pi-megaphone"></i>
            <span>{{ $t('global.nav.news') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/feedbacks">
            <i class="pi pi-directions-alt"></i>
            <span>{{ $t('global.nav.feedbacks') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/resources">
            <i class="pi pi-box"></i>
            <span>{{ $t('global.nav.resources') }}</span>
          </NuxtLink>
        </li>
        <hr>
        <li>
          <NuxtLink to="/server">
            <i class="pi pi-server"></i>
            <span>{{ $t('global.nav.servers') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/website">
            <i class="pi pi-globe"></i>
            <span>{{ $t('global.nav.website') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            <i class="pi pi-exclamation-circle"></i>
            <span>{{ $t('global.nav.about') }}</span>
          </NuxtLink>
        </li>
      </ul>
      <div class="version">
        <strong v-if="`${ global.beta }`">Beta</strong> <br>
        <span>V{{ global.version }}</span>
      </div>
    </nav>
  </aside>
  <div id="overlay" class="overlay" @click="toggleMenu()"></div>
  <aside class="mobile-section-sidebar d-flex d-lg-none">
    <section id="icon-menu-mobile" class="icon-menu" @click="toggleMenu()">
      <div></div>
      <div></div>
      <div></div>
    </section>
    <section id='mobile-menu' class="mobile-sidebar">
      <section class="user-mobile">
        <div v-if="store.user" class="user-infos-mobile">
          <div class="user-avatar-mobile">
            <NuxtImg v-if="store.user.avatar" :src="`${store.user.avatar}`" alt="avatar of user" loading="lazy"
                     height="75" width="75"/>
          </div>
          <div class="user-name">
            <span>{{ store.user.username }}</span>
          </div>
          <div class="user-stats-mobile">
            <div class="stats-block">
              <div class="stats-block-stats">
                <div class="stats">
                  0
                </div>
                <span>Assets</span>
              </div>
            </div>
            <div class="stats-block">
              <div class="stats-block-stats">
                <div class="stats">
                  0
                </div>
                <span>Feedbacks</span>
              </div>
            </div>
            <div class="stats-block">
              <div class="stats-block-stats">
                <div class="stats">
                  0
                </div>
                <span>Likes</span>
              </div>
            </div>
            <div class="stats-block">
              <div class="stats-block-stats">
                <div class="stats">
                  {{ store.user.points }}
                </div>
                <span>Points</span>
              </div>
            </div>
          </div>
          <ul class="user-menu-mobile">
            <li>
              <NuxtLink to="users/settings">
                <i class="pi pi-fw pi-cog"></i>
                <span>{{ $t('global.nav.user.settings') }}</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="logout">
                <i class="pi pi-power-off"></i>
                <span>{{ $t('global.logout') }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div v-else class="anonymous-infos-mobile">
          <ul>
            <li>
              <NuxtLink to="login">
                <i class="pi pi-power-off"></i>
                <span>{{ $t('global.sign-in') }}</span>
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="register">
                <i class="pi pi-user-plus"></i>
                <span>{{ $t('global.sign-up') }}</span>
              </NuxtLink>
            </li>
          </ul>
        </div>
      </section>
      <hr>
      <ul class="mobile-menu">
        <li>
          <NuxtLink to="/">
            <i class="pi pi-home"></i>
            <span>{{ $t('global.nav.home') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/news">
            <i class="pi pi-megaphone"></i>
            <span>{{ $t('global.nav.news') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/feedbacks">
            <i class="pi pi-directions-alt"></i>
            <span>{{ $t('global.nav.feedbacks') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/resources">
            <i class="pi pi-box"></i>
            <span>{{ $t('global.nav.resources') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/server">
            <i class="pi pi-server"></i>
            <span>{{ $t('global.nav.servers') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/website">
            <i class="pi pi-globe"></i>
            <span>{{ $t('global.nav.website') }}</span>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">
            <i class="pi pi-exclamation-circle"></i>
            <span>{{ $t('global.nav.about') }}</span>
          </NuxtLink>
        </li>
      </ul>
<!--      <hr>-->
<!--      <section v-if="store.user" class="user-mobile">-->
<!--        <div class="user-infos-mobile">-->
<!--          <ul class="user-menu-mobile">-->
<!--            <li>-->
<!--              <NuxtLink to="logout">-->
<!--                <i class="pi pi-power-off"></i>-->
<!--                <span>{{ $t('global.logout') }}</span>-->
<!--              </NuxtLink>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </section>-->
    </section>
  </aside>
</template>

<script setup>
import { globalStore } from '~/store/global';
import { authStore } from '~/store/auth';

const store = authStore();

const global = globalStore();

const toggleMenu = () => {
  document.getElementById('mobile-menu').classList.toggle('show');
  document.getElementById('overlay').classList.toggle('show');
  document.getElementById('icon-menu-mobile').classList.toggle('show');
};
</script>
<style lang="scss">
@import '../assets/scss/global.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

aside nav {
  font-family: Inter, sans-serif;
  display: flex;
  flex-direction: column;
  background-color: $blue;
  width: 72px;
  font-size: 10px;
  text-align: center;
  position: fixed;
  left: 1rem;
  top: 1rem;
  bottom: 1rem;
  border-radius: 10px;
  padding: 0;

  .logo {
    margin-top: 1rem;
    background: none;
  }

  a span, a i {
    background: $cyan-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    text-decoration: none;
  }

  ul, ul > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    left: 1rem;
    top: 5rem;
    bottom: 1rem;
    padding: 0;
    width: 72px;

    div.start {
      z-index: 2000;
      justify-content: start;
      height: fit-content;
    }

    div.end {
      z-index: 1999;
      justify-content: end;
    }
  }

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;
    padding: 0;
    width: 100%;
    height: 72px;
    margin-bottom: 1rem;

    i {
      font-size: 1.3rem;
    }

    a {
      background: none;
      height: 55px;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 6px;

      &.router-link-active,
      &.router-link-exact-active {
        &::after {
          content: "";
          position: absolute;
          display: block;
          background: $pink-gradient;
          width: 4px;
          height: 65px;
          right: 0;
          border-radius: 20px;
        }

        background-color: $blue-dark;

        span {
          display: block;
          opacity: 1;
          text-transform: uppercase;
        }
      }

      span {
        display: block;
        flex-direction: column;
        padding-top: 5px;
        opacity: 1;
      }
    }
  }

  .version {
    position: absolute;
    display: block;
    bottom: 20px;
    font-size: 0.9rem;
    background: #0000004a;
    padding: 0.5rem;
    border-radius: 10px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
  }
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(0 0 0 / 64%);
  z-index: 1000;
  display: none;
  transition: 0.3s;
  &.show {
    display: block;
    transition: 0.3s;
  }
}

.icon-menu {
  position: absolute;
  top: 15px;
  right: 15px;
  display: block;
  z-index: 3000;
  transition: 0.3s;
  div {
    height: 2px;
    background: #fff;
    width: 30px;
    margin-bottom: 6px;
    transition: 0.3s;
  }
  &.show {
    div:nth-child(1) {
      transform: rotate(45deg) translate(5px, 6px);
      transition: 0.3s;
    }
    div:nth-child(2) {
      width: 0;
      transition: 0.3s;
    }
    div:nth-child(3) {
      transform: rotate(-45deg) translate(5px, -6px);
      transition: 0.3s;
    }
  }
}

.user-mobile {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;

  .user-avatar-mobile {
    border-radius: 50%;
    border: 10px solid transparent;
    background: transparent;
    background-clip: padding-box;
    position: relative;
    height: 85px;
    width: 85px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: 2;
      position: absolute;
      border-radius: 50%;
      border: 3px solid $blue;
    }

    &:after {
      content: "";
      display: block;
      width: 109%;
      height: 109%;
      position: absolute;
      top: -8px;
      right: 0;
      bottom: 0;
      left: -8px;
      z-index: 1;
      margin: 5px;
      border-radius: 50%;
      background: linear-gradient(0deg, #3561FF 26.05%, #8354EB 100%);
    }
  }
}

.user-stats-mobile {
  margin: 2rem 0;
  flex-direction: row !important;
  justify-content: space-between;
  .stats-block {
    border-radius: 15px;
    border: 10px solid transparent;
    background-clip: padding-box;
    position: relative;
    display: flex;
    flex-direction: column;

    .stats-block-stats {
      z-index:2;
      width: 68px;
      border-radius: 13px;
      background: $blue;
      padding: 0.5rem 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        position: absolute;
        transform: translateY(250%);
        font-weight: 600;
        font-size: 0.7rem
      }
    }

    &:after {
      content: "";
      display: block;
      width: calc(100% + 6px);
      height: calc(100% + 6px);
      position: absolute;
      top: -8px;
      right: 0;
      bottom: 0;
      left: -8px;
      z-index: 1;
      margin: 5px;
      border-radius: 15px;
      background: linear-gradient(0deg, #3561FF 26.05%, #8354EB 100%);
    }
  }
}

.user-infos-mobile,
.user-stats-mobile {
  width: 100%;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user-menu-mobile {
  width: 100%;
  list-style: none;
  padding: 0;
}

.mobile-section-sidebar {
  position: fixed;
  width: calc(100% - 5rem);
  height: 100%;
  z-index: 2000;
  top: 0;
  bottom: 0;
  left: 5rem;
  right: 0;
  flex-direction: column;
}

.mobile-sidebar {
  background-color: $blue;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  padding: 0.5rem 1rem;
  transition: 0.3s;
  transform: translateX(100%);

  &.show {
    transition: 0.3s;
    transform: translateX(0%);
  }

  .mobile-menu,
  .user-infos-mobile,
  .anonymous-infos-mobile {
    border-radius: 0;
    padding: 0.5rem 1rem;
    list-style: none;
    display: block;
    width: 100%;

    & > div {

      div.start {
        z-index: 2000;
        justify-content: start;
        height: fit-content;
      }

      div.end {
        z-index: 1999;
        justify-content: end;
      }
    }

    a {
      background: none;
      height: 55px;
      width: 100%;
      text-decoration: none;
      display: flex;
      flex-direction: row;
      align-items: center;
      border-radius: 6px;
      padding: 0.5rem 1rem;

      i {
        margin-right: 1rem;
      }

      &.router-link-active,
      &.router-link-exact-active {
        &::after {
          content: "";
          position: absolute;
          display: block;
          background: $pink-gradient;
          width: 4px;
          height: 65px;
          left: 0;
          border-radius: 20px;
        }

        background-color: $blue-dark;

        span {
          display: block;
          opacity: 1;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
