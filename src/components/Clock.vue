<template>
  <v-container class="clock">
    <div class="time">
      {{ hour }}:{{ min }}<span class="sec"> {{ sec }}</span>
    </div>
    <div>{{ date }}</div>
  </v-container>
</template>

<script>
export default {
  name: "Clock",

  data: () => ({
    hour: 12,
    min: 34,
    sec: 30,
    date: "2021-09-13",
  }),
  mounted() {
    setInterval(() => {
      let date = new Date();
      this.hour = date.getHours().toString().padStart(2, "0");
      this.min = date.getMinutes().toString().padStart(2, "0");
      this.sec = date.getSeconds().toString().padStart(2, "0");
      this.date = date.toISOString().slice(0, 10);
    }, 1000);
  },
};
</script>

<style scoped>
.clock {
  font-family: monospace;
  font-size: 32px;
  text-align: center;
  color: #ffffff;
}

.clock .time {
  font-size: 72px;
}

.clock .sec {
  font-size: 32px;
  opacity: 0.5;
}
</style>
