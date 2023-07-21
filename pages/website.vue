<template>
  <div>
    <h1>WebSite tools</h1>
    <ul>
      <li>
        <nuxt-link to="https://www.chunkbase.com/apps/">Chunk Base</nuxt-link>
        <p>This set of apps allows you to easily view different map features and find points of interest in your minecraft world with just your map seed. Version support varies.</p>
      </li>
      <li>
        <nuxt-link to="https://minecraft.novaskin.me/">Nova Skin</nuxt-link>
        <p>Generateur de skin, gallerie de skin</p>
      </li>
      <li>
        <nuxt-link to="https://www.digminecraft.com/generators/index.php">Command Generators in Minecraft
        </nuxt-link>
        <p>Generateur de commande, librairie de commande et autres</p>
      </li>
      <li>
        <nuxt-link to="https://www.digminecraft.com/generators/index.php">Minecraft tools
        </nuxt-link>
        <p>Tout type de generation pour minecraft</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ServerPage',
  layout: 'default',
  head () {
    return {
      title: 'Space-Cube | Serveur minecraft'
    };
  }
};
</script>

<style scoped>

</style>
