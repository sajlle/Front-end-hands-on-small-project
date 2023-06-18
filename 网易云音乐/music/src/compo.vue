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
import Aside from './views/common/Aside.vue';
import Footer from './views/common/Footer.vue';
import Header from './views/common/Header.vue';
import Recommend from './views/recommend/index.vue'

export default{
  components: {
      Aside,
      Footer,
      Header,
      Recommend
    },
    
}
</script>
