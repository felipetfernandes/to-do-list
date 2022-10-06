const input = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const buttonNewTask = document.getElementById('criar-tarefa');
const buttonClearList = document.getElementById('apaga-tudo');
const buttonClearDones = document.getElementById('remover-finalizados');

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
  if (task.className !== 'completed') {
    task.className = 'selected';
  }
}

function completedTask() {
  const task = window.event.target;
  console.log(task);
  if (task.className === 'completed') {
    task.removeAttribute('class');
  } else {
    task.className = 'completed';
  }
}

function clearList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
}

function clearDones() {
  const completed = document.getElementsByClassName('completed');
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    todoList.removeChild(completed[index]);
  }
}

buttonNewTask.addEventListener('click', newTask);
buttonClearList.addEventListener('click', clearList);
buttonClearDones.addEventListener('click', clearDones);
todoList.addEventListener('click', selectTask);
todoList.addEventListener('dblclick', completedTask);
