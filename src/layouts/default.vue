<template>
  <div class="container">
    <AppHeader />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
import 'primeicons/primeicons.css'
</script>

<style lang="scss">
@import "../assets/global";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
body {
  font-family: poppins, sans-serif;
  background-color: $background;
}
h1, h2, h3, h4, h5, h6 {
  font-family: Inter, sans-serif;
}
.container {
  width: calc(90% - 2rem);
  position: absolute;
  left: 10%;
  padding-left: 1rem;
  padding-right: 1rem;
}
hr {
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, #EC008C 0%, #FC6767 100%);
  border: 0;
  border-radius: 6px;
}
</style>
