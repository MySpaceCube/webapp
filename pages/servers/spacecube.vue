<template>
  <main>
    <div class="d-flex row justify-content-between">
      <h1>👑 Serveur officiel de SpaceCube</h1>
      <div class="d-flex row">
        <a class="h1" href="https://livemap.minestrator.com/s/e5e67c9d-783a-4e76-9170-6aae50c21541/#/80/64/-80/-8/world%20-%20overworld/world" target="_blank">
          <span class="h1 white">Map</span>
        </a>
      </div>
    </div>
    <hr>
    <section>
      <h2>Ip du serveur :</h2>
      <code id="ipServer">
        play.space-cube.xyz
      </code>
      <h2>Version du jeu :</h2>
      <code id="versionGame">
        1.19.3
      </code>
      <h2>Lore :</h2>
      <code id="lore">
        ...
      </code>
    </section>
    <hr>
  </main>
</template>

<script>
export default {
  name: 'SpaceCube',
  layout: 'default',
  head () {
    return {
      title: 'Space-Cube - 👑 Serveur officiel de SpaceCube'
    };
  }
};
</script>
