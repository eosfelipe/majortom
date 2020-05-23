<template>
  <div id="app">
    <Loader/>
    <router-view></router-view>
  </div>
</template>

<script>
import Loader from './components/Loader'
export default {
  components: Loader
};
</script>

<style>
@import url("/css/bulma.min.css");
@import url("/css/styles.css");
</style>