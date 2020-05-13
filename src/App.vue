<template>
  <div id="app">
    <section id="particles" class="hero is-dark is-fullheight bg">
      <div class="hero-head">
        <header class="navbar is-transparent">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item">
                <i class="fas fa-rocket"></i>
              </a>
              <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarMenuHeroC"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>
            <div id="navbarMenuHeroC" class="navbar-menu">
              <div class="navbar-start">
                <router-link class="navbar-item" to="/" exact>Home</router-link>
                <router-link class="navbar-item" to="/about">About</router-link>
                <router-link class="navbar-item" to="/services">Services</router-link>
                <router-link class="navbar-item" to="/contact">Contact</router-link>
                <span class="navbar-item">
                  <a class="is-dark is-inverted">
                    <span class="icon">
                      <i class="fab fa-github"></i>
                    </span>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </header>
      </div>
      <div class="hero-body">
        <div class="container has-text-centered">
          <router-view />
        </div>
      </div>
      <div class="hero-foot">
      <nav class="tabs is-boxed is-fullwidth">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <span class="has-text-white-bis">{{ copyright }} & copy 2016 - {{ ano }}</span>
            </div>
            <div class="column">

            </div>
          </div>
        </div>
      </nav>
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
      copyright: 'Ground control to Major Tom',
      ano: new Date().getFullYear()
    }
  },
  mounted() {
    this.onLoad();
    this.burger();
  },
  methods: {
    burger() {
      const $navbarBurgers = Array.prototype.slice.call(
        document.querySelectorAll(".navbar-burger"),
        0
      );
      if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
          el.addEventListener("click", () => {
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            el.classList.toggle("is-active");
            $target.classList.toggle("is-active");
          });
        });
      }
    },
    onLoad() {
      particlesJS("particles", pConfig);
      document.querySelector(".particles-js-canvas-el").style.position =
        "absolute";
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
}
.bg {
  background: url("./assets/dark_bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  outline: none;
}
.hero-foot {
  margin-bottom: 40px;
}
</style>
