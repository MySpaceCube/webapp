<template>
  <main>
     <div class="d-flex row justify-content-between">
        <h1>👑 Serveur des PeepsLords</h1>
        <div class="d-flex row">
            <a class="h1" href="https://livemap.minestrator.com/s/e3a02394-181e-4c33-9079-8d0ee940a4c1/#overworld:0:0:0:1500:0:0:0:0:perspective" target="_blank">
                <span class="h1 white">Map</span>
            </a>&nbsp;
            <a class="h1" href="https://www.curseforge.com/minecraft/modpacks/medieval-mc-fabric" target="_blank">
                <span class="h1 white">Modpack</span>
            </a>
        </div>
     </div>
      <hr>
     <section>
        <h2>Ip du serveur :</h2>
        <code id="ipServer">
            46.105.38.71:25575
        </code>
        <h2>Version du jeu :</h2>
        <code id="versionGame">
            1.19.2
        </code>
        <h2>Version du modpack :</h2>
        <code id="ipServer">
            v14.5
        </code>
     </section>
      <hr>
     <section>
        <h4>Comment installer le modpack ?</h4>
            <ol class="ml-5">
                <li>Télécharger CurseForge</li>
                <li>Sur CurseForge, choisissez le jeu Minecraft</li>
                <li>Dans la barre de recherche en haut, recherchez le modpack <a class="white" href="https://www.curseforge.com/minecraft/modpacks/medieval-mc-fabric" title="Accéder au modpack via CurseForge">Medieval</a> (version 14.5)</li>
                <li>Le modpack est chargé, penser à importer vos ressources pack et vos shaders</li>
                <li>Cliquer sur Play et attention à remettre vos paramétrages (contrôles, render distance, etc...)</li>
            </ol>
     </section>
  </main>
  </template>

<script>
export default {
  name: 'PeepsLords',
  layout: 'default',
  head () {
    return {
      title: 'Space-Cube - 👑 Serveur des PeepsLords'
    };
  }
};
</script>
