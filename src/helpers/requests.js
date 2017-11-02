
const axios = require('axios');
// function getAllTasks(){
//   let allTasksReq = new XMLHttpRequest();
//   allTasksReq.addEventListener('load', parseTasks);
//   allTasksReq.open('GET', 'https://')

// }

// function getTasks(url){
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => resolve(JSON.parse(xhr.responseText))
//   })

  // .then((data) => {
  //   console.log(data);
  //   return data;
  // });

// }

// export const getTasks = () => new Promise((resolve, reject) => {
//   const xhr = new XMLHttpRequest();
//   xhr.open('GET', '/api/tasks');
//   xhr.onload = () => resolve(JSON.parse(xhr.responseText));
// });

export const getTasks = () => new Promise((resolve, reject) => {
  axios.get('/api/tasks').then((response) => {
    return response;
  });
});