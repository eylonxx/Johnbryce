let counter = 0;
if (localStorage.getItem('counter')) {
  counter = localStorage.getItem('counter');
} else {
  localStorage.setItem('counter', 0);
}
const taskText = document.querySelector('#taskText');
const taskDate = document.querySelector('#taskDate');
const taskTime = document.querySelector('#taskTime');

const saveAndSubmitData = () => {
  if (!(taskText.value === '' || taskDate.value === '' || taskTime.value === '')) {
    localStorage.setItem('counter', ++counter);
    const task = {
      taskText: taskText.value,
      taskDate: taskDate.value,
      taskTime: taskTime.value,
      taskId: counter,
    };
    localStorage.setItem(`${task.taskId}`, JSON.stringify(task));
    createNewTask(task);
  }
};

const createNewTask = (task) => {
  const taskContainer = document.querySelector('#taskContainer');
  const taskNote = document.createElement('div');
  const { taskText, taskDate, taskTime } = JSON.parse(localStorage.getItem(`${task.taskId}`));

  taskNote.setAttribute('id', `task${task.taskId}`);
  taskNote.innerHTML = `
  <div class="card note-bg">
<div class="card-body d-flex flex-column task p-0">
  <span id="delete-icon" onclick="removeTask(${task.taskId})"><i class="bi bi-x"></i></span>
  <p class="ps-2 pt-0 mb-0 task-text">${taskText}</p>
  <span class="card-text mt-auto ps-2">${taskDate}</span>
  <span class="card-text mt-0 ps-2 pb-1">${taskTime}</span>
</div>
</div>`;
  taskContainer.append(taskNote);
  taskNote.classList.add('task', 'faded-out');

  requestAnimationFrame(() => {
    taskNote.classList.remove('faded-out');
  });
};

const removeTask = (taskId) => {
  localStorage.removeItem(taskId);
  const task = document.querySelector(`#task${taskId}`);
  task.remove();
};

const loadTasks = () => {
  Object.entries(localStorage).forEach((entry) => {
    if (entry[0] !== 'counter') {
      createNewTask(JSON.parse(entry[1]));
    }
  });
};
