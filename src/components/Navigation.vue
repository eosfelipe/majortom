<template>
  <nav class="navbar is-transparent">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">Intelligence Branding Agency</a>
        <a
          class="navbar-burger burger"
          data-target="navbarMenu"
          @click.prevent="showNav = !showNav"
        >
          <span style="color: whitesmoke;"></span>
          <span style="color: whitesmoke;"></span>
          <span style="color: whitesmoke;"></span>
        </a>
      </div>
      <div class="navbar-menu" id="navbarMenu" :class="{'is-active':showNav}">
        <div class="navbar-start is-hidden-desktop">
          <router-link class="navbar-item" to="/" exact>Home</router-link>
          <router-link class="navbar-item" to="/about">About</router-link>
          <router-link class="navbar-item" to="/services">Services</router-link>
        </div>
        <div class="navbar-end">
          <div class="tabs is-right">
            <a href="https://bulma.io" class="navbar-item">
              <img
                src="https://bulma.io/images/made-with-bulma--white.png"
                alt="Made with Bulma"
                width="128"
                height="24"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style>
</style>