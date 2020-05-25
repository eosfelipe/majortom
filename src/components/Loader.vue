<template>
  <div id="preloader" v-show="show">
    <div class="preloader-circle"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

let _loadingInterval = 0;

export default {
  name: "Loader",
  data() {
    return {
      show: false,
      text: ""
    };
  },
  computed: {
    ...mapGetters(["getLoading"])
  },
  methods: {
    showProgress(show) {
      this.show = show;
    },
    start() {
      this.showProgress(true);
      _loadingInterval = setInterval(() => {
        this.text = "Loading";
      }, 1000);
    },
    stop() {
      clearInterval(_loadingInterval);
      this.text = "100%";
      setTimeout(() => {
        this.showProgress(false);
      }, 1000);
    }
  },
  watch: {
    getLoading(newValue, oldValue) {
      console.log(newValue);
      if (newValue) {
        console.log("start");
        this.start();
      } else {
        console.log("stop");
        this.stop();
      }
    }
  }
};
</script>

<style>
#preloader {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  background-image: linear-gradient(141deg, #000 0, #0a0a0a 71%, #181616 100%);
}
.preloader-circle {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px;
  height: 36px;
  margin: -18px 0 0 -18px;
  border-radius: 50%;
  border: 2px solid;
  border-top-color: rgb(255, 29, 94);
  border-bottom-color: rgba(255, 29, 94, 0.15);
  border-left-color: rgba(255, 29, 94, 0.65);
  border-right-color: rgba(255, 29, 94, 0.15);
  -webkit-animation: atom-preloader-circle 0.8s linear infinite;
  animation: atom-preloader-circle 0.8s linear infinite;
}
@keyframes atom-preloader-circle {
  from {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-webkit-keyframes atom-preloader-circle {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>