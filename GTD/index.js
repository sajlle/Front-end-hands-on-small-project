// 定义数据格式
data = [{
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

// 获取html元素
let folderUl = document.querySelector("ul.task-folder-content-list")
let isTaskListExistFlag = false



// 渲染文件夹栏
renderFolder(data)
clickFolder(data[0])
let folderList = document.querySelectorAll("ul.task-folder-content-list li.folder")
folderList[0].click(data[0])

let liToDo = document.querySelectorAll("li.todo")
liToDo[0].click(data[0])

// 获取相关元素
let editTaskName = document.querySelector(".sub-task .edit-task")
let taskTitle = document.querySelector(".sub-task .task-name")
let taskEditInput = document.querySelector(".sub-task .task-title")

// 点击新增任务文件夹
let addFolder = document.querySelector("div.add-folder")
let addFolderInput = document.querySelector(".add-task-input")
addFolder.addEventListener("click", function() {
    addFolder.classList.add("close")
    addFolderInput.classList.remove("close")
})

addFolderInput.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        let val = this.value
        data.push({
            name: val,
            active: false,
            tasks: [],
        })
        renderFolder(data)
        clickFolder()
        addFolder.classList.remove("close")
        addFolderInput.classList.add("close")
    }
})

// 给新增任务按钮添加新增功能
let addTask = document.querySelector(".add-new")
let taskInput = document.querySelector("input.add-input")
addTask.addEventListener("click", function() {
    addTask.classList.add("close")
    taskInput.classList.remove("close")
    taskEditInput.focus()
})

taskInput.addEventListener("keydown", function(e) {
    if (e.keyCode == 13) {
        let val = taskInput.value
        let obj = findActivedFolder(data)
        obj.subTasks.push({
            date: (new Date()).toLocaleDateString(),
            active: false,
            tasks: [{
                name: val,
                content: "任务内容",
                done: false,
            }]
        })
        renderTaskList(obj.subTasks)
        let todos = document.querySelectorAll("li.todo")
            // 给todolist 添加点击事件
        addTodos(todos, obj.subTasks)
        addTask.classList.remove("close")
        taskInput.classList.add("close")

        renderFolder(data)
        clickFolder()
        clickDel()

    }
})

// 给任务列表添加删除功能
clickDel()

// 点击已完成按钮，属性改为done
let doneTask = document.querySelector("b.done-task")
doneTask.addEventListener("click", function(e) {
    e.target.classList.toggle("green")
    let name = e.target.parentElement.parentElement.parentElement.children[0].textContent

    let o = findActivedSubTasks(data)
    if (!o) {
        let allToDo = findAllTasks(data)
        for (let i = 0; i < allToDo.length; i++) {
            if (name === allToDo[i].name) {
                allToDo[i].done = !allToDo[i].done
            }
        }
    } else {
        for (let obj of o.tasks) {
            if (obj.name === name) {
                obj.done = !obj.done
                console.log(obj.done)
            }
        }
    }

})

// 给所有任务添加实时响应数据
let countAll = document.querySelector("span.count")
countAll.textContent = findAllTasks(data).length

// 统计所有任务数量
let UL = document.querySelector("ul.subTask")
let title = document.querySelector("div.title")
let all = document.querySelector("span.all")
all.addEventListener("click", function(e) {
    let allToDo = findAllTasks(data)

    //拍他思想，需要删除其余
    for (let ele of title.children) {
        ele.classList.remove("white")
    }
    all.classList.add("white")


    UL.innerHTML = ``
    for (let obj of allToDo) {
        let li = document.createElement("li")
        li.textContent = obj.name
        li.classList.add("todo")
        UL.appendChild(li)
    }

    let todolists = document.querySelectorAll("li.todo")
    for (let i = 0; i < allToDo.length; i++) {
        let ele = todolists[i]
        ele.addEventListener("click", function(e) {
            renderSubTask(allToDo[i], allToDo[i].date)
            addEdit(allToDo[i], allToDo[i].date)
            editContent(allToDo[i], allToDo[i].date)
                // 点击完成按钮，任务变色
            let circleCheck = document.querySelector("b.done-task i")
                // console.log(circleCheck)
                // console.log(circleCheck.classList)
                // console.log(doneTask.classList)
                // console.log(doneTask.classList.contains("green"))
            if (circleCheck.classList.contains("green")) {
                circleCheck.classList.remove("green")
            }
        })
    }

})


// 统计已完成任务的数量
let doneBtn = document.querySelector("span.done")
doneBtn.addEventListener("click", function(e) {
    let doneTasks = findAllTasks(data).filter(obj => obj.done === true)
    console.log(doneTasks)

    // 变化title栏目状态
    for (let ele of title.children) {
        ele.classList.remove("white")
    }
    doneBtn.classList.add("white")

    // 初始化任务列表，渲染任务
    UL.innerHTML = ``
    for (let obj of doneTasks) {
        let li = document.createElement("li")
        li.textContent = obj.name
        li.classList.add("todo")
        UL.appendChild(li)
    }

    // 给任务列表添加点击功能
    let todolists = document.querySelectorAll("li.todo")
    for (let i = 0; i < doneTasks.length; i++) {
        let ele = todolists[i]
        ele.addEventListener("click", function(e) {
            renderSubTask(doneTasks[i], doneTasks[i].date)
            addEdit(doneTasks[i], doneTasks[i].date)
            editContent(doneTasks[i], doneTasks[i].date)


        })
    }
})

// 统计未完成任务的数量
let undoneBtn = document.querySelector("span.undone")
undoneBtn.addEventListener("click", function(e) {
    // 获取未完成任务数据
    let undoneTasks = findAllTasks(data).filter(obj => obj.done === false)

    // 变化title栏目状态
    for (let ele of title.children) {
        ele.classList.remove("white")
    }
    undoneBtn.classList.add("white")

    // 初始化列表容器，渲染未完成列表
    UL.innerHTML = ``
    for (let obj of undoneTasks) {
        let li = document.createElement("li")
        li.textContent = obj.name
        li.classList.add("todo")
        UL.appendChild(li)
    }

    // 给任务列表添加点击功能
    let todolists = document.querySelectorAll("li.todo")
    for (let i = 0; i < undoneTasks.length; i++) {
        let ele = todolists[i]
        ele.addEventListener("click", function(e) {
            renderSubTask(undoneTasks[i], undoneTasks[i].date)
            addEdit(undoneTasks[i], undoneTasks[i].date)
            editContent(undoneTasks[i], undoneTasks[i].date)

            let circleCheck = document.querySelector("b.done-task i")

            // 重新渲染
            if (undoneTasks[i].done === false) {
                circleCheck.classList.remove("green")
            }
        })
    }
})


function findAllTasks(data) {
    let allTasks = []
    for (let obj of data) {
        for (let ob of obj.tasks) {
            for (let o of ob.subTasks) {
                for (let todo of o.tasks) {
                    allTasks.push(todo)
                }
            }
        }
    }
    return allTasks
}

function clickDel() {
    let delList = document.querySelectorAll("span.del-folder")
    for (let ele of delList) {
        ele.addEventListener("click", function(e) {
            let id = e.target.parentElement.parentElement.dataset.id
            data.splice(id, 1)
            renderFolder(data)
            clickFolder()
            clickDel()
        })
    }
}

function sumFolder(obj) {
    let count = 0
    for (let ob of obj.tasks) {
        for (let o of ob.subTasks) {
            for (let todo of o.tasks) {
                count++
            }
        }
    }
    return count
}

function clickFolder(...args) {
    // 点击重新渲染列表
    renderFolder(data)

    // 给文件夹列表绑定点击事件，点击展开列表，再次点击收起列表
    let folderList = document.querySelectorAll("ul.task-folder-content-list li.folder")

    for (let ele of folderList) {
        let id = ele.dataset.id
        ele.parentElement.addEventListener("click", function(e) {
            // 初始化 title栏目
            let title = document.querySelector("div.title")
            for (let ele of title.children) {
                ele.classList.remove("white")
            }
            if (e.target.tagName === "SPAN") {

                data[id].active = !data[id].active
                    // 初始化任务列表
                if (ele.parentElement.children.length == 1) {
                    showTask(data, id, folderList)
                } else {
                    closeTask(id, folderList)
                }


                // 点击渲染任务列表
            } else if (e.target.tagName === "LI") {
                // 给点击的任务列表添加激活样式
                let taskList = document.querySelectorAll("li.task")
                for (let ele of taskList) {
                    ele.classList.remove("current-task-list")
                }
                e.target.classList.add("current-task-list")

                let subdata = []
                    // 获取需要渲染的数据
                if (args[0]) {
                    subdata = data[0].tasks[0]
                        // console.log(subdata)
                } else {
                    let index = e.target.children[0].dataset.id
                    subdata = data[id].tasks[index]
                        // console.log(subdata)
                        // console.log(args[0])
                }

                changeTaskState(data)
                subdata.active = true
                    // console.log(data[id].tasks[index])
                renderTaskList(subdata.subTasks)


                let todos = document.querySelectorAll("li.todo")
                    // 给todolist 添加点击事件
                addTodos(todos, subdata.subTasks)



            }

        })
    }
}

// 给subtodo 添加编辑功能
function addEdit(data, time) {
    // 给按钮添加点击事件
    editTaskName.addEventListener("click", function(e) {
        let value = taskTitle.textContent
        taskTitle.classList.add("close")
        taskEditInput.classList.remove("close")
        taskEditInput.textContent = value
            // 回车之后更新数据
        taskEditInput.addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                let val = taskEditInput.value
                data.name = val
                taskTitle.classList.remove("close")
                taskEditInput.classList.add("close")
                renderSubTask(data, time)


            }
        })
    })
}

// 编辑任务内容
function editContent(data, time) {
    // 获取内容
    let content = document.querySelector("div.content")
    let reCon = document.querySelector(".re-con")

    content.addEventListener("dblclick", function(e) {
        let text = content.textContent
        content.classList.add("close")
        reCon.classList.remove("close")
        reCon.textContent = text

        reCon.addEventListener("keydown", function(e) {
            if (e.keyCode == 13) {
                let value = reCon.value
                data.content = value
                reCon.classList.add("close")
                content.classList.remove("close")
                renderSubTask(data, time)
            }
        })
    })
}

function addTodos(todos, subdata, ...rest) {
    for (let ele of todos) {

        ele.addEventListener("click", function(e) {
            let time

            time = e.target.parentElement.parentElement.parentElement.children[0]


            let i = time.dataset.id
            let j = e.target.dataset.id
            let taskData = subdata[i].tasks[j]
            renderSubTask(taskData, time.textContent)
            console.log(taskData)


            // 排他思想，如果有激活的任务，就改成未激活，改完把当前任务的状态设置成激活
            changeSubTaskActive(data)
            subdata[i].active = true

            // 添加编辑标题功能
            addEdit(taskData, time.textContent)

            // 添加编辑内容功能
            editContent(taskData, time.textContent)

            // 添加点击已完成，切换任务完成状态的功能
            addDoneTodo(taskData)

        })
    }
}

function addDoneTodo(taskData) {
    let circleCheck = document.querySelector("b.done-task i")

    // 如果状态为已完成，则按钮变色
    if (taskData.done === true) {
        if (!circleCheck.classList.contains("green")) {
            circleCheck.classList.add("green")
        }
    }

    // 如果状态为未完成，点击按钮变色，状态改变
    if (taskData.done === false) {
        circleCheck.classList.remove("green")
    }

}

function findActivedSubTasks(data) {
    for (let obj of data) {
        if (obj.active === true) {
            for (let ob of obj.tasks) {
                if (ob.active === true) {
                    for (let o of ob.subTasks) {
                        if (o.active === true) {
                            return o
                        }
                    }
                }
            }
        }
    }
}

function changeSubTaskActive(data) {
    for (let ele of data) {
        for (let el of ele.tasks) {
            for (let e of el.subTasks) {
                if (e.active === true) {
                    e.active = false
                }
            }
        }
    }
}

function renderSubTask(data, time) {
    let taskName = document.querySelector(".sub-task .task-name")
    let taskTime = document.querySelector(".sub-task .time")
    let taskContent = document.querySelector(".sub-task .content")

    taskName.textContent = data.name
    taskTime.textContent = time
    taskContent.textContent = data.content
}

function renderTaskList(subTasks) {
    let subTaskUl = document.querySelector("ul.subTask")
    subTaskUl.innerHTML = ``
    let i = 0



    for (let obj of subTasks) {
        let li = document.createElement("li")
        li.innerHTML = `<li class="time" data-id=${i}><span> ${obj.date}</span></li>`
        let ol = document.createElement("ol")

        let j = 0
        for (let o of obj.tasks) {
            let subLi = document.createElement("li")
            subLi.innerHTML = `<li class="todo" data-id=${j}>${o.name}</li>`
            ol.appendChild(subLi)
            j++
        }
        li.appendChild(ol)
        subTaskUl.appendChild(li)
        i++
    }
}

function isTaskListExist(data) {
    for (let obj of data) {
        if (obj.active == true) {
            return true
        }
    }
    return false
}

function closeTask(id, folderList) {
    for (let i = 0; i < folderList[id].parentElement.children.length; i++) {
        if (i > 0) {
            folderList[id].parentElement.children[i].classList.toggle("close")
        }
    }
}

function showTask(data, id, folderList) {
    for (let i = 0; i < data[id].tasks.length; i++) {
        let sum = sumTasks(data[id].tasks[i])

        let taskLi = document.createElement("li")
        taskLi.innerHTML = `<i class="fa-regular fa-file" data-id=${i}></i>${data[id].tasks[i].name}(<span class="conunt">${sum}</span>)`
        taskLi.classList.add("task")
        folderList[id].parentElement.appendChild(taskLi)
    }
}

function sumTasks(data) {
    let count = 0
    for (let obj of data.subTasks) {
        for (let o of obj.tasks) {
            count++
        }
    }
    return count
}

function renderFolder(data) {
    // 渲染所有任务按钮
    let amount = document.querySelector("span.count")
    let sumAmount = findAllTasks(data).length
    amount.textContent = sumAmount

    // 初始化渲染界面
    folderUl.innerHTML = ``
    for (let i = 0; i < data.length; i++) {
        // 统计任务数量
        let sum = sumFolder(data[i])

        let folderLi = document.createElement('li')
        folderLi.innerHTML = `
        <ul>
            <li class="folder" data-id=${i} data-state="unclicked"><span><i class="fa-solid fa-folder" ></i>${data[i].name} (<span class="conunt">${sum}</span>)</span>
                </span><span class="del-folder"><i class="fa-solid fa-trash"></i></span></li>
            
        </ul>`
        folderUl.appendChild(folderLi)

    }
}


function changeTaskState(data) {
    for (let obj of data) {
        for (let o of obj.tasks) {
            if (o.active === true) {
                o.active = false
            }
        }
    }
}

function findActivedFolder(data) {
    for (let obj of data) {
        for (let o of obj.tasks) {
            if (o.active === true) {
                return o
            }
        }
    }
}