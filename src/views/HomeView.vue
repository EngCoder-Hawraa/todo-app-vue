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
import { ref } from "vue";

// Data
const todoList = ref([]);
const todoObject = ref({
  text: "",
  from: "",
  to: "",
  createdAt: "",
});

// Methods
const addTodo = () => {
  todoObject.value.createdAt = new Date();
  todoList.value.push(todoObject.value);
  // console.log(todoList.value);
  todoObject.value = {
    text: "",
    from: "",
    to: "",
    createdAt: "",
  };
};
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
