<script >
export default{
    data(){
        return {
            data:[{
    name:"百度ife项目",
    active:false,
    tasks:[
        {
            name:"task 1",
            date:"2019/1/1",
            active:true,
            todos:[{
                name:"to do 1",
                done:false,
                active:true,
                content:"Content",
            },{
                name:"to do 2",
                done:false,
                active:false,
                content:"Content",
            },{
                name:"to do 3",
                done:false,
                active:false,
                content:"Content",
            },{
                name:"to do 4",
                done:false,
                active:false,
                content:"Content",
            }]
        },
        {
            name:"task2",
            active:false,
            date:"2019/1/10",
            todos:[{
                name:"to do 5",
                done:false,
                active:false,
                content:"Content",
            },{
                name:"to do 6",
                done:false,
                active:false,
                content:"Content",
            },{
                name:"to do 7",
                done:false,
                active:false,
                content:"Content",
            },{
                name:"to do 8",
                done:false,
                active:false,
                content:"Content",
            }]
        },
    ]
},{
    name:"社团活动",
    active:false,
    tasks:[{
        name:"task 3",
        active:false,
        date:"2019/1/14",
        todos:[{
            name:"todo 11",
            content:"任务内容",
            active:false,
            content:"Content",
            
        }]
    }]
},{
    name:"家庭生活",
    active:false,
    date:"2019/1/15",
    tasks:[]
},{
    name:"毕业设计",
    active:false,
    date:"2019/1/16",
    tasks:[],
},{
    name:"默认分类",
    active:false,
    date:"2019/1/17",
    tasks:[],
            }]
        }
    },
    methods:{
    },
    computed:{
        findFolders(){
            let arr=[]
            for(let obj of this.data){
                arr.push(obj)
            }
            return arr
        },
        findActivedTask(){
            for(let obj of this.data){
                for(let ob of obj.tasks){
                    if(ob.active === true){
                        return ob
                    }
                }
            }
        },
        findActivedTodo(){
            for(let obj of this.data){
                for(let ob of obj.tasks){
                    for(let o of ob.todos){
                        if(o.active===true){
                            return o
                        }
                    }
                }
            }
        }
    }
}
    
</script>
<template>
    <div class="common-layout">
        <el-container>
          <el-header class="header">GTD</el-header>
          <el-container>
            <el-aside class="aside folder-lists">
                <el-row class="title">所有任务</el-row>
               <div v-for="(obj,index) in findFolders" :key="index">
                <el-row >
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder">&nbsp;{{obj.name}}</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                    <el-row class="file" v-for="(task, ind) in obj.tasks" :key="ind">
                        <span><el-icon :size="20"><Document /></el-icon><span class="file"> {{task.name}}</span></span>
                    </el-row>
               </div>
            </el-aside>
            <el-aside class="aside task-lists">
                <el-row class="btn ">
                    <el-button type="primary" plain>全部任务</el-button>
                    <el-button type="success" plain>已完成</el-button>
                    <el-button type="danger" plain>未完成</el-button>
                </el-row>
                <el-row v-for="(ob,ind) in findActivedTask.todos">{{ob.name}}</el-row>
            </el-aside>
            <el-main>
                <el-row class="title">
                    <span class="title">{{findActivedTodo.name}}</span>
                    <span class="change">
                        <el-icon :size="30" ><Edit /></el-icon>
                        <span></span>
                        <el-icon :size="30"><SuccessFilled /></el-icon>
                    </span>
                </el-row>
                <el-row class="time">{{findActivedTask.date}}</el-row>
                <el-row class="content">{{findActivedTodo.content}}</el-row>
            </el-main>
            <el-row class="add-folder"><el-icon><Plus /></el-icon>&nbsp;新增分类</el-row>
            <el-row class="add-task"> <el-icon><Plus /></el-icon>&nbsp;新增任务</el-row>
          </el-container>
        </el-container>
      </div>
</template>

<style lang="less">

.done{
    color:green;
}
.common-layout{
    background-color: #EEF1FF;
    height: 600px;
}

.el-main{
    border: 1px solid #B1B2FF;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 540px;

    .el-row.title{
        padding-left: 10px;
        max-height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        span.change{
            background-color: #EEF1FF;
            margin-right: 10px;
            .el-icon svg{
                margin-top: 26px;
            }
            span{
                display: inline-block;
                width: 10px;
            }
      }
    }
    .el-row.time{
        padding-left: 10px;
        max-height: 45px;
        border: 1px solid #B1B2FF;
        border-left: none;
        line-height: 45px;
    }
    .el-row.content{
        padding-top: 10px;
        padding-left: 10px;
        flex:1;
    }

}
.el-aside{
    overflow: unset;
    width:300px;
    min-height: 540px;
    border: 1px solid #B1B2FF;
    .task-lists{
        background-color: #AAC4FF;
    }

    .el-row.title{
        font-size: 25px;
        line-height: 60px;
        padding-left: 10px;
        height: 60px;
        
    }

    .el-row{
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        line-height: 45px;
        height: 45px;
        padding-left: 20px;
        padding-right: 10px;
        border: 1px solid #B1B2FF;
        border-right: none;
       border-left: none;
        .el-icon svg{
            margin-top: 21px;
        }
        cursor: pointer;
    }

    .el-row.btn{
        font-size: 25px;
        line-height: 60px;
        padding-top: 14px;
        height: 60px;
    }

    .el-row.file{
        padding-left: 45px;
    }
}

.header{
    background-color: #A7ECEE;
    color:#fff;
    font-size: 45px;
    height: 60px;
    line-height: 60px;
    font-weight: 700;
}

.add-folder{
    position: fixed;
    left: 0;
    bottom: 0;
    border: 1px solid #B1B2FF;
    height: 45px;
    width: 300px;
    background-color: #EEF1FF;
    text-align: center;
    line-height: 45px;
    padding-left: 30px;
    .el-icon svg{
        margin-top: 25px;
    }
    cursor: pointer;
}

.add-task{
    position: fixed;
    left: 300px;
    bottom: 0;
    border: 1px solid #B1B2FF;
    height: 45px;
    width: 300px;
    text-align: center;
    line-height: 45px;
    padding-left: 30px;
    .el-icon svg{
        margin-top: 25px;
    }
    cursor: pointer;
}
</style>