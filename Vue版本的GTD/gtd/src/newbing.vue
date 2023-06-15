<template>
  <div id="app">
    <h1>个人任务管理系统</h1>
    <div class="input-container">
      <input type="text" v-model="newTask" placeholder="输入新任务" @keyup.enter="addTask" />
      <button @click="addTask">添加</button>
    </div>
    <ul class="task-list">
      <li v-for="(task, index) in tasks" :key="index" class="task-item">
        <span :class="{done: task.done}">{{ task.name }}</span>
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
      tasks: [
        { name: "学习vue", done: false },
        { name: "做运动", done: true },
        { name: "看电影", done: false },
      ],
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push({ name: this.newTask, done: false });
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
  width: 400px;
  height: 30px;
  border: none;
  outline: none;
  padding-left: 10px;
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
.buttons {
  display: flex;
}
.buttons button:not(:last-child) {
  margin-right: 10px;
}
</style>
