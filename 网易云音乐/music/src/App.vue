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
        <el-main>
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
          <div class="playlist">
            <div class="header">你的专属歌单 <font-awesome-icon :icon="['fas', 'angle-right']" ></font-awesome-icon></div>
            <div class="body">
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              <div class="item">
                <div class="info">
                  <font-awesome-icon :icon="['fas', 'headphones']" />
                  3.2 千万
                </div>
                <div class="mask">
                  <font-awesome-icon :icon="['fas', 'play']" /></div>
                <el-card :body-style="{ padding: '0px', 'border-radius':'15px '}" shadow="never">
                 
                  <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                  />
                 
                  <div style="padding: 14px" class="text">
                    <span>Yummy hamburger Yummy hamburger Yummy hamburger</span>
                  </div>
                </el-card>
                
              </div>
              
            </div>
          
          </div>
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
        </el-main>
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

  div.playlist{
    div.body{
      display: flex;
      flex-wrap: wrap;
      flex-shrink: 1;

      div.item{
        position: relative;
        width: 220px;
        margin-right: 10px;
        margin-bottom: 21px;

        &:hover .mask{
          display: block;
        }
        &:hover .info{
          display: none;
        }
        .el-card{
          border: none;

          div.text{
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .el-card img{
          width: 220px;
          height: 220px;
          border-radius: 15px;
        }
        div.mask{
          position: absolute;
          width: 220px;
          height: 220px;
          border-radius: 15px;
          left: 0;
          top:0;
          background-color: rgba(0, 0, 0, 0.5);
          display: none;
          text-align: center;
          line-height: 245px;
          svg{
            color:white;
            font-size: 60px;
            &:hover{
              color:#34d399;
            }
          }
        }

        div.info{
          position: absolute;
          right: 8px;
          bottom: 64px;
          background-color: black;
          color: white;
          padding: 5px 10px;
          border-radius: 15px;
          opacity: .9;
        }
      }
    }
  }

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
}

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

<script>
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default{
  data(){
    return {
      input:"",

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
