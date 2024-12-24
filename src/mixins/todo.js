import { ref, onMounted } from "vue";

const todosFunction = () => {
  // Data
  const todosList = ref([]);
  // Method
  // Set to Local Storage
  const addToLocalSt = () => {
    localStorage.setItem("todos", JSON.stringify(todosList.value));
  };

  const UpdateTodos = () => {
    if (localStorage.getItem("todos")) {
      todosList.value = JSON.parse(localStorage.getItem("todos"));
    }
    // console.log(todosList.value);
  };
  onMounted(() => {
    UpdateTodos();
  });

  return { todosList, addToLocalSt };
};

export default todosFunction;
