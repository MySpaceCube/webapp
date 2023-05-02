<template>
  <div>
    <h1>SpaceCube - Our server</h1>
    <section class="pined-card-section">
      <PinedCard
        title="SpaceCube"
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
      <TopContributors></TopContributors>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  layout: 'default',
  head () {
    return {
      title: 'Space-Cube | Texture Packs, Datapack, Guide & Serveur minecraft'
    };
  }
};
</script>
<style lang="scss">
.pined-card-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
