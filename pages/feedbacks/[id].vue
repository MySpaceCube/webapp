<template>
  <h1>{{ $route.params.id }} - {{ $t('global.feedback') }}</h1>
</template>

<script>
export default {
  name: 'UserProfilePage',
  head () {
    console.log(this.$route);
    return {
      title: 'Space-Cube | Profile de '
    };
  },
  data () {
  }
};
</script>

<style scoped>

</style>
