<template>
<div id="app">
  <body>
    <img class="polygon-top" src="../assets/img/yellow_polygon.png">
  <h1 class="headline">work</h1>
  <p class="second-headline">VIDEO  WEBDESIGN WEBENTWICKLUNG <br> VR INFOGRAFIK</p>

<div class="all-boxes">

<!-- FIRST BOX -->
  <div class="boxes-left">
    <p class="teaser-headline" @click="GoToBachelor">BACHELORARBEIT SURFCAMP-FINDER</p>
    <img class="teaser-image" src="../assets/img/bachelor.jpg" @click="GoToBachelor">
    <button class="teaser-button" @click="GoToBachelor">
      <p class="teaser-buttons-text">Mehr zum Projekt</p>
    </button>
  </div>

<!-- SECOND BOX -->
<div class="boxes-right">
  <p class="teaser-headline" @click="GoToYona">YONA VIRTUAL REALITY GAME</p>
  <img class="teaser-image" @click="GoToYona" src="../assets/img/yona.jpg">
  <button class="teaser-button" @click="GoToYona">
    <p class="teaser-buttons-text">Mehr zum Projekt</p>
  </button>
</div>

<!-- THIRD BOX -->
<div class="boxes-left">
  <p class="teaser-headline" @click="GoToSport">SPORTVERLETZUNGEN</p>
  <img class="teaser-image" src="../assets/img/sportverletzungen.jpg" @click="GoToSport">
  <button class="teaser-button" @click="GoToSport">
    <p class="teaser-buttons-text">Mehr zum Projekt</p>
  </button>
</div>

<!-- FOURTH BOX -->
<div class="boxes-right">
  <p class="teaser-headline" @click="GoToBeer">BRAUEREIEN IN DER SCHWEIZ</p>
  <img class="teaser-image" src="../assets/img/beer.jpg" @click="GoToBeer">
  <button class="teaser-button" @click="GoToBeer">
    <p class="teaser-buttons-text">Mehr zum Projekt</p>
  </button>
</div>

<!-- FIFTH BOX -->
<div class="boxes-left">
  <p class="teaser-headline" @click="GoToCrutch">CRUTCH</p>
  <img class="teaser-image" src="../assets/img/crutch.jpg" @click="GoToCrutch">
  <button class="teaser-button" @click="GoToCrutch">
    <p class="teaser-buttons-text">Mehr zum Projekt</p>
  </button>
</div>

<!-- SIXTH BOX -->
<div class="boxes-right">
  <p class="teaser-headline" @click="GoToVef">VIVRE EN FLEURS</p>
  <img class="teaser-image" src="../assets/img/vivreenfleurs.jpg" @click="GoToVef">
  <button class="teaser-button" @click="GoToVef">
    <p class="teaser-buttons-text">Mehr zum Projekt</p>
  </button>
</div>
</div>

<!-- END ALL BOXES -->
</body>
</div>
</template>

<script>
  export default {



    methods: {
      GoToYona() {
        this.$router.push({
          name: 'Yona'
        })
      },
      GoToBachelor() {
        this.$router.push({
          name: 'Bachelor'
        })
      },
      GoToCrutch() {
        this.$router.push({
          name: 'Crutch'
        })
      },
      GoToBeer() {
        this.$router.push({
          name: 'Beer'
        })
      },
      GoToSport() {
        this.$router.push({
          name: 'Sport'
        })
      },
      GoToVef() {
        this.$router.push({
          name: 'Vef'
        })
      }
    }
  }
</script>

<style></style>
