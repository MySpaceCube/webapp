<template>
    <div>
    <h1>SpaceCube - Server</h1>
    <h2>Our Server</h2>
    <section class="pined-card-section">
      <PinedCard
        title="SpaceCube Hardcore"
        description="Tu vas manger tes grands morts"
        cta-label="play.space-cube.xyz"
        cta-path="/servers/spacecube"
        :is-icon-hidden="false"
        is-show-server-infos
        card-img="https://wallpaperaccess.com/full/7782767.jpg"
      />
      <PinedCard
        title="PeepsLords"
        description="Serveur Moddes avec le modpack Medieval"
        cta-label="peepslords.space-cube.xyz"
        cta-path="/servers/peepslords"
        card-img="https://img2.goodfon.com/wallpaper/nbig/6/9c/minecraft-dom-sklad-trava.jpg"
        invert-infos
        :is-icon-hidden="false"
        is-show-server-infos
      />
    </section>
    <section>
      <h2>Other servers</h2>
      <ul>
        <li>bla bla</li>
      </ul>
    </section>
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
