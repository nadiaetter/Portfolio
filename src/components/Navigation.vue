<template>

<div class="navigation">
  <button class="nav-button" @click="toggleShow">
    <img class="nav-burger"  src="../assets/img/menu-bar.png">
  </button>

<!-- START OVERLAY MENU -->
    <div v-if="isShowing" class="overlayMenu" >
      <button class="nav-button" @click="toggleShow">
        <img class="nav-close" src="../assets/img/cross.png">
      </button>
          <br>

          <div class="nav-open">

            <button @click="toggleShow" class="nav-button">
              <router-link to="/" class="nav-headline">WORK</router-link>
            </button>

              <br>

              <button @click="toggleShow" class="nav-button">
                <router-link to="/about" class="nav-headline">ABOUT</router-link>
              </button>

              <br>

              <button @click="toggleShow" class="nav-button">
                <router-link to="/Contact" class="nav-headline">CONTACT</router-link>
              </button>

              <div class="flex_socialmedia">

              <button class="nav-button">
                <a href="mailto:nadia.etter@gmail.com" class="link">
                  <img class="socialmedia" src="../assets/img/mail.png">
                </a>
              </button>

                <button class="nav-button">
                  <a href="https://vimeo.com/nadiaetter" class="link" target="_blank">
                    <img class="socialmedia" src="../assets/img/vimeo.png">
                  </a>
                </button>

                <button class="nav-button">
                  <a href="https://www.linkedin.com/in/nadia-etter-a50582156/" class="link" target="_blank">
                    <img class="socialmedia" src="../assets/img/linkedin.png">
                  </a>
                </button>

                <button class="nav-button">
                  <a href="https://github.com/nadiaetter" class="link" target="_blank">
                    <img class="socialmedia" src="../assets/img/github.png">
                  </a>
                </button>
        </div>
      </div>
    </div>
<!-- END OVERLAY MENU -->

</div>

</template>

<script>
  export default {
    name: 'Navigation',

    data() {
      return {
        isShowing: false
      }
    },

    methods: {
      toggleShow() {
        this.isShowing = !this.isShowing;
      }
    }
  }
</script>


<style></style>
