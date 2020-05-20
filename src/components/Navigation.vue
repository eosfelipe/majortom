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
        <!-- Only mobile -->
        <div class="navbar-start is-hidden-desktop" v-if="routesNav[0].current == 1">
          <router-link class="navbar-item" :to="routesNav[1].to" exact>{{routesNav[1].name}}</router-link>
          <router-link class="navbar-item" :to="routesNav[2].to">{{routesNav[2].name}}</router-link>
        </div>
        <!-- Only mobile -->
        <div class="navbar-end">
          <div class="tabs is-right" v-if="routesNav[0].name == 'Home'">
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
      <div class="tabs is-right is-hidden-mobile" v-if="routesNav[0].name != 'Home'">
        <router-link class="navbar-item" :to="routesNav[1].to">{{routesNav[1].name}}</router-link>
        <router-link class="navbar-item" :to="routesNav[2].to">{{routesNav[2].name}}</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: ["routesNav"],
  data() {
    return {
      showNav: false
    };
  }
};
</script>

<style>
</style>