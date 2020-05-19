<template>
  <div id="app">
    <section id="particles" class="hero is-dark is-fullheight bg">
      <div class="hero-head">
        <header class="navbar is-transparent">
          <div class="container">
            <div class="navbar-brand">
              <a
                class="navbar-burger"
                @click.prevent="showNav = !showNav"
                :class="{'is-active':showNav}"
              >
                <span></span>
                <span></span>
                <span></span>
              </a>
            </div>
            <div class="navbar-menu" :class="{'is-active':showNav}">
              <div class="navbar-start">
                <router-link class="navbar-item" to="/" exact>Home</router-link>
                <router-link class="navbar-item" to="/about">About</router-link>
                <router-link class="navbar-item" to="/services">Services</router-link>
                <router-link class="navbar-item" to="/contact">Contact</router-link>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view />
        </div>
        <div class="tile is-3 is-vertical is-parent is-hidden-mobile">
          <div class="tile is-child box">
            <router-link class="right-item" to="/about">About</router-link>
          </div>
          <div class="tile is-child box">
            <router-link class="right-item" to="/services">Services</router-link>
          </div>
        </div>
      </div>
      <div class="hero-foot">
        <div class="container">
          <div class="columns is-mobile">
            <div class="column is-one-quarter">
              <p>
                <a class="is-link" href="https://facebook.com" target="_blank">
                  <font-awesome-icon :icon="['fab', 'facebook-f']" class="icon" />
                </a>
              </p>
              <p>
                <a class="is-link" href="#">
                  <font-awesome-icon :icon="['fab', 'instagram']" class="icon" />
                </a>
              </p>
              <p>
                <a class="is-link" href="#">
                  <i class="far fa-envelope"></i>
                  <font-awesome-icon :icon="['far', 'envelope']" class="icon" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import "particles.js";
const pConfig = require("./assets/particlesjs-config.json");

export default {
  data() {
    return {
      copyright: "Ground control to Major Tom",
      ano: new Date().getFullYear(),
      showNav: false
    };
  },
  mounted() {
    this.onLoad();
  },
  methods: {
    onLoad() {
      particlesJS("particles", pConfig);
      document.querySelector(".particles-js-canvas-el").style.position =
        "absolute";
      document.querySelector(".particles-js-canvas-el").style.zIndex = "-1";
      document.querySelector(".particles-js-canvas-el").style.height = "100vh";
    }
  }
};
</script>

<style>
@import url("/css/bulma.min.css");
@import url("/css/styles.css");
#particles {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.bg {
  background: url("./assets/dark_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  outline: none;
}
.box {
  border-radius: 0%;
  box-shadow: unset;
  background-color: transparent !important;
  border: 1px solid #565656;
}
.hero-foot {
  margin-bottom: 40px;
  font-size: 14px;
}
.icon {
  font-size: 16px;
}
.icon:hover {
  color: #ff0042 !important;
  font-size: 16px;
}
.is-link {
  color: #dadada;
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
</style>
