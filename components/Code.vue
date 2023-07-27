<script setup>
const props = defineProps(['code']);

const showCopyMessage = () => {
  // genere moi un copy to clipboard a partir du field avec l'id code-to-copy
  const copyText = document.getElementById('code-to-copy');
  navigator.clipboard.writeText(copyText.value);

  document.querySelector('.copied-message').classList.add('show');
  setTimeout(() => {
    document.querySelector('.copied-message').classList.remove('show');
  }, 1000);
};
</script>

<template>
  <code>
    <Button class="small-btn" @click="showCopyMessage">
      <p class="copied-message">{{ $t('global.copied') }}</p>
      <i class="pi pi-copy"></i>
    </Button>
    <input id="code-to-copy" type="hidden" v-model="props.code" disabled>
    {{ props.code }}
  </code>
</template>

<style lang="scss">
@import '../assets/scss/settings/_color.scss';
code {
  display: block;
  text-wrap: nowrap;
  background-color: $blue-dark;
  color: $text-white;
  overflow-x: auto;
  border: 3px solid $pink-1;
  border-radius: 1rem;
  padding: 1rem;
  /* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: $blue transparent;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: $blue;
    border-radius: 10px;
    border: 0px solid transparent;
  }
  button {
    opacity: 0;
    transition: 0.3s;
  }
  &:hover {
    button {
      opacity: 1;
      transition: 0.3s;
    }
  }
  .small-btn {
    cursor: pointer;
    height: 35px;
    color: white;
    position: absolute;
    right: calc(10% + 2px);
    transform: translateY(-30%);
    padding: 20px;

    p.copied-message {
      position: absolute;
      background-color: $pink-2;
      color: $text-white;
      font-weight: bold;
      padding: 5px;
      border-radius: 1px;
      transform: translateY(-180%) translateX(-10%);
      opacity: 0;
      transition: 0.3s;

      &:after {
        opacity: 0;
        content: '';
        position: absolute;
        top: 94%;
        left: 25%;
        margin-left: -7px;
        border-width: 7px;
        border-style: solid;
        border-color: $pink-2 transparent transparent transparent;
        transition: 0.3s;
      }
      &.show {
        opacity: 1;
        transition: 0.3s;
        &:after {
          opacity: 1;
        }
      }
    }
  }
}
</style>
