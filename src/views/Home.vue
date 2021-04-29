<template>
  <div class="container">
    <div class="timeline">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div
              class="swiper-slide"
              v-for="item in items"
              :style="{backgroundImage: 'url(' + item.bgi + ')'}"
              :data-year="item.date"
          >
            <div class="swiper-slide-content">
              <span class="timeline-year">{{item.date}}</span>
              <h4 class="timeline-title">{{find_title(item.title)}}</h4>
              <h4 class="timeline-port">{{find_port(item.title)}}</h4>
              <p class="timeline-text" v-for="ite in breakSummery(item.summery)">{{ite}}</p>
              <br>
              <button class="detail_btn" @click="toggle(item.title, item.passage)">了解详情</button>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
  <detail :title="detailData.title" :passage="detailData.passage" :ifshow="isShow"></detail>
</template>

<script>
// import {Swiper, SwiperSlide} from 'swiper/vue'
import Swiper from '../assets/swiper.min'
import '../assets/swiper.min.css'
import List from '../../public/data.json'
import detail from "@/components/detail";

export default {
  name: 'Home',
  components: {
    detail,
  },
  data() {
    return {
      items: [],
      isShow: false,
      detailData:{
        title:"",
        passage:""
      }
    };
  },
  mounted() {
    this.init();
  },
  created() {
    this.items = List.data
  },
  computed:{
    getBlur(){
      if (this.isShow) return "blue(5px)"
      else return "blue(0px)"
    }
  },
  methods: {
    init() {
      let timelineSwiper = new Swiper(".timeline .swiper-container", {
        direction: "vertical",
        loop: false,
        speed: 1600,
        mousewheelControl: true,
        pagination: ".swiper-pagination",
        paginationBulletRender: function (swiper, index, className) {
          let year = document
              .querySelectorAll(".swiper-slide")
              [index].getAttribute("data-year");
          return '<span class="' + className + '">' + year + "</span>";
        },
        paginationClickable: true,
        nextButton: ".swiper-button-next",
        prevButton: ".swiper-button-prev",
        breakpoints: {
          768: {
            direction: "horizontal",
          },
        },
      });
    },
    toggle(title, passage){
      this.isShow = !this.isShow;
      this.detailData.title = title;
      this.detailData.passage = passage
    },
    find_title(str){
      let tmp = str.split("\n");
      return tmp[0];
    },
    find_port(str){
      let tmp = str.split("\n");
      if (tmp.length === 2){
        return tmp[1];
      }else {
        return "";
      }
    },
    breakSummery(str){
      return str.split("\n")
    }
  },
}
</script>

<style scoped>
.container{
  /*height: 100%;*/
  /*margin-top: 6%;*/
}
.detail_btn{
  letter-spacing: 0;
  font-size: 13px;
  font-weight: 600;
  border: solid 2px #ededef;
  border-radius: 999px;
  padding: .4em 1.15em;
  color: #ededef;
  background-color: rgba(0,0,0,0.2);
  transition-duration: 250ms;
  cursor: pointer;
  overflow: visible;
  vertical-align: inherit;
  font-family: "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
  /*-webkit-animation: fadeIn 5s;*/
  opacity: 0;
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
  transition: .2s ease .5s;
}
.timeline-port{
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 30px;
  opacity: 0;
  -webkit-transform: translate3d(20px, 0, 0);
  transform: translate3d(20px, 0, 0);
  transition: .2s ease .5s;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0; /*初始状态 透明度为0*/
  }
  50% {
    opacity: 0; /*结尾状态 透明度为0*/
  }
  100% {
    opacity: 1; /*结尾状态 透明度为0*/
  }
}

.detail_btn:hover{
  background-color: white;
  color: black;
}
.detail_container{
  /*position: fixed;*/
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>