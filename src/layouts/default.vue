<template>
  <div class="container">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import 'primeicons/primeicons.css';
</script>

<style lang="scss">
@import "../assets/global";
body {
  background-color: $background;
}
.container {
  width: 90%;
  position: absolute;
  left: 10%;
}
</style>
