import AsyncStorage from '@react-native-async-storage/async-storage';

async function saveTask(taskItem, id) {
  taskItem.id = id ? id : new Date().getTime();
  const savedTasks = await getTaskList();

  if (id) {
    const index = await savedTasks.findIndex((item) => item.id === id);
    savedTasks[index] = taskItem;
  } else savedTasks.push(taskItem);

  return AsyncStorage.setItem('tasks', JSON.stringify(savedTasks));
}

function getTaskList() {
  return AsyncStorage.getItem('tasks').then((response) => {
    if (response) return Promise.resolve(JSON.parse(response));
    else return Promise.resolve([]);
  });
}

async function getTask(id) {
  const savedItems = await getTaskList();
  return savedItems.find((item) => item.id === id);
}

async function deleteTask(id) {
  let savedItems = await getTaskList();
  const index = await savedItems.findIndex((item) => item.id === id);
  savedItems.splice(index, 1);
  return AsyncStorage.setItem('tasks', JSON.stringify(savedItems));
}

function getStepList() {
  return AsyncStorage.getItem('steps').then((response) => {
    if (response) return Promise.resolve(JSON.parse(response));
    else return Promise.resolve([]);
  });
}

async function addStep(step) {
  //ToDo: transferir esta função para um arquivo Util
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  if (hours < 10) {
    hours = '0' + hours.toString();
  }
  if (minutes < 10) {
    minutes = '0' + minutes.toString();
  }
  if (seconds < 10) {
    seconds = '0' + seconds.toString();
  }

  step.time = hours + ':' + minutes + ':' + seconds;

  const savedSteps = await getStepList();
  savedSteps.push(step);

  return AsyncStorage.setItem('steps', JSON.stringify(savedSteps));
}

async function resetSteps() {
  return AsyncStorage.setItem('steps', JSON.stringify([]));
}

module.exports = {
  saveTask,
  getTaskList,
  getTask,
  deleteTask,
  getStepList,
  resetSteps,
  addStep,
};
