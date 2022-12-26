<template>
  <h1>Profile page of {{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: 'UserProfilePage',
  head () {
    console.log(this.$route)
    return {
      title: 'Space-Cube | Profile de '
    }
  },
  data () {
  }
}
</script>

<style scoped>

</style>
