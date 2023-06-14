<script setup>
let data = [{
    name: "百度ife项目",
    active: false,
    tasks: [{
        name: "task1",
        active: false,
        subTasks: [{
                date: "2017-05-1",
                active: false,
                tasks: [{
                        name: "to do 1",
                        content: "任务内容",
                        done: false,
                        date: "2019-1-1",
                    },
                    {
                        name: "to do 2",
                        content: "任务内容",
                        done: false,
                        date: "2019-1-1",
                    }
                ]

            },
            {
                date: "2015-01-02",
                active: false,
                tasks: [{
                    name: "to do 3",
                    content: "任务内容",
                    done: false,
                    date: "2019-1-1",
                }, {
                    name: "to do 4",
                    content: "任务内容",
                    done: false,
                    date: "2019-1-1",
                }]
            },
            {
                date: "2015-01-03",
                active: false,
                tasks: [{
                        name: "to do 5",
                        content: "任务内容",
                        done: false,
                        date: "2019-1-1",
                    },
                    {
                        name: "to do 6",
                        content: "任务内容",
                        done: false,
                        date: "2019-1-1",
                    }
                ]

            },
        ]
    }, {
        name: "task2",
        date: "2015-7-09",
        active: false,
        subTasks: [{
                date: "2015-01-04",
                active: false,
                tasks: [{
                    name: "to do 7",
                    content: "任务内容",
                    done: false,
                    date: "2019-1-1",
                }, {
                    name: "to do 8",
                    content: "任务内容",
                    done: false,
                    date: "2019-1-1",
                }]

            },
            {
                date: "2015-01-04",
                active: false,
                tasks: [{
                    name: "to do 9",
                    content: "任务内容",
                    done: false,
                    date: "2019-1-1",
                }, {
                    name: "to do 10",
                    content: "任务内容",
                    done: false,
                    date: "2019-1-1",
                }]
            },

        ]
    }]
}, {
    name: "毕业设计",
    active: false,
    tasks: [{
        name: "task3",
        active: false,
        subTasks: [{
            active: false,
            date: "2015-01-04",
            tasks: [{
                name: "to do 11",
                content: "任务内容",
                done: false,
                date: "2019-1-1",
            }]
        }]
    }]
}, {
    name: "社团活动",
    active: false,
    tasks: [],
}, {
    name: "家庭生活",
    active: false,
    tasks: [],
}, {
    name: "默认分类",
    active: false,
    tasks: [],
}]

</script>
<template>
    <div class="common-layout">
        <el-container>
          <el-header class="header">GTD</el-header>
          <el-container>
            <el-aside class="aside folder-lists">
                <el-row class="title">所有任务</el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 百度ife项目</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 毕业设计</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 社团活动</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 家庭生活</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 默认分类</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
            </el-aside>
            <el-aside class="aside task-lists">
                <el-row class="btn ">
                    <el-button type="primary" plain>全部任务</el-button>
                    <el-button type="success" plain>已完成</el-button>
                    <el-button type="danger" plain>未完成</el-button>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 百度ife项目</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 毕业设计</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 社团活动</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 家庭生活</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
                <el-row>
                    <span><el-icon :size="20"><Folder /></el-icon><span class="folder"> 默认分类</span></span>
                    <el-icon :size="20"><Delete /></el-icon>
                </el-row>
            </el-aside>
            <el-main >
                <el-row class="title">
                    <span class="title">任务标题</span>
                    <span class="change">
                        <el-button type="primary" :icon="Edit" circle />
                        <el-button type="success" :icon="Check" circle />
                    </span>
                </el-row>
                <el-row class="time">任务内容</el-row>
                <el-row class="content">任务内容</el-row>
            </el-main>
          </el-container>
        </el-container>
      </div>
</template>

<style lang="less">
.common-layout{
    background-color: #EEF1FF;
}
.el-main{
    border: 1px solid #B1B2FF;
    padding: 0;
    
    display: flex;
    flex-direction: column;

    .el-row.title{
        padding-left: 10px;
        min-height: 60px;
        line-height: 60px;
        display: flex;
        justify-content: space-between;
        span.change{
            margin-right: 10px;
            .el-button.is-circle{
                padding: 16px;
            }
      }
    }
    .el-row.time{
        padding-left: 10px;
        min-height: 45px;
        border: 1px solid #B1B2FF;
        line-height: 45px;
    }
    .el-row.content{
        padding-left: 10px;
        flex:1;
    }

}
.el-aside{
    overflow: unset;
    width:300px;
    .task-lists{
        background-color: #AAC4FF;
    }

    .el-row.title{
        font-size: 25px;
        line-height: 60px;
        padding-left: 10px;
        height: 60px;
        border: 1px solid #B1B2FF;
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
        
        .el-icon svg{
            margin-top: 21px;
        }

    }

    .el-row.btn{
        font-size: 25px;
        line-height: 60px;
padding-top: 14px;
        height: 60px;
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
</style>