<template>
  <div class="home">
    <h1>Add New Todos</h1>
    <form action="" @submit.prevent="addTodo">
      <input
        type="text"
        v-model="todoObject.text"
        name=""
        id=""
        placeholder="Enter your todo"
        required
      />
      <br />
      <input
        type="date"
        v-model="todoObject.from"
        name=""
        id=""
        placeholder="from"
        required
        style="margin-top: 20px"
      />
      <input
        type="date"
        v-model="todoObject.to"
        name=""
        id=""
        placeholder="to"
        required
        style="margin-left: 20px; margin-bottom: 20px"
      />
      <br />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

// Data
const todoList = ref([]);
const todoObject = ref({
  id: "",
  text: "",
  from: "",
  to: "",
  createdAt: "",
  isCompleted: false,
});

// Methods

//  Add Todo
const addTodo = () => {
  todoObject.value.id = todoList.value.length + 1;
  todoObject.value.createdAt = new Date();
  todoList.value.push(todoObject.value);
  addToLocalSt();
  alert("Todo was Added Successfully");
  // console.log(todoList.value);
  todoObject.value = {
    id: "",
    text: "",
    from: "",
    to: "",
    createdAt: "",
    isCompleted: false,
  };
};

// Update Todos List
const updateTodos = () => {
  if (localStorage.getItem("todos")) {
    todoList.value = JSON.parse(localStorage.getItem("todos"));
  }
};

// Hooks
onMounted(() => {
  updateTodos();
});

// Set to Local Storage
const addToLocalSt = () => {
  localStorage.setItem("todos", JSON.stringify(todoList.value));
};

// Set to Local Storage
</script>

<style scoped lang="scss">
form {
  input[type="text"] {
    width: 50%;
    padding: 10px;
    font-size: 20px;
  }

  input[type="submit"] {
    padding: 10px 20px;
    font-size: 20px;
    background: rgb(8, 100, 71);
    border: 1px solid rgb(8, 100, 71);
    border-radius: 7px;
    color: #fff;
    margin-left: 20px;
  }
}
</style>
