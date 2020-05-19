<template>
  <div class="home">
    <h1>
      <vue-typed-js
        :strings="['Major Tom', 'Inteligencia Digital']"
        :loop="true"
        :typeSpeed="100"
        :backDelay="5000"
        :cursorChar="'_'">
        <strong class="typing"></strong>
      </vue-typed-js>
    </h1>
  </div>
</template>

<script>

export default {
  name: "Home"
};
</script>

<style scoped>
strong {
  color: whitesmoke !important;
}
.home h1 {
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
</style>