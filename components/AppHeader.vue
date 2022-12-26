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
            {{ getPoints() }} pts
          </span>
        </span>
        <span class="p-input-icon-left">
          <Button icon="pi pi-bell" class="input p-button-text" />
        </span>
      </section>
    </section>
  </header>
</template>
<script>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

export default {
  name: 'AppHeader',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { InputText, Button },
  layout: 'default',
  methods: {
    getPoints () {
      return Math.round(Math.random() * 20000)
    }
  }
}
</script>
<style lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
