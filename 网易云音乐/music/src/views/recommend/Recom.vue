<template>
  <div class="recommend">
    <div class="header">推荐</div>
    <div class="body">
      <swiper
        :slides-per-view="2"
        :space-between="25"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide><img src="http://p1.music.126.net/GqrJj1msryLIkPJnu6jlaQ==/109951168681429313.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="http://p1.music.126.net/kSNA8Qd3FSMW8vMe6ad1TA==/109951168683126134.jpg" alt=""></swiper-slide>
        
      </swiper>
    </div>
  </div>
</template>
<style lang="less">
div.recommend{
  div.header{
    font-size: 36px;
    font-weight: 700;
  }

  div.body{
    .swiper-wrapper {
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 1;
      display: flex;
      transition-property: transform;
      box-sizing: content-box;
    }

  .swiper .swiper-slide{
      width: 50%;
      height: auto;
      transform: translateZ(0);
      backface-visibility: hidden;
      
      img{
        height: 221px;
        border-radius: 15px;
        cursor: pointer;
        object-fit: cover;
      
      }

      &:hover{
        opacity: .8;
      }
  }
}
}
</style>

<script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default{
  data(){
    return {
      

    }
  },
  components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      const onSwiper = (swiper) => {
        console.log(swiper);
      };
      const onSlideChange = () => {
        console.log('slide change');
      };
      return {
        onSwiper,
        onSlideChange,
      };
    },
}
</script>