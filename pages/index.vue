<template>
  <div>
    <h1>Space cube - Our server</h1>
    <section class="pined-card-section">
      <PinedCard
        title="SpaceCube Hardcore"
        description="Tu vas manger tes grands morts"
        cta-label="play.space-cube.xyz"
        cta-path="play.space-cube.xyz"
      />
      <PinedCard
        title="PeepsLords"
        description="Serveur Moddes avec le modpack Medieval"
        cta-label="peepslords.space-cube.xyz"
        cta-path="peepslords.space-cube.xyz"
        invert-infos
      />
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
