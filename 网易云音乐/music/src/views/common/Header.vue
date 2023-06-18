<template>
  <el-header>
    <span class="left">
      
      <font-awesome-icon :icon="['fas', 'angle-left']" />
      <font-awesome-icon :icon="['fas', 'angle-right']" />
      <font-awesome-icon class="search" :icon="['fas', 'magnifying-glass']" />
      <el-input v-model="input" placeholder="搜索音乐、MV、歌单" />
     
     
    </span>
    <span class="right">
      <div class="avatar"></div>
      <b class="user-login"> 用户登录</b>
      <font-awesome-icon :icon="['fas', 'envelope']" />
      <font-awesome-icon :icon="['fas', 'palette']" />
      <font-awesome-icon :icon="['fas', 'bars']" />
    </span>
  </el-header>
</template>

<style lang="less">
.el-header{
  display: flex;
  position: fixed;
  left:224px;
  top:0;
  z-index: 999;
  background: #fff;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  span{
    display: inline-block;
    height: 80px;
    width: 100%;
    
    line-height: 80px;
  }

  span.left{
    svg{
      font-size: 22px;
      margin-left: 42px;
      color:#ccc;
      &:hover{
        color:#34d399;
      }
    }

    svg.search{
      position: absolute;
      left: 174px;
      top: 31px;
      z-index: 999;
      color: #ccc;
    }

    .el-input{
      width: 40%;
    }

    .el-input__inner{
      border-radius: 10004px;
      background-color: rgb(241 245 249);
      font-size: 15px;
      height: 41px;
      width: 225px;
      line-height: 30px;
      padding-left: 38px;
      padding-right: 31px;
      border: 1px solid #e6eaef;
    }

    .el-input__wrapper{
      margin: 0 72px;
      display: inline-block;
      flex-grow: unset;
      align-items: unset;
      justify-content: unset;
      padding: unset;
      background-color: unset;
      background-image: none;
      border-radius:unset;
      transition: unset;
      transform: unset;
      box-shadow:unset;
    }
  }

  span.right{
    height: 80px;
    line-height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    div.avatar{
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 15px;
      background-color: #ccc;
      margin-right: 10px;
      cursor: pointer;
      
    }

    b.user-login{
      font-weight: 400;
      margin-right: 10px;
      cursor: pointer;
      &:hover{
        color:#34d399;
      }
    }

    svg{
      margin-right: 10px;
      &:hover{
        color:#34d399;
      }
      cursor: pointer;
    }
  }

}
</style>

<script>
export default{
  data(){
    return {
      input:"",
    }
  }
}
</script>