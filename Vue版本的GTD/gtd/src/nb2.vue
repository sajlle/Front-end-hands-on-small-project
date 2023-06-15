<template>
  <div id="app">
    <h1>个人任务管理系统</h1>
    <div class="input-container">
      <input type="text" v-model="newTask" placeholder="输入新任务" @keyup.enter="addTask" />
      <select v-model="newType">
        <option value="学习">学习</option>
        <option value="工作">工作</option>
        <option value="生活">生活</option>
        <option value="娱乐">娱乐</option>
      </select>
      <select v-model="newPriority">
        <option value="1">紧急重要</option>
        <option value="2">紧急不重要</option>
        <option value="3">不紧急重要</option>
        <option value="4">不紧急不重要</option>
      </select>
      <button @click="addTask">添加</button>
    </div>
    <ul class="task-list">
      <li v-for="(task, index) in sortedTasks" :key="index" class="task-item">
        <span :class="{done: task.done}">{{ task.name }}</span>
        <span class="type">{{ task.type }}</span>
        <span :class="'priority priority-' + task.priority">{{ priorityText(task.priority) }}</span>
        <div class="buttons">
          <button @click="toggleDone(index)">完成/取消</button>
          <button @click="editTask(index)">编辑</button>
          <button @click="deleteTask(index)">删除</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: "",
      newType: "学习",
      newPriority: "1",
      tasks: [
        { name: "学习vue", type: "学习", priority: "1", done: false },
        { name: "做运动", type: "生活", priority: "3", done: true },
        { name: "看电影", type: "娱乐", priority: "4", done: false },
        { name: "写报告", type: "工作", priority: "2", done: false },
      ],
    };
  },
  computed: {
    sortedTasks() {
      return this.tasks.sort((a, b) => a.priority - b.priority);
    },
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({
          name: this.newTask,
          type: this.newType,
          priority: this.newPriority,
          done: false,
        });
        this.newTask = "";
      }
    },
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    editTask(index) {
      const newName = prompt("请输入新的任务名称", this.tasks[index].name);
      if (newName && newName.trim()) {
        this.tasks[index].name = newName;
      }
    },
    toggleDone(index) {
      this.tasks[index].done = !this.tasks[index].done;
    },
    priorityText(priority) {
      switch (priority) {
        case "1":
          return "紧急重要";
        case "2":
          return "紧急不重要";
        case "3":
          return "不紧急重要";
        case "4":
          return "不紧急不重要";
      }
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  width: 600px;
  margin: 0 auto;
  font-family: Arial, Helvetica, sans-serif;
}
h1 {
  text-align: center;
  margin-top: 20px;
}
.input-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
input {
  width: 200px;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 10px;
}
select {
  width: 100px;
  height: 30px;
}
button {
  width: 80px;
  height: 30px;
  border: none;
  outline: none;
  background-color: #2196f3;
  color: white;
}
.task-list {
  list-style-type: none;
}
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
.task-item:nth-child(odd) {
  background-color: #f0f0f0;
}
.done {
  text-decoration-line: line-through;
}
.type {
  margin-left: 10px;
}
.priority {
  margin-left: 10px;
  padding: 2px 5px;
  border-radius: 5px;
}
.priority-1 {
  background-color: red;
}
.priority-2 {
  background-color: orange;
}
.priority-3 {
  background-color: green;
}
.priority-4 {
  background-color: gray;
}
.buttons {
  display: flex;
}
.buttons button:not(:last-child) {
  margin-right: 10px;
}
</style>
