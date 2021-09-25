<template>
  <div
    :style="{
      paddingTop: style_top,
      marginLeft: style_left,
      width: style_width,
    }"
    class="stand"
  >
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: "Stand",
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
      let width = this.width > 0 ? this.width : 30;
      return `${width}%`;
    },
  },
  mounted() {},
};
</script>

<style scoped>
.stand {
  position: absolute;
  bottom: 0;
  width: 30%;
  height: 100%;
  /* background: aqua; */
}

.stand img {
  width: 100%;
}
</style>
