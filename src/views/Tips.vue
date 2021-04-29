<template>
  <div id="root">
    <div class="item" v-for="item in rank(question_list)" :style="{'background': item.color}">
      <div class="msg">{{ item.msg }}</div>
      <br>
      <div class="origin">——{{ item.origin }}</div>
    </div>
  </div>
  <div>
    <img class="back_to_top" v-show="showTop" src="../assets/images/upup.jpg" @click="scrollToY(0, 1500, 'easeInOutQuint')"  alt="回到顶部"/>
  </div>
</template>

<script>
import question_data from "../../public/question_data.json"

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }
})()

export default {
  name: "Tips",
  mounted() {
    window.addEventListener('scroll', this.getScrollTop)

    this.question_list = question_data.data;
    for (let i=0;i<this.question_list.length;i++){
      this.question_list[i].color = this.selectColor()
    }
    // console.log(this.question_list);

  },
  data() {
    return {
      question_list: [],
      colors: ['#FF6666', '#CC99CC', '#FF99CC', '#99CCCC', '#FFFFCC', '#CCFFFF', '#FFCCCC', '#CCFFCC', '#CCCCFF', '#FFCC99', '#CCCC99', '#FF9999', '#e7ba9a', '#ff9a96', '#fffea5', '#92caf4'],
    }
  },
  computed: {
    showTop: function () {
      // return this.scrollTop > 500
      return true
    }
  },
  methods:{
    selectColor: function () {
      let number = Math.round(Math.random() * 15);
      // console.log(number);
      return this.colors[number]
    },
    rank: function (arr){
      let count = arr.length
      let shuffled = arr.slice(0),
          i = arr.length,
          min = i - count,
          temp,
          index;
      while (i > min) {
        index = Math.floor((i--) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
      }
      return shuffled.slice(min);
    },
    scrollToY (scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use

      let scrollY = window.scrollY || document.documentElement.scrollTop
      scrollTargetY = scrollTargetY || 0
      speed = speed || 2000
      easing = easing || 'easeOutSine'
      let currentTime = 0
      // min time .1, max time .8 seconds
      let time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8))

      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      let easingEquations = {
        easeOutSine: function (pos) {
          return Math.sin(pos * (Math.PI / 2))
        },
        easeInOutSine: function (pos) {
          return (-0.5 * (Math.cos(Math.PI * pos) - 1))
        },
        easeInOutQuint: function (pos) {
          if ((pos /= 0.5) < 1) {
            return 0.5 * Math.pow(pos, 5)
          }
          return 0.5 * (Math.pow((pos - 2), 5) + 2)
        }
      }

      // add animation loop
      function tick () {
        currentTime += 1 / 60

        let p = currentTime / time
        let t = easingEquations[easing](p)

        if (p < 1) {
          window.requestAnimFrame(tick)
          window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t))
        } else {
          window.scrollTo(0, scrollTargetY)
        }
      }

      // call it once to get started
      tick()
    },
    getScrollTop () {
      this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    }
  },

}
</script>

<style scoped>
@media screen and (min-width: 0px) {
  #root {
    margin: 0 auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    column-count: 2;
    column-gap: 20px;
    padding-bottom: 10px;
  }
}
@media screen and (min-width: 768px) {
  #root {
    margin: 0 auto;
    width: 100%;
    padding-left: 15px;
    padding-right: 15px;
    column-count: 5;
    column-gap: 20px;
    padding-bottom: 10px;
  }
}

/* 每一列图片包含层 */
.item {
  margin-bottom: 10px;
  /* 防止多列布局，分页媒体和多区域上下文中的意外中断 */
  break-inside: avoid;
  background: palevioletred;
  padding: 20px 10px;
  border-radius: 10px;
}

.item:hover {
  box-shadow: 2px 2px 2px rgba(0, 0, 0, .2);
}

.msg {
  width: 100%;
  word-break: break-all;
  text-indent: .5em;
  vertical-align: center;
  text-shadow: 2px 2px 2px rgba(0, 0, 0, .1);
}
.origin{
  font-size: 0.5em;
}

.back_to_top {
  position: fixed;
  z-index: 9999;
  bottom: 1.8rem;
  right: .26rem;
  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;
  opacity: 0.5;
  cursor: pointer;
  transition-duration: 0.5s;
}
.back_to_top:hover{
  opacity: 1;
}
</style>