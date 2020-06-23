<template>
  <div id="about">
    <div id="progressbar"></div>
    <div id="scrollPath"></div>
    <section class="hero is-fullheight is-black is-bold">
      <div class="hero-head">
        <transition name="initPage" appear>
          <Navigation :routesNav="nav.map(i => i)" />
        </transition>
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
              <a href="mailto:email@majortom.space" id="hero-btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="whatwedo">
      <div class="columns">
        <div class="column is-6">
          <h2 class="destaque-text-invert">Digital Strategy</h2>
          <figure>
            <img src="/img/ds_o.jpg" alt="digital strategy">
          </figure>
          <div class="content">
            <p class="special-text-invert">
              SEO-Search Engine Optimization <br>
              Branding Design <br>
              Business Intelligence <br>
              User Experience Design / UX <br>
            </p>
          </div>
        </div>
        <div class="column is-6">
          <h2 class="destaque-text-invert">Digital Production</h2>
          <figure>
            <img src="/img/dp_o.jpg" alt="digital production">
          </figure>
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
.destaque-text-invert {
  text-decoration: underline;
  line-height: 5rem;
  font-style: normal;
  font-weight: 300;
  font-size: 3vw;
  color: #0a0a0a;
  margin: 1rem;
}
section {
  /* padding: 50px; */
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
  line-height: 1.8;
}
.special-text-invert {
  padding: 50px;
  line-height: 1.8;
  color: #0a0a0a;
  text-align: center;
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
.initPage-enter,
.initPage-leave-to {
  /* opacity: 0;
  transform: rotateY(50deg); */
  transform: translateX(50px);
  opacity: 0;
}
.initPage-enter-to,
.initPage-leave {
  opacity: 1;
  transform: rotateY(0deg);
}
.initPage-enter-active,
.initPage-leave-active {
  /* transition: opacity, transform 200ms ease-out; */
  transition: all 3s ease;
}
a#hero-btn {
  margin-bottom: 3rem;
  position: relative;
  display: inline-block;
  padding: 25px 30px;
  color: #ff0042;
  font-size: 24px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  letter-spacing: 3px;
  -webkit-box-reflect: below 1px linear-gradient(transparent,#0005);
}
a:hover#hero-btn {
  background: #ff0042;
  color: #050801;
  box-shadow: 0 0 5px #ff0042, 
              0 0 25px #ff0042, 
              0 0 50px #ff0042, 
              0 0 200px #ff0042;
}
a#hero-btn span {
  position: absolute;
  display: block;
}
a#hero-btn span:nth-child(1) {
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(90deg,transparent,#ff0042);
  animation: animate1 2s linear infinite;
}
@keyframes animate1
{
  0%
  {
    left: -100%;
  }
  50%,100%
  {
    left: 100%;
  }
}
a#hero-btn span:nth-child(2) {
  top: -100%;
  right: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(180deg,transparent,#ff0042);
  animation: animate2 2s linear infinite;
  animation-delay: 0.5s;
}
@keyframes animate2
{
  0%
  {
    top: -100%;
  }
  50%,100%
  {
    top: 100%;
  }
}
a#hero-btn span:nth-child(3) {
  bottom: 0;
  right: -100%;
  width: 100%;
  height: 2px;
  background: linear-gradient(270deg,transparent,#ff0042);
  animation: animate3 2s linear infinite;
  animation-delay: 1s;
}
@keyframes animate3
{
  0%
  {
    right: -100%;
  }
  50%,100%
  {
    right: 100%;
  }
}
a#hero-btn span:nth-child(4) {
  bottom: -100%;
  left: 0;
  width: 2px;
  height: 100%;
  background: linear-gradient(360deg,transparent,#ff0042);
  animation: animate4 2s linear infinite;
  animation-delay: 1.5s;
}
@keyframes animate4
{
  0%
  {
    bottom: -100%;
  }
  50%,100%
  {
    bottom: 100%;
  }
}
#whatwedo {
  padding: 50px;
}
@media (max-width: 800px) {
  .destaque-text-invert {
     font-size: 42px;
  }
}
@media (max-width: 500px) {
  .destaque-text-invert {
     font-size: 36px;
  }
}
figure img {
  filter: grayscale(100%);
  opacity: 0.5;
  transition: 1s;
}
figure:hover img {
  filter: unset;
  opacity: 1;
}
</style>
