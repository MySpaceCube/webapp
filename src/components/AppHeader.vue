<template>
  <header>
    <nav>
      <nuxt-img src="logo.png" loading="lazy" />
      <ul>
        <div class="start">
          <li>
            <NuxtLink to="/">
              <i class="pi pi-home"></i>
              <span>Home</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="news">
              <i class="pi pi-megaphone"></i>
              <span>News</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="feedbacks">
              <i class="pi pi-directions-alt"></i>
              <span>Feedbacks</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="resources">
              <i class="pi pi-box"></i>
              <span>Resources</span>
            </NuxtLink>
          </li>
          <hr>
          <li>
            <NuxtLink to="server">
              <i class="pi pi-server"></i>
              <span>Server</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="about">
              <i class="pi pi-exclamation-circle"></i>
              <span>About</span>
            </NuxtLink>
          </li>
        </div>
        <div class="end">
          <li>
            <NuxtLink to="login">
              <i class="pi pi-sign-in"></i>
              <span>Login</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="register">
              <i class="pi pi-user-plus"></i>
              <span>Register</span>
            </NuxtLink>
          </li>
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  layout: "default"
}
</script>

<style lang="scss">
@import '../assets/global.scss';
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

header nav {
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
    top: 4rem;
    bottom: 1rem;
    padding: 0;
    width: 72px;
    div.start {
      z-index: 2000;
      justify-content: start;
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
      text-decoration: none;
      &.router-link-active,
      &.router-link-exact-active {
        &::after {
          content: "";
          position: absolute;
          display: block;
          background: $pink-gradient;
          width: 4px;
          height: 57px;
          right: 0;
          border-radius: 20px;
        }
        background-color: $blue-dark;
        height: 47.5px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
        span {
          display: block;
          text-transform: uppercase;
        }
      }
      span {
        flex-direction: column;
        padding-top: 5px;
        display: none;
      }
    }
  }
}
</style>
