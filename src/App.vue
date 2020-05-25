<template>
  <div id="app">
    <Loader></Loader>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from "./components/Loader";
export default {
  components: {
    Loader
  },
  mounted() {
    this.$store.commit("setLoading", true);
    setTimeout(() => {
      this.$store.commit("setLoading", false);
    }, 500);
  }
};
</script>

<style>
@import url("/css/bulma.min.css");
@import url("/css/styles.css");
</style>