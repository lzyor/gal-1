<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-btn @click="a.play()">play</v-btn>
    <v-btn @click="a.pause()">pause</v-btn>
    <div
      v-for="color in colors"
      :key="color.k"
      :style="{ backgroundColor: color.k, width: '20px', height: '20px' }"
      :ref="color.k"
      :data-x="color.v"
    ></div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "About",
  data: () => ({
    colors: [
      { k: "red", v: 100 },
      { k: "green", v: 50 },
      { k: "blue", v: 200 },
    ],
  }),
  methods: {
    fa1() {
      return anime({
        targets: [this.$refs.blue, this.$refs.green, this.$refs.red],
        autoplay: false,
        // translateX: "13rem",
        // rotate: 180,
        // borderRadius: ["0%", "50%"],
        // innerText: [1, 100],
        // round: 10,
        // duration: 2000,

        translateX: function (el) {
          console.log("translateX", el);
          return el.getAttribute("data-x");
        },
        translateY: function (el, i) {
          return 50 + -50 * i;
        },
        scale: function (el, i, l) {
          return l - i + 0.25;
        },
        rotate: function () {
          return anime.random(-360, 360);
        },
        borderRadius: function () {
          return ["50%", anime.random(10, 35) + "%"];
        },
        duration: function () {
          return anime.random(1200, 1800);
        },
        delay: function () {
          return anime.random(0, 400);
        },
        direction: "alternate",
        loop: true,
      });
    },
  },
  mounted() {
    this.a = this.fa1();

    //旋转文字
    document.onmousemove = function (e) {
      let movex = 0;
      let movey = 0;
      e = e || window.event;
      if (e.pageX || e.pageY) {
        movex = e.pageX;
        movey = e.pageY;
      }

      anime({
        targets: "h1",
        // translateX: movex / 30,
        // translateY: movey / 30,
        // rotateX: -movey / 150,
        // rotateY: movex / 150,
        translateX: movex / 90,
        translateY: movey / 90,
        rotateX: -movey / 450,
        rotateY: movex / 450,
        duration: 2000,
        easing: "easeOutCirc",
      });
    };
  },
};
</script>

<style scoped>
.blue {
  background: blue;
  width: 20px;
  height: 20px;
}

.green {
  background: green;
  width: 20px;
  height: 20px;
}

.red {
  background: red;
  width: 20px;
  height: 20px;
}
</style>
