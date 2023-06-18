<template>
  <div class="music">
    <div class="header">推荐新音乐 <font-awesome-icon :icon="['fas', 'angle-right']" ></font-awesome-icon></div>
    <div class="body">
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
      <div class="item">
        <div class="cover"></div>
        <div class="text">
          <div class="song">California</div>
          <div class="singer">Mylene Farmer</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
div.music{
  div.body{
    display: grid;
    grid-template-columns: repeat(2, 586px);
    grid-template-rows: repeat(5, 100px);
    div.item{
      border-radius: 10px;
      margin-right: 10px;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      cursor: pointer;
      &:hover{
        background-color: #d8d0d0;
      }
     
      div.cover{
        width: 90px;
        height: 90px;
        background-color: skyblue;
        border-radius: 10px;
        margin-right: 10px;

      }
      div.text{
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        div.song{
          margin-bottom: 15px;
        }

        div.singer{
          color:rgb(148 163 184)
        }

      }
    }
  }

}
</style>