<template>
  <el-main>
   <Recom />
   <PlayList />
   <Music />
   <MV />
  </el-main>
</template>

<style lang="less">
.el-main{
  padding-top: 80px;
  padding-bottom: 100px;
  padding-left: 250px;
  div.header{
    font-size: 28px;
    margin-top: 28px;
    margin-bottom: 15px;
    svg{
      cursor: pointer;
    }
  }
}
</style>

<script>
import Recom from './recom.vue';
import Music from './Music.vue'
import MV from './MV.vue'
import PlayList from './PlayList.vue'

export default{
  components: {
      Recom,
      MV,
      Music,
      PlayList
    },
}
</script>