<template>
  <header>
    <section id="header-search-bar">
      <span class="p-input-icon-left">
        <i class="pi pi-search" />
        <InputText type="text" v-model="search" placeholder="Search by creator or resource" class="search"/>
      </span>
    </section>
    <section id="header-action-bar">
      <section id="header-action-bar--logged" >
        <span class="p-input-icon-left">
          <span class="input">
            <nuxt-img src="gold-pts.svg" alt="icon of spacecube points" loading="lazy" height="27" width="27" />
            <span>{{ getPoints() }} pts</span>
          </span>
        </span>
        <span class="p-input-icon-left">
          <Button icon="pi pi-bell" class="input p-button-text" />
        </span>
        <span class="p-input">
          <Button class="input p-button-text" label="Create" placeholder="Create" />
        </span>
        <span class="p-input-administration">
          <Button class="input p-button-text" label="Administation" placeholder="Administation" />
        </span>
        <div class="vertical-separator" />
        <section class="me-info d-flex row align-items-center">
          <Avatar
          image="https://images.nightcafe.studio/jobs/N34Ggz3WD4EiFTPDWzeZ/N34Ggz3WD4EiFTPDWzeZ--7--w9snj.jpg?tr=w-1600,c-at_max"
          size="large"
          shape="circle"
          />
          <section class="d-flex flex-column ml-1">
            <Button
            type="button"
            class="p-button-text d-flex flex-column justify-content-start align-items-start"
            @click="toggle"
            >
              <span class="header-me-info-pseudo">username</span>
              <span class="text-muted">fake.email@email.com</span>
            </Button>
          </section>
          <i class="pi pi-angle-down" />
        </section>
      </section>
    </section>
  </header>
</template>
<script>
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Avatar from 'primevue/avatar';

export default {
  name: 'AppHeader',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { InputText, Button, Avatar },
  layout: 'default',
  methods: {
    getPoints () {
      let points = Math.round(Math.random() * 20000);
      if (points.toString().length >= 4) {
        points /= 1000;
        points = Math.round(points, 1) + ' k';
      }
      return points;
    }
  }
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
