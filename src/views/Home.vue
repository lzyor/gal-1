<template>
  <div @click="next_cmd" class="game">
    <Scene :src="scene.src"></Scene>
    <Stand
      v-for="stand in stands"
      :key="stand.id"
      :src="stand.src"
      :top="stand.top"
      :left="stand.left"
      :width="stand.width"
    ></Stand>
    <Message :title="message.title" :text="message.text"></Message>
  </div>
</template>

<script>
import Stand from "@/components/Stand.vue";
import Message from "@/components/Message.vue";
import Scene from "@/components/Scene.vue";

import script from "@scripts/test";

function prop_copy(to, from) {
  for (let i in to) {
    if (i in from) {
      to[i] = from[i];
    }
  }
}

export default {
  name: "Game",
  components: {
    Stand,
    Message,
    Scene,
  },
  data: () => ({
    count: 0,
    scene: {
      src: "",
    },
    // stand: {
    //   src: "",
    //   top: 0,
    //   left: 0,
    //   width: 0,
    // },
    stands: [],
    message: {
      title: "",
      text: "",
    },
  }),
  methods: {
    next_cmd() {
      let done = false;
      while (!done && this.count < script.length) {
        let cmd = script[this.count++];
        done = false;
        if (Array.isArray(cmd)) {
          if (cmd.length !== 2) {
            continue;
          }
          this.message.title = cmd[0];
          this.message.text = cmd[1];
          done = true;
          continue;
        } else if (typeof cmd.type === "string") {
          switch (cmd.type) {
            case "scene_set":
              prop_copy(this.scene, cmd);
              break;
            case "stand_set":
              {
                // find by id
                let stand = null;
                for (let i of this.stands) {
                  if (i.id === cmd.id) {
                    stand = i;
                  }
                }
                // handle
                if (!stand) {
                  // new stand
                  stand = {
                    src: "",
                    id: null,
                    top: 0,
                    left: 0,
                    width: 0,
                  };
                  prop_copy(stand, cmd);
                  if (stand.id === null) {
                    // error
                    console.error("stand id error");
                    break;
                  }
                  this.stands.push(stand);
                }
              }
              break;
            case "stand_del":
              for (let i = 0; i < this.stands.length; i++) {
                if (this.stands[i].id == cmd.id) {
                  this.stands.splice(i, 1);
                }
              }
              break;
          }
          continue;
        } else {
          console.error("unknown cmd");
          continue;
        }
      }
      if (this.count >= script.length) {
        // script over
      }
    },
  },
  mounted() {
    this.next_cmd();
  },
};
</script>

<style>
html,
body {
  user-select: none;
}

.game {
  position: absolute;
  top: 0;
  width: 100vw;
  height: 56.25vw;
  overflow: hidden;
}
</style>
