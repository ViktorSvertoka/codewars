// Оголошуємо об'єкт refs для посилань на елементи форми та списку завдань
const refs = {
  form: document.querySelector('.js-form'),
  list: document.querySelector('.js-list'),
  allBtn: document.querySelector('.btn-1'),
  inProgressBtn: document.querySelector('.btn-2'),
  doneBtn: document.querySelector('.btn-3'),
  lowBtn: document.querySelector('.btn-4'),
  mediumBtn: document.querySelector('.btn-5'),
  hightBtn: document.querySelector('.btn-6'),
};

// Функція для фільтрації і відображення завдань відповідно до вибору користувача
function filterAndDisplayTasks(filter) {
  const tasks = getTasksFromLocalStorage();
  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') {
      return true;
    } else if (filter === 'In progress') {
      return !task.done;
    } else if (filter === 'Done') {
      return task.done;
    } else {
      return task.priority === filter;
    }
  });

  refs.list.innerHTML = ''; // Очищаємо список завдань

  filteredTasks.forEach(taskObj => {
    const taskMarkup = createMarkup(taskObj);
    refs.list.insertAdjacentHTML('beforeend', taskMarkup);
  });
}

// Обробники подій для кнопок фільтрації
refs.allBtn.addEventListener('click', () => {
  filterAndDisplayTasks('All');
});

refs.inProgressBtn.addEventListener('click', () => {
  filterAndDisplayTasks('In progress');
});

refs.doneBtn.addEventListener('click', () => {
  filterAndDisplayTasks('Done');
});

refs.lowBtn.addEventListener('click', () => {
  filterAndDisplayTasks('Low');
});

refs.mediumBtn.addEventListener('click', () => {
  filterAndDisplayTasks('Medium');
});

refs.hightBtn.addEventListener('click', () => {
  filterAndDisplayTasks('Hight');
});

// Початкове відображення завдань при завантаженні сторінки
filterAndDisplayTasks('All');

// Функція для отримання завдань з локального сховища
function getTasksFromLocalStorage() {
  return JSON.parse(localStorage.getItem('tasks')) || [];
}

// Функція для збереження завдань в локальному сховищі
function setTasksInLocalStorage(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Функція для позначення завдання як виконаного
function markTaskAsDone(taskId) {
  const tasks = getTasksFromLocalStorage();
  const taskIndex = tasks.findIndex(task => task.id == taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].done = true;
    setTasksInLocalStorage(tasks);
  }
}

// Функція для видалення завдання з локального сховища
function removeTaskFromLocalStorage(taskId) {
  const tasks = getTasksFromLocalStorage();
  const updatedTasks = tasks.filter(task => task.id !== parseInt(taskId));
  setTasksInLocalStorage(updatedTasks);
}

// Функція для оновлення стану відображення завдання
function updateTaskUIState(listItem, isDone) {
  const articleElement = listItem.querySelector('.description');
  const spanElement = listItem.querySelector('.priority');
  const btnElement = listItem.querySelector('.done-btn');
  articleElement.classList.toggle('through-text', isDone);
  spanElement.classList.toggle('through-text', isDone);
  btnElement.classList.toggle('is-hidden', isDone);
  if (isDone) {
    listItem.classList.add('bg-green');
  } else {
    listItem.classList.remove('bg-green');
  }
}

// Функція для створення розмітки HTML завдання
function createMarkup(taskObj) {
  const { id, description, priority, done } = taskObj;
  return `
    <li class="item ${done ? 'bg-green' : ''}" data-task-id="${id}">
    <div class="wrap1">
      <article class="description ${
        done ? 'through-text' : ''
      }">${description}</article>
      <span class="priority ${done ? 'through-text' : ''}">${priority}</span>
    </div>
    <div class="wrap2">
      <button class="done-btn ${
        done ? 'is-hidden' : ''
      }" type="button">Mark Done</button>
      <button class="remove-btn" type="button">Remove</button>
    </div>
    </li>`;
}

// Функція для збереження завдання в локальному сховищі та оновлення відображення
function saveTaskToLocalStorage(taskObj) {
  const tasks = getTasksFromLocalStorage();
  tasks.push(taskObj);
  setTasksInLocalStorage(tasks);
}

// Обробник події відправки форми
function handleFormSubmit(event) {
  event.preventDefault();

  const { description, priority } = event.target.elements;

  // Створюємо об'єкт завдання на основі даних з форми
  const taskObj = {
    id: Date.now(),
    description: description.value,
    priority: priority.value,
    done: false,
  };

  // Створюємо розмітку завдання та додаємо її до списку
  const taskMarkup = createMarkup(taskObj);
  refs.list.insertAdjacentHTML('beforeend', taskMarkup);

  // Перевіряємо і встановлюємо клас "bg-green", якщо задача вже виконана
  if (taskObj.done) {
    const listItem = refs.list.lastChild;
    listItem.classList.add('bg-green');
  }

  // Скидаємо форму та зберігаємо завдання в локальному сховищі
  event.target.reset();

  saveTaskToLocalStorage(taskObj);
}

// Обробник події кліку на елементах списку завдань
function handleListClick(event) {
  const listItem = event.target.closest('li');
  if (!listItem) return;

  const taskId = listItem.dataset.taskId;

  if (event.target.classList.contains('done-btn')) {
    markTaskAsDone(taskId);
    updateTaskUIState(listItem, true);
  }

  if (event.target.classList.contains('remove-btn')) {
    removeTaskFromLocalStorage(taskId);
    listItem.remove();
  }
}

// Функція для відновлення завдань з локального сховища при завантаженні сторінки
function restoreTasksFromLocalStorage() {
  const tasks = getTasksFromLocalStorage();
  tasks.forEach(taskObj => {
    const taskMarkup = createMarkup(taskObj);
    refs.list.insertAdjacentHTML('beforeend', taskMarkup);

    // Перевіряємо і встановлюємо клас "bg-green", якщо задача вже виконана
    if (taskObj.done) {
      const listItem = refs.list.lastChild;
      listItem.classList.add('bg-green');
    }
  });
}

// Додаємо обробник події відправки форми
refs.form.addEventListener('submit', handleFormSubmit);

// Додаємо обробник події кліку на елементах списку завдань
refs.list.addEventListener('click', handleListClick);

// Відновлюємо завдання з локального сховища при завантаженні сторінки
restoreTasksFromLocalStorage();
