<template>
  <h1>Profile page of {{ $route.params.id }}</h1>
</template>

<script>
export default {
  name: 'user-profile',
  head () {
    console.log(this.$route)
    return {
      title: "Space-Cube | Profile de " ,
    }
  },
  data () {
    user: this.$route.params.id
  }
}
</script>

<style scoped>

</style>
