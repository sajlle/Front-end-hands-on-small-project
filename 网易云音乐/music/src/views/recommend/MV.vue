<template>
  <div class="mv">
    <div class="header">MV <font-awesome-icon :icon="['fas', 'angle-right']" ></font-awesome-icon></div>
    <div class="body">
      <div class="item">
        <div class="info">
          <font-awesome-icon :icon="['fas', 'circle-play']" />
          196.6 万
        </div>
        <div class="mask">
          <font-awesome-icon :icon="['fas', 'play']" />
        </div>
        <div class="pic"></div>
        
        <div class="txt">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="info">
          <font-awesome-icon :icon="['fas', 'circle-play']" />
          196.6 万
        </div>
        <div class="mask">
          <font-awesome-icon :icon="['fas', 'play']" />
        </div>
        <div class="pic"></div>
        
        <div class="txt">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less">
div.mv{
  div.body{
    padding-bottom:10px;
    display: flex;
    justify-content: flex-start;

    div.item{
      position: relative;
      &:hover .mask{
        display: block;
      }
      &:hover .info{
        display: none;
      }
     
      div.pic{
        width: 260px;
        height: 160px;
        background-color: pink;
        border-radius: 10px;
        margin-right: 10px;

       
      }
      div.txt{
        div{
          margin-top: 10px;
        }

        div.singer{
          color: rgb(143, 161, 189) 
        }
      }
      div.mask{
        position: absolute;
        width: 260px;
        height: 160px;
        border-radius: 10px;
        left: 0;
        top:0;
        display: none;
        background-color: rgba(0, 0, 0,.5);
        text-align: center;
        line-height: 192px;
        svg{
          color:white;
          font-size: 60px;
          &:hover{
            color:#34d399;
          }
        }
      }
     div.info{
      background-color: #000;
      color:#fff;
      position: absolute;
      right: 18px;
      bottom: 70px;
      padding: 1px 8px;
      border-radius: 15px;
     }
    }
  }
}
</style>