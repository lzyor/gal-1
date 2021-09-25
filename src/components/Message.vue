<template>
  <div class="message">
    <div class="message-title" v-text="title"></div>
    <div class="message-text" v-html="text"></div>
  </div>
</template>

<script>
export default {
  name: "Message",
  props: {
    title: String,
    text: String,
  },
  data: () => ({}),
  mounted() {
    //
  },
};
</script>

<style scoped>
.message {
  position: absolute;
  left: 10%;
  bottom: 5%;
  width: 80%;
  height: 25%;
  border-radius: 1vw;
  padding: 0 2%;
  color: #ffffff;
  background: #000000a0;
  text-shadow: #12315a 1px 0 0, #000 0 1px 0, #000 -1px 0 0, #000 0 -1px 0;
  /* margin: 0 auto; */
}

.message .message-title {
  height: 30%;
  /* font-size: 2em; */
  font-size: 3vw;
  font-weight: 900;
  padding-top: 0.2vw;
  margin-bottom: 0.5vw;
}

.message .message-text {
  overflow-x: overlay;
  height: 70%;
  /* font-size: 1.5em; */
  font-size: 2vw;
  /* -webkit-text-stroke: 1px #dbfff0; */
  font-weight: 500;
}
</style>
