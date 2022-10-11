const input = document.getElementById('texto-tarefa');
const todoList = document.getElementById('lista-tarefas');
const buttonNewTask = document.getElementById('criar-tarefa');
const buttonClearList = document.getElementById('apaga-tudo');
const buttonClearDones = document.getElementById('remover-finalizados');
const buttonSaveList = document.getElementById('salvar-tarefas');
const buttonUp = document.getElementById('mover-cima');
const buttonLow = document.getElementById('mover-baixo');
const buttonRemove = document.getElementById('remover-selecionado');
const listItem = 'list-group-item';

function saveList() {
  localStorage.setItem('savedList', todoList.innerHTML);
}

function loadList() {
  if (localStorage.getItem('savedList')) {
    todoList.innerHTML = localStorage.getItem('savedList');
  }
}

function newTask() {
  if (input.value !== '') {
    const task = document.createElement('li');
    task.innerText = input.value;
    task.classList.add(listItem);
    todoList.appendChild(task);
    input.value = '';
  }
  saveList();
}

function selectTask() {
  const task = window.event.target;
  if (task.className.includes(listItem)) {
    const selected = document.getElementsByClassName('selected')[0];
    /*  if (task.className.includes('selected')) {
    task.classList.remove('selected');
  } else { */
    if (selected != null) {
      selected.classList.remove('selected');
    }
    task.classList.add('selected');
    saveList();
  }
}
/* } */

function completedTask() {
  const task = window.event.target;
  if (task.className.includes(listItem)) {
    if (task.className.includes('completed')) {
      task.classList.remove('completed');
    } else {
      task.classList.add('completed');
    }
    saveList();
  }
}

function clearList() {
  while (todoList.firstChild) {
    todoList.removeChild(todoList.firstChild);
  }
  saveList();
}

function clearDones() {
  const completed = document.getElementsByClassName('completed');
  for (let index = completed.length - 1; index >= 0; index -= 1) {
    todoList.removeChild(completed[index]);
  }
  saveList();
}

function taskUp() {
  const selected = document.getElementsByClassName('selected')[0];
  if (selected && selected.previousElementSibling !== null) {
    const selectedHTML = selected.outerHTML;
    const previousElementHTML = selected.previousElementSibling.outerHTML;
    selected.previousElementSibling.outerHTML = selectedHTML;
    selected.outerHTML = previousElementHTML;
    saveList();
  }
}

function taskLow() {
  const selected = document.getElementsByClassName('selected')[0];
  if (selected && selected.nextElementSibling !== null) {
    const selectedHTML = selected.outerHTML;
    const nextElementHTML = selected.nextElementSibling.outerHTML;
    selected.nextElementSibling.outerHTML = selectedHTML;
    selected.outerHTML = nextElementHTML;
    saveList();
  }
}

function removeSelected() {
  const selected = document.getElementsByClassName('selected')[0];
  if (selected) {
    selected.outerHTML = '';
    saveList();
  }
}

loadList();

buttonNewTask.addEventListener('click', newTask);
buttonClearList.addEventListener('click', clearList);
buttonClearDones.addEventListener('click', clearDones);
buttonSaveList.addEventListener('click', saveList);
buttonUp.addEventListener('click', taskUp);
buttonLow.addEventListener('click', taskLow);
buttonRemove.addEventListener('click', removeSelected);
todoList.addEventListener('click', selectTask);
todoList.addEventListener('dblclick', completedTask);
