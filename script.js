const input = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

function newTask() {
  const task = document.createElement('li');
  console.log(input.value);
  task.innerText = input.value;
  todoList.appendChild(task);
  input.value = '';
}

button.addEventListener('click', newTask);
