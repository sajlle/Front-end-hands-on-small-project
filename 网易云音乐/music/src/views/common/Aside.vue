<template>
  <el-aside width="224px">
    <el-row class="panel">
      <el-col class="title">在线音乐</el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'compact-disc']" />推荐</el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'music']" /><span class="text">音乐馆</span></el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'video']" /><span class="text">视频</span></el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'podcast']" /><span class="text">电台</span></el-col>
      
    </el-row>
    <el-row class="panel">
      <el-col class="title">我的音乐</el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'heart']" />我喜欢</el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'desktop']" />本地歌曲</el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'download']" />下载歌曲</el-col>
      <el-col class="menu"><font-awesome-icon :icon="['fas', 'circle-play']" />最近播放</el-col>
    </el-row>
    

  </el-aside>
</template>

<style lang="less">
.el-aside{
  position: fixed;
  left: 0;
  top: 0;
  background-color: #f1f4f9;
  padding: 89px 5px;
  .panel{
    .el-col{
      width: 144px;
      height: 47px;
      padding: 0 16px;
      font-size: 19px;
      line-height: 47px;

      svg{
        margin-right: 10px;
        margin-left: 10px;
      }
    }

    .menu:hover{
      background-color: #34d399;
      color: white;
      border-radius: 5px;
    }

    .el-col.title{
      font-size: 19px;
      padding-top: 23px;
      margin-bottom: 18px;
    }
  }
}
</style>