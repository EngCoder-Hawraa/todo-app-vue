<template>
  <div class="show-todos">
    <h1>Show Todos</h1>
    <table style="width: 100%" v-if="todosList.length">
      <thead>
        <tr>
          <th>Text</th>
          <th>From</th>
          <th>To</th>
          <th>Created At</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(todo, index) in todosList"
          :key="todo.id"
          :style="`${
            todo.isCompleted
              ? 'background: #b8ecd0'
              : ' background: transparent'
          }`"
        >
          <td>{{ todo.text }}</td>
          <td>{{ todo.from }}</td>
          <td>{{ todo.to }}</td>
          <td>{{ new Date(todo.createdAt).toLocaleDateString() }}</td>
          <td>
            <div>
              <button class="completed" @click="markCompleted(todo)">
                {{ todo.isCompleted ? "InCompleted" : "Completed" }}
              </button>
              <button class="delete" @click="deleteTodo(index)">Delete</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 v-els style="line-height: 15">No Todos To Show</h2>
  </div>
</template>

<script setup>
import todosMixins from "@/mixins/todo";

const { todosList, addToLocalSt } = todosMixins();

// Delete Todo
const deleteTodo = (index) => {
  todosList.value.splice(index, 1);
  addToLocalSt();
};

// Mark as completed
const markCompleted = (todo) => {
  todo.isCompleted = !todo.isCompleted;
  addToLocalSt();
};
</script>

<style scoped lang="scss">
table {
  tr,
  td,
  th {
    border: 1px solid;
    padding: 5px;
  }
  td {
    button {
      background: rgb(16, 110, 85);
      color: #fff;
      font-size: 17px;
      padding: 5px 10px;
      border: 1px solid rgb(16, 110, 85);
      border-radius: 7px;
      &.delete {
        background: indianred;
        border: 1px solid indianred;
        margin-left: 10px;
      }
    }
  }
}
</style>
