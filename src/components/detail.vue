<template>
  <transition name="fade">
    <div class="detail_container" v-if="ifshow">
      <div class="box">
        <button class="close_btn" @click="toggle">关闭</button>
        <h1>{{ title }}</h1>
        <div class="psg">
          <p v-for="item in procressPassage">{{ item }}</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "detail",
  props: ['title', 'passage', 'ifshow'],
  methods: {
    toggle() {
      this.$parent.toggle()
    }
  },
  computed: {
    procressPassage() {
      console.log(this.passage);
      return this.passage.split("\n")
    }
  },
  data() {
    return {
      pList: []
    }
  },
  // mounted() {
  //   console.log(this.passage);
  //   this.pList = this.passage.split("\n")
  // }
}
</script>

<style scoped>

.detail_container {
  /*position: fixed;*/
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
}

@media screen and (min-width: 0px) {
  .box {
    height: 70%;
    width: 80%;
    background: white;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
    padding-top: 24px;
    padding-bottom: 24px;
    border-radius: 18px;
    overflow: scroll;
  }

  .close_btn {
    letter-spacing: 0;
    font-size: 13px;
    font-weight: 600;
    border: solid 2px #000000;
    border-radius: 999px;
    padding: .4em 1.15em;
    color: black;
    background-color: rgba(255, 255, 255, 2);
    transition-duration: 250ms;
    /*transition: 2s;*/
    cursor: pointer;
    overflow: visible;
    vertical-align: inherit;
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    position: relative;
    left: -34%;
    top: -3%;
  }
  p {
    text-align: left;
    text-indent: 2em;
    letter-spacing: .05em;
    line-height: 1.5em;
    white-space: pre-wrap;
    padding: 5px 0;
  }

  .psg {
    padding-top: 20px;
    padding-left: 15px;
    padding-right: 15px;
  }
}

@media screen and (min-width: 768px) {
  .box {
    height: 70%;
    width: 70%;
    background: white;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.2);
    padding-top: 24px;
    padding-bottom: 24px;
    border-radius: 18px;
    overflow: scroll;
  }

  .close_btn {
    letter-spacing: 0;
    font-size: 13px;
    font-weight: 600;
    border: solid 2px #000000;
    border-radius: 999px;
    padding: .4em 1.15em;
    color: black;
    background-color: rgba(255, 255, 255, 2);
    transition-duration: 250ms;
    /*transition: 2s;*/
    cursor: pointer;
    overflow: visible;
    vertical-align: inherit;
    font-family: "SF Pro SC", "SF Pro Text", "SF Pro Icons", "PingFang SC", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    position: relative;
    left: -44%;
    top: 2%;
  }
  p {
    text-align: left;
    text-indent: 2em;
    letter-spacing: .05em;
    line-height: 1.5em;
    white-space: pre-wrap;
    padding: 5px 0;
  }

  .psg {
    padding: 30px 50px;
  }
}

.close_btn:hover {
  background-color: black;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>