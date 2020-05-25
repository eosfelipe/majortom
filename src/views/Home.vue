<template>
  <div id="home">
    <section id="particles" class="hero is-fullheight is-dark bg">
      <div class="hero-head">
        <Navigation :routesNav="nav.map(i => i)" />
      </div>
      <div class="hero-body">
        <div class="container">
          <h1>
            <vue-typed-js
              :strings="['Major Tom', 'Inteligencia Digital', 'Forget safety, be notorious']"
              :loop="true"
              :typeSpeed="100"
              :backDelay="5000"
              :cursorChar="'_'"
            >
              <strong class="typing"></strong>
            </vue-typed-js>
          </h1>
        </div>
        <div class="tile is-3 is-vertical is-parent is-hidden-mobile">
          <transition name="slide-fade1" appear>
            <div class="tile is-child box box-custom">
              <router-link class="right-item" to="/about">About</router-link>
            </div>
          </transition>
          <transition name="slide-fade2" appear>
            <div class="tile is-child box box-custom">
              <router-link class="right-item" to="/services">Services</router-link>
            </div>
          </transition>
        </div>
      </div>
      <div class="hero-foot">
        <div class="tabs is-centered">
          <ul>
            <li>
              <a class="is-link" href="https://github.com/eosfelipe" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" class="icon" />
              </a>
            </li>
            <li>
              <a class="is-link" href="https://facebook.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'facebook']" class="icon" />
              </a>
            </li>
            <li>
              <a class="is-link" href="https://instagram.com" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
              </a>
            </li>
            <li>
              <a class="is-link" href="mailto:email@majortom.space">
                <i class="far fa-envelope"></i>
                <font-awesome-icon :icon="['far', 'envelope']" class="icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "particles.js";
import Navigation from "../components/Navigation";
const pConfig = require("../assets/particlesjs-config.json");
export default {
  components: {
    Navigation
  },
  data() {
    return {
      showLoader: false,
      nav: [
        {
          name: "Home",
          to: "/",
          current: 1
        },
        {
          name: "About",
          to: "/about",
          current: 0
        },
        {
          name: "Works",
          to: "/works",
          current: 0
        }
      ]
    };
  },
  mounted() {
    this.onLoad();
    document.querySelector('*').style.overflow = 'hidden';
  },
  methods: {
    onLoad() {
      particlesJS("particles", pConfig);
    }
  }
};
</script>

<style>
strong {
  color: whitesmoke !important;
}
.container h1 {
  display: block;
  color: whitesmoke !important;
  font-size: 60px;
  font-weight: 600;
  letter-spacing: normal;
  text-transform: capitalize;
  animation-duration: 1s;
  animation-delay: 1s;
  display: block;
  text-transform: uppercase;
}
#particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
#particles canvas {
  position: absolute;
  z-index: -1;
  /* background-image: linear-gradient(141deg, #090808 0%, #222 71%, #312d2c 100%); */
}
.particles-js-canvas-el {
  height: 100% !important;
}
.bg {
  background: url("../assets/dark_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  outline: none;
  height: 100vh;
}
.box-custom {
  border-radius: 0% !important;
  box-shadow: unset !important;
  background-color: transparent !important;
  border: 1px solid #565656 !important;
}
.icon {
  font-size: 16px;
}
.icon:hover {
  color: #ff0042 !important;
  font-size: 16px;
}
.right-item {
  color: #dadada !important;
}
.right-item:hover {
  color: #ff0042 !important;
}
.right-item.is-active {
  color: #ff0042 !important;
}
.slide-fade1-enter-active {
  transition: all 2s ease;
}
.slide-fade2-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade1-enter, .slide-fade1-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}
.slide-fade2-enter, .slide-fade2-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(300px);
  opacity: 0;
}
</style>