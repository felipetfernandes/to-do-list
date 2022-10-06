const input = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const button = document.getElementById('criar-tarefa');

function newTask() {
  if (input.value !== '') {
    const task = document.createElement('li');
    task.innerText = input.value;
    todoList.appendChild(task);
    input.value = '';
  }
}

function selectTask() {
  const task = window.event.target;
  const selected = document.getElementsByClassName('selected')[0];
  if (selected != null) {
    selected.removeAttribute('class');
  }
  task.className = 'selected';
}

button.addEventListener('click', newTask);
todoList.addEventListener('click', selectTask);
