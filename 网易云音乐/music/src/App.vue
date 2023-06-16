<template>
  <div class="common-layout">
    <el-container>
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
      <el-container>
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
        <el-main>Main</el-main>
        <el-footer>
          <span class="left">
            <div class="lf"></div>
            <div class="rg">
              <div class="song">
                <span class="song-name">开源云音乐</span>
                <span class="singer">-- small args</span>
              </div>
              <div class="comment">
                <font-awesome-icon :icon="['fas', 'heart']" />
                <font-awesome-icon :icon="['fas', 'down-long']" />
                <font-awesome-icon :icon="['fas', 'comment-dots']" />
                <font-awesome-icon :icon="['fas', 'message']" />
                <span class="count">999+</span>
              </div>
            </div>
          </span>
          <span class="center">
            <font-awesome-icon :icon="['fas', 'repeat']" />
            <font-awesome-icon :icon="['fas', 'backward']" />
            <font-awesome-icon class="play" :icon="['fas', 'circle-play']" />
            <font-awesome-icon :icon="['fas', 'forward']" />
            <font-awesome-icon :icon="['fas', 'volume-high']" />
          </span>
          <span class="right">
            00:00 / 00:00
            <font-awesome-icon :icon="['fas', 'file-lines']" />
            <font-awesome-icon :icon="['fas', 'indent']" />
            &nbsp;0
          </span>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>
<style lang="less">

.el-aside{
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

.el-header{
  display: flex;
  position: fixed;
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

.el-main{
  padding-top: 80px;
  background-color: purple;
}

.el-footer{
  width: 100%;
  height:100px;
  background-color: #fff;
  border-top: 3px solid #ccc;

  display: flex;
  justify-content: space-around;
  
  span{
    flex:1;
    height: 100px;
  }
  span.left{
    display: flex;
    justify-content: flex-start;
    align-items: center;

    div.lf{
      height: 60px;
      width: 60px;
      background-color: skyblue;
      border-radius: 6px;
      margin-right: 10px;
    }

    div.rg{
      svg{
        margin-right: 20px;
        color:#a9b3b7;
      }

      div.comment{
      

        span.count{
          position: absolute;
          height: 15px;
          width: 20px;
          left: 424px;
          bottom: 36px;
          background-color: #e6e5e5;
          border-radius: 5px;
          font-size: 10px;
          text-align: center;
          line-height: 15px;
          opacity:0.8;
        }
      }

      div.song{
        margin-bottom: 10px;
        color:#a9b3b7;
        span.song-name{
          margin-right: 10px;
          color:black;
        }
      }
    }
  }

  span.center{
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:23px;
    
    
    svg.play{
      font-size:56px;
      color:#34d399;
    }

    svg{
      margin:0 10px;
      &:hover{
        color:#34d399;
      }
    }
  }

  span.right{
    display:flex;
    justify-content:flex-end;
    align-items:center;
    font-size:18px;
    color:#666;

    svg{
      margin-left:10px;
      cursor:pointer;
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
