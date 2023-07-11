<template>
  <header>
    <section id="header-search-bar">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" v-model="search" :placeholder="`${ $t('global.nav.search') }`" class="search"/>
      </span>
    </section>
    <section id="header-action-bar">
      <section id="header-action-bar--logged" v-if="store.isLogged">
        <span class="p-input-icon-left">
          <span class="input">
            <nuxt-img src="gold-pts.svg" alt="icon of spacecube points" loading="lazy" height="27" width="27" />
            <span>{{ store.user.points }} pts</span>
          </span>
        </span>
        <span class="p-input-icon-left">
          <Button type="button" icon="pi pi-bell" class="input p-button-text" />
        </span>
        <span v-if="store.user.isVerify && store.user.isMinecraftVerify" class="p-input">
          <Button
            type="button"
            class="input p-button-text"
            aria-haspopup="true"
            aria-controls="overlay_create"
            :label="`${ $t('global.nav.create.label') }`"
            :placeholder="`${ $t('global.nav.create.label') }`"
            @click="toggle"
          />
          <TieredMenu ref="menu" id="overlay_create" :model="itemsCreate" :popup="true" />
        </span>
        <span v-if="store.isAdmin" class="p-input-administration">
          <Button type="button" class="input p-button-text" :label="`${ $t('global.nav.admin') }`" :placeholder="`${ $t('global.nav.admin') }`" />
        </span>
        <div class="vertical-separator" />
        <section class="me-info d-flex row align-items-center">
          <Avatar
          :image="`${store.user.avatar}`"
          size="large"
          shape="circle"
          />
          <section class="d-flex flex-column ml-1">
            <Button
            type="button"
            class="p-button-text d-flex flex-column justify-content-start align-items-start"
            aria-haspopup="true"
            aria-controls="overlay_me"
            @click="toggleUser"
            >
              <span class="header-me-info-pseudo">{{store.user.username}}</span>
              <span class="text-muted">
                {{ $t('global.roles.' + showRole()) }}
              </span>
            </Button>
            <TieredMenu ref="menuUser" id="overlay_me" :model="itemsUser" :popup="true" />
          </section>
          <i class="pi pi-angle-down" />
        </section>
      </section>
      <section v-else id="header-action-bar--logged">
        <NuxtLink to="login" class="p-input">
          <Button class="input p-button-text" label="Sign-in" placeholder="Sign-in" />
        </NuxtLink>
        <NuxtLink to="register" class="p-input-administration">
          <Button class="input p-button-text" label="Sign-up" placeholder="Sign-up" />
        </NuxtLink>
      </section>
    </section>
  </header>
</template>

<script setup>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';
import TieredMenu from 'primevue/tieredmenu';
import { getCurrentRole } from '~/utils/utils';
import { ref } from 'vue';
import { authStore } from '~/store/auth';
const store = authStore();
const { t } = useI18n();
const menu = ref();
const menuUser = ref();

const toggle = (event) => {
  menu.value.toggle(event);
};

const toggleUser = (event) => {
  menuUser.value.toggle(event);
};

const itemsUser = ref([
  {
    label: t('global.nav.user.profile'),
    icon: 'pi pi-fw pi-user',
    disabled: true
  },
  {
    label: t('global.nav.user.settings'),
    icon: 'pi pi-fw pi-cog',
    to: '/users/settings'
  },
  { separator: true },
  {
    label: t('global.logout'),
    icon: 'pi pi-fw pi-power-off',
    disabled: false,
    to: '/logout'
  }
]);

const itemsCreate = ref([
  {
    label: t('global.nav.create.feedback'),
    icon: 'pi pi-directions-alt',
    disabled: true
  },
  {
    label: t('global.nav.create.news'),
    icon: 'pi pi-megaphone',
    disabled: true
  },
  {
    label: t('global.nav.create.server'),
    icon: 'pi pi-fw pi-server',
    disabled: true
  },
  {
    label: t('global.nav.create.resources.label'),
    icon: 'pi pi-box',
    items: [
      {
        label: t('global.nav.create.resources.texturePack'),
        icon: 'pi pi-fw pi-image',
        disabled: true
      },
      {
        label: t('global.nav.create.resources.datapack'),
        icon: 'pi pi-fw pi-th-large',
        disabled: true
      },
      {
        label: t('global.nav.create.resources.mod'),
        icon: 'pi pi-fw pi-box',
        disabled: true
      },
      {
        label: t('global.nav.create.resources.map'),
        icon: 'pi pi-fw pi-map',
        disabled: true
      },
      {
        label: t('global.nav.create.resources.skin'),
        icon: 'pi pi-fw pi-users',
        disabled: true
      },
      {
        label: t('global.nav.create.resources.plugin'),
        icon: 'pi pi-fw pi-play',
        disabled: true
      },
      {
        label: t('global.nav.create.resources.other'),
        icon: 'pi pi-fw pi-users',
        disabled: true
      }
    ]
  }
]);

const showRole = () => {
  return getCurrentRole(store.user.roles[0]);
};
</script>

<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  #header-search-bar {
    .p-inputtext.search {
      width: 446px;
    }
  }
  #header-action-bar {
    #header-action-bar--logged {
      max-width: 450px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.vertical-separator:after {
  content: "";
  display: block;
  width: 2px;
  height: 60px;
  margin-top: 7px;
  margin-right: 1rem;
  background: linear-gradient(90deg, rgba(151, 150, 240, 1), rgba(251, 199, 212, 1));
}
span.header-me-info-pseudo {
  color: rgba(226, 228, 233, 1);
}

span.text-muted {
  color: rgba(147, 197, 253, 1);
}

.me-info button {
  margin: 0;
  padding-left: 0;
  background: none !important;
}
</style>
