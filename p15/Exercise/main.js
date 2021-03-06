// const test = async () => {
//   try {
//     const res = await generateRandomFruitAfterDelay();
//     myp.innerHTML = `${res}`;
//   } catch {
//     alert('err');
//   }
// };

// const generateRandomFruitAfterDelay = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arr = ['Apple', 'Grapes', 'Orange', 'Banana', 'Eggs', 'Coffee', 'Onion', 'Chocolate'];
//       const chosenFruit = Math.floor(Math.random() * arr.length);
//       if (chosenFruit >= 0 && chosenFruit <= 3) {
//         resolve(arr[chosenFruit]);
//       } else reject(arr[chosenFruit]);
//     }, 3000);
//   });
// };

// const test = async () => {
//   try {
//     const res = await getRandomStrongPasswordAfterDelay();
//     console.log(res);
//     if (res) {
//       try {
//         const res2 = await getRandomStrongPasswordAfterDelay();
//         console.log(res2);
//       } catch {
//         alert('xd');
//       }
//     }
//   } catch {
//     alert('xd');
//   }
// };

// const getRandomStrongPasswordAfterDelay = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const password = '' + Math.floor(Math.random() * 100000000);
//       if (password.length >= 6) {
//         resolve(password);
//       } else {
//         reject(password);
//       }
//     }, 1000);
//   });
// };

//// fetch

const toDos = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const parsedRes = await res.json();

  parsedRes.forEach((el) => {
    myul.innerHTML += `<li>${el.title}</li>`;
  });
};

const comment = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/comments');
  const parsedRes = await res.json();
  myRow.innerHTML = '';
  for (let content of parsedRes) {
    myRow.innerHTML += `<tr><td>${content.name}</td> <td>${content.email}</td> <td>${content.body}</td></tr>`;
  }
};
