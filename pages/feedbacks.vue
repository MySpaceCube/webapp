<template>
  <div>
    <h1>Feedbacks</h1>
    <section>
      <h2>Feedback - Pin</h2>
      <section class="pined-card-section">
        <PinedCard
          title="SpaceCube Hardcore"
          description="Tu vas manger tes grands morts"
          cta-label="play.space-cube.xyz"
          cta-path="/servers/spacecube"
          :is-icon-hidden="false"
          is-show-server-infos
          card-img="https://www.minecraft.net/content/dam/games/badger/key-art/MC_Badger-Gather-Your-Strength_1200x540.png.transform/minecraft-image-large/image.png"
        />
        <PinedCard
          title="PeepsLords"
          description="Serveur Moddes avec le modpack Medieval"
          cta-label="peepslords.space-cube.xyz"
          cta-path="/servers/peepslords"
          card-img="https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Dungeons_Image-0_XGP-Dungeons_1200x432.jpg.transform/minecraft-image-large/image.jpg"
          invert-infos
          :is-icon-hidden="false"
          is-show-server-infos
        />
      </section>
    </section>
    <section>
      <h2>Other Feedback</h2>
      <ul>
        <li>
          blabla
        </li>
      </ul>
    </section>

  </div>
</template>

<script>
export default {
  name: 'FeedbacksPage',
  layout: 'default',
  head () {
    return {
      title: 'Space-Cube | Feedbacks'
    };
  }
};
</script>

<style scoped>

</style>
