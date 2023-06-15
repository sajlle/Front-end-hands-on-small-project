<script >


export default{
    data(){
        return {
            data:[{
    name:"百度ife项目",
    active:true,
    tasks:[
        {
            name:"task 1",
            date:"2019/1/1",
            active:false,
            todos:[{
                name:"to do 1",
                done:false,
                active:false,
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
            active:true,
            date:"2019/1/10",
            todos:[{
                name:"to do 5",
                done:true,
                active:true,
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
        countTodoOfFolder(folder){
           let  count = 0
            for(let obj of folder.tasks){
                for(let o of obj.todos){
                    count++
                }
            }
            return count
        },
        countTodoOfTask(task){
            let count = 0
            for(let obj of task.todos){
                count++
            }
            return count
        },
        addFolder(){
            const newFolder = prompt("请输入新的分类名称")
            if(newFolder && newFolder.trim()){
                this.data.push({
                    name:newFolder,
                    active:false,
                    tasks:[],
                })
            }
        },

        delFolder(target){
            let index = this.data.findIndex(obj => obj === target )
            this.data.splice(index,1)
        },
        // 寻找已经激活的Task，且该task包含激活的todo
        findATask(){
            for(let obj of this.data){
            for(let task of obj.tasks){
                if(task.active === true && this.hasTaskATodo(task)){
                    return task
                }
            }
           }
        },
        // 判断task中是否包含激活的todo
        hasTaskATodo(task){
            for(let todo of task.todos){
                if(todo.active === true){
                    return true
                }
            }
            return false
        },
        // 寻找激活的todo
        findATodo(){
            for(let obj of this.data){
                for(let task of obj.tasks){
                    for(let todo of task.todos){
                        if(todo.active === true){
                            return todo
                        }
                    }
                }
            }
        },

        addTodo(){
          let task= this.findATask()
          console.log(task)
          let newTodo = prompt("请输入新的todo")
          if(newTodo && newTodo.trim()){
            task.todos.push({
                name:newTodo,
                content:"任务内容",
                active:false,
                content:"Content",
            })
          }
          
        },

        editTodo(){
            let todo = this.findATodo()
            console.log(todo)
            let newTodo = prompt("请输入修改后的标题")
            if(newTodo && newTodo.trim()){
                todo.name = newTodo
            }
        },

        editTime(){
            let task = this.findATask()
            console.log(task)
            let newTime = prompt("请输入新的时间")
            if(newTime && newTime.trim()){
                task.date = newTime
            }
        },

        editContent(){
            let todo = this.findATodo()
            console.log(todo)
            let newContent = prompt("请输入新的内容")
            if(newContent && newContent.trim()){
                todo.content = newContent
            }
        }

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
        },
        countAllTodos(){
            let arr = []
            for(let obj of this.data){
                for(let ob of obj.tasks){
                    for(let o of ob.todos){
                        arr.push(o)
                    }
                }
            }
            return arr
        },
       
    }
}
    
</script>
<template>
    <div class="common-layout">
        <el-container>
          <el-header class="header">GTD</el-header>
          <el-container>
            <el-aside class="aside folder-lists">
                <el-row class="title">所有任务({{countAllTodos.length}})</el-row>
               <div v-for="(obj,index) in findFolders" :key="index">
                <el-row >
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder">&nbsp;{{obj.name}} ({{ countTodoOfFolder(obj) }})</span></span>
                    <el-icon :size="20" @click="delFolder(obj)"><Delete /></el-icon>
                </el-row>
                    <el-row class="file" v-for="(task, ind) in obj.tasks" :key="ind">
                        <span><el-icon :size="20"><Document /></el-icon><span class="file"> {{task.name}} ({{ countTodoOfTask(task) }})</span></span>
                    </el-row>
               </div>
            </el-aside>
            <el-aside class="aside task-lists">
                <el-row class="btn ">
                    <el-button type="primary" plain>全部任务</el-button>
                    <el-button type="success" plain>已完成</el-button>
                    <el-button type="danger" plain>未完成</el-button>
                </el-row>
                <el-row v-for="(ob,ind) in findActivedTask.todos" :key="ind" :class="{done:ob.done}">{{ob.name}}</el-row>
            </el-aside>
            <el-main>
                <el-row class="title">
                    <span :class="{done:findATodo().done}" >{{findActivedTodo.name}}</span>
                    <span class="change">
                        <el-icon :size="30" @click="editTodo"><Edit /></el-icon>
                        <span></span>
                        <el-icon :size="30" :class="{actived:findATodo().done}"><SuccessFilled /></el-icon>
                    </span>
                </el-row>
                <el-row class="time" @dblclick="editTime">{{findActivedTask.date}}</el-row>
                <el-row class="content" @dblclick="editContent">{{findActivedTodo.content}}</el-row>
            </el-main>
            <el-row class="add-folder" @click="addFolder"><el-icon><Plus /></el-icon>&nbsp;新增分类</el-row>
            <el-row class="add-task" @click="addTodo"> <el-icon><Plus /></el-icon>&nbsp;新增任务</el-row>
          </el-container>
        </el-container>
      </div>
</template>

<style lang="less">

.done{
    text-decoration: line-through;
}

.actived{
    color:#A7ECEE;
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