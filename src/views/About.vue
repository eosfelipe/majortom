<template>
  <div id="about">
    <div id="progressbar"></div>
    <div id="scrollPath"></div>
    <section class="hero is-black is-bold">
      <div class="hero-head">
        <Navigation :routesNav="nav.map(i => i)" />
      </div>
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-6">
              <h2 class="destaque-text">Innovative experiences for forward-thinking brands.</h2>
            </div>
            <div class="column is-6">
              <p
                class="special-text"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nemo pariatur blanditiis eos molestias dolorum enim ipsa suscipit quia laudantium expedita, nulla, vitae odit consectetur quidem reprehenderit accusamus eaque iure.</p>
              <a
                href="mailto:email@majortom.space"
                id="hero-btn"
                class="button is-dark is-inverted"
              >Start a Project ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="whatwedo">
      <div class="tile is-ancestor">
        <div class="tile is-4 is-vertical is-parent">
          <div class="tile is-child box">
            <p class="title">One</p>
          </div>
          <div class="tile is-child box">
            <p class="title">Two</p>
          </div>
        </div>
        <div class="tile is-parent">
          <div class="tile is-child box">
            <p class="title">Three</p>
          </div>
        </div>
      </div>
    </section>
    <section id="customers"></section>
    <section id="team">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nisi possimus a molestias omnis accusamus quo dolores natus amet, modi in et unde autem nemo sit perferendis, minima esse rerum?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum quam illum, id provident modi tenetur exercitationem assumenda magni reiciendis. Voluptatem architecto exercitationem eius mollitia iusto aliquid qui voluptas velit magnam!</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium recusandae modi quia obcaecati molestiae esse? Soluta ab error dignissimos eum. Minima fuga doloremque numquam vero debitis similique quos voluptas voluptatem.</p>
    </section>
    <section id="contact"></section>
    <section id="newsletter"></section>
  </div>
</template>

<script>
import Navigation from "../components/Navigation";
export default {
  components: {
    Navigation
  },
  data() {
    return {
      nav: [
        {
          name: "About",
          to: "/about",
          current: 1
        },
        {
          name: "Home",
          to: "/",
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
    document.querySelector("*").style.overflow = "visible";
    let progress = document.getElementById("progressbar");
    // console.log(progress.style);
    let totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function() {
      let progressHeight = (window.pageYOffset / totalHeight) * 100;
      progress.style.height = progressHeight + "%";
    };
  },
  methods: {}
};
</script>

<style>
.box {
  border-radius: 0%;
  border: 1px solid #565656 !important;
}
.destaque-text {
  text-decoration: underline;
  line-height: 5rem;
  font-style: normal;
  font-weight: 300;
  font-size: 54px;
}
section {
  padding: 50px;
  background: whitesmoke;
}
section h2 {
  font-size: 2.5rem;
  color: whitesmoke;
}
section p {
  font-size: 1.2rem;
  color: whitesmoke;
}
.special-text {
  padding: 50px;
}
::-webkit-scrollbar {
  width: 0;
}
#hero-btn {
  margin-left: 50px;
}
#scrollPath {
  position: fixed;
  top: 0;
  right: 0;
  width: 5px;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
}
#progressbar {
  position: fixed;
  top: 0;
  right: 0;
  width: 5px;
  background: linear-gradient(to top, #008aff, #00ffe7);
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0%,
  100% {
    filter: hue-rotate(0deg);
  }
  50% {
    filter: hue-rotate(360deg);
  }
}
#progressbar:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #008aff, #00ffe7);
  filter: blur(10px);
}
#progressbar:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, #008aff, #00ffe7);
  filter: blur(30px);
}
.button.is-dark.is-inverted:hover {
  background-color: #ff0042;
  color: whitesmoke;
  transition: all 0.5s ease;
}
</style>
