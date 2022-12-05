<template>
    <div class="maintenance">
      <h1>Maintenance</h1>
      <h2>Space-cube.xyz</h2>
      <br />
      <p>
        Nous travaillons sur une toute nouvelle version du site, merci de votre
        compréhension (:
      </p>
      <br />
      <p>
        Vous pouvez toujours nous rejoindre et discuter avec nous sur notre
        <a href="https://invite.gg/spacecancer" target="_blank">discord</a>.
      </p>
      <br />
      <p>&copy; 2022 - Tous droits réservés</p>
    </div>
  </template>
<script>
export default {
  name: 'MaintenancePage',
  head () {
    return {
      title: 'Space-Cube - Serveur minecraft - Site en Maintenance'
    }
  }
}
</script>
  <style>
  html,
  body {
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  #__nuxt .maintenance {
    padding: 1rem;
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    height: 100%;
    display: flex;
    background-color: #13110c;
    color: white;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  a {
    color: #f8d270;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #d6b256;
    font-weight: bold;
    text-decoration: underline;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  }
  </style>
