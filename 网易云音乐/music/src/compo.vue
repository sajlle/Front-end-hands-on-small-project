<template>
  <div class="common-layout">
    <el-container>
     <Aside></Aside>
      <el-container>
        <Header></Header>
        <Recommend></Recommend>
        <Footer></Footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import Aside from './views/common/Aside.vue';
import Footer from './views/common/Footer.vue';
import Header from './views/common/Header.vue';
import Recommend from './views/recommend/index.vue'

export default{
  data(){
    return {
      input:"",

    }
  },
  components: {
      Swiper,
      SwiperSlide,
      Aside,
      Footer,
      Header,
      Recommend
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
