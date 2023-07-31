<template>
  <div class="container">
    <AppHeader/>
    <AppSidebar/>
    <slot/>
    <AppFooter/>
  </div>
</template>

<script>
import 'primeicons/primeicons.css';
</script>

<style lang="scss">
@import "../assets/scss/global";
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

body {
  color: white;
  font-family: poppins, sans-serif;
  background-color: $background;
}

h1, h2, h3, h4, h5, h6 {
  font-family: Inter, sans-serif;
}

p {
  line-height: 1.5rem;
}

a {
  color: #000;
  text-decoration: none;
  background-image: $pink-gradient;
  background-repeat: no-repeat;
  background-size: 100% 0.2em;
  background-position: 0 100%;
  transition: background-size 0.25s ease-in;
}

.container {
  width: calc(100% - 1rem);
  position: absolute;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  @media (min-width: 1200px) {
    width: calc(90% - 2rem);
    left: 10%;
  }
}

hr {
  width: 80%;
  height: 4px;
  background: linear-gradient(90deg, #EC008C 0%, #FC6767 100%);
  border: 0;
  border-radius: 6px;
}
</style>
