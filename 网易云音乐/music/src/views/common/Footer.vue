<template>
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
</template>
<style lang="less">
.el-footer{
  width: 100%;
  height:100px;
  background-color: #fff;
  border-top: 3px solid #ccc;
  position: fixed;
  bottom: 0;
  left: 224px;
  z-index:999;
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
        position: relative;
        span.count{
          position: absolute;
          height: 15px;
          width: 20px;
          left: 111px;
          bottom: 10px;
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

    margin-top: 38px;
    margin-left: 163px;
    font-size:18px;
    color:#666;

    svg{
      margin-left:10px;
      cursor:pointer;
    }
  }

}
</style>