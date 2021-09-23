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

module.exports = {
  saveTask,
  getTaskList,
  getTask,
  deleteTask,
};
