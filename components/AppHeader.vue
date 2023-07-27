<template>
  <header>
    <section id="header-search-bar">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" v-model="search" :placeholder="`${ $t('global.nav.search') }`" class="search"/>
      </span>
    </section>
    <section id="header-action-bar">
      <section id="header-action-bar--logged" v-if="store.isLogged && store.user">
        <span class="p-input-icon-left">
          <span class="input">
            <NuxtImg src="/img/emerald.png" alt="icon of spacecube points" loading="lazy" height="27" width="27" />
            <span v-if="store.user">{{ getPoints(store.user.points) }}</span>
            <div id="user-points"></div>
          </span>
        </span>
        <span class="p-input-icon-left">
          <Button type="button" icon="pi pi-bell" class="input p-button-text" />
        </span>
        <span v-if="store.user.isVerify" class="p-input">
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
          <NuxtLink :to="api.apiUrl + '/acp_login'" target="_blank">
            <Button type="button" class="input p-button-text" :label="`${ $t('global.nav.admin') }`" :placeholder="`${ $t('global.nav.admin') }`" />
          </NuxtLink>
        </span>
        <div class="vertical-separator" />
        <section class="me-info d-flex row align-items-center">
          <section class="d-flex flex-column ml-1">
            <Button
            type="button"
            class=""
            aria-haspopup="true"
            aria-controls="overlay_me"
            @click="toggleUser"
            >
              <Avatar
                :image="`${store.user.avatar}`"
                size="large"
                shape="circle"
                class="mr-1"
              />
              <div class="p-button-text d-flex flex-column justify-content-start align-items-start">
                <span class="header-me-info-pseudo">
                  {{store.user.username}}
                  <NuxtImg
                    v-if="store.user"
                    :src="`/img/` + getVerifyBadges(store.user)"
                    alt="icon"
                    loading="lazy"
                    height="14"
                    width="14"
                    style="margin-left: 5px;"
                  />
                </span>
                  <span class="text-muted">
                    {{ $t('global.roles.' + showRole()) }}
                  </span>
              </div>
              <i class="pi pi-angle-down ml-1" />
            </Button>
            <TieredMenu ref="menuUser" id="overlay_me" :model="itemsUser" :popup="true" />
          </section>
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
import { getCurrentRole, getPoints, getVerifyBadges, isGrantedAccess } from '~/utils/utils';
import { ref } from 'vue';
import { authStore } from '~/store/auth';
import { apiStore } from '~/store/api';
const store = authStore();
const api = apiStore();
const { t } = useI18n();
const menu = ref();
const menuUser = ref();
const { $bus } = useNuxtApp();

const toggle = (event) => {
  menu.value.toggle(event);
};

$bus.$on('updatePoints', (data) => {
  updatePoints(data.nbPoints, data.isNegative);
});

const updatePoints = (nbPoints, isNegative = false) => {
  const el = document.getElementById('user-points');
  el.innerHTML = (isNegative ? '-' : '+') + nbPoints + ' points';
  el.classList.add('animate_points__animated');
  setTimeout(() => {
    if (isNegative) {
      store.user.points = (store.user.points - nbPoints);
    } else {
      store.user.points = (store.user.points + nbPoints);
    }
    el.classList.remove('animate_points__animated');
  }, 1500);
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
    disabled: false,
    to: '/feedbacks/create'
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

if (store.user && store.user.roles && isGrantedAccess(store.user.roles, 'ROLE_EDITOR')) {
  itemsCreate.value.unshift({
    label: t('global.nav.create.news'),
    icon: 'pi pi-megaphone',
    target: '_blank',
    url: api.apiUrl + '/acp?crudAction=new&crudControllerFqcn=App%5CController%5CAdmin%5CNewsCrudController&referrer=?crudAction%3Dindex%26crudControllerFqcn%3DApp%255CController%255CAdmin%255CNewsCrudController'
  });
}

const showRole = () => {
  return getCurrentRole(store.user.roles[0]);
};
</script>

<style lang="scss">
#user-points {
  display: block;
  font-size: 1rem;
  font-weight: 900;
  color: transparent;
  background: linear-gradient(90deg, #ACCBE5 0%, #86FDE8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: absolute;
  opacity: 0;
  margin-left: 2rem;
  transform: translateY(100%);
  &.animate_points__animated {
    animation: animate-points 3s cubic-bezier(0, 0.50, 0.58, 1);
  }
}

@keyframes animate-points {
  0% {
    opacity: 1;
    transform: translateY(100%);
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }

}

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
