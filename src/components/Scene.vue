<template>
  <div
    :style="{
      paddingTop: style_top,
      marginLeft: style_left,
      width: style_width,
    }"
    class="scene"
  >
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "Scene",
  props: {
    src: String,
    top: Number,
    left: Number,
    width: Number,
  },
  data: () => ({}),
  computed: {
    style_top() {
      return `${this.top}%`;
    },
    style_left() {
      return `${this.left}%`;
    },
    style_width() {
      let width = this.width > 0 ? this.width : 100;
      return `${width}%`;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.scene {
  width: 100%;
  height: 100%;
  position: absolute;
  /* background: aqua; */
}

.scene img {
  width: 100%;
}
</style>
