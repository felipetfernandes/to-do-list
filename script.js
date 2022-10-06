const input = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const buttonNew = document.getElementById('criar-tarefa');
const buttonClear = document.getElementById('apaga-tudo');

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

buttonNew.addEventListener('click', newTask);
buttonClear.addEventListener('click', clearList);
todoList.addEventListener('click', selectTask);
todoList.addEventListener('dblclick', completedTask);
