// hw
// q#3
// const getUser = async () => {
//   const id = document.getElementById('myInput').value;
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//   const parsedRes = await res.json();
//   console.log(parsedRes);
//   myp.innerHTML = `Name: ${parsedRes.name}.
//   ID: ${parsedRes.id}.
//   E-mail: ${parsedRes.email}.
//   Phone: ${parsedRes.phone}.
//   City: ${parsedRes.address.city}.
//   Street: ${parsedRes.address.street}.
//   Zip: ${parsedRes.address.zipcode}.
//   Company: ${parsedRes.company.name}
//   `;
// };

//q#4
// const getUser = async () => {
//   const userRaw = await fetch('https://jsonplaceholder.typicode.com/users');
//   const userParsed = await userRaw.json();
//   console.log(userParsed);
//   for (let i = 0; i < userParsed.length; i++) {
//     users.innerHTML += `
//     <option value="${userParsed[i].id}">${userParsed[i].name}</option>`;
//   }
// };

// users.addEventListener('change', async () => {
//   const selectedUser = await fetch(`https://jsonplaceholder.typicode.com/users/${users.value}`);
//   const selectedUserParsed = await selectedUser.json();
//   myp.innerHTML = `Name: ${selectedUserParsed.name}.
//     ID: ${selectedUserParsed.id}.
//     E-mail: ${selectedUserParsed.email}.
//     Phone: ${selectedUserParsed.phone}.
//     City: ${selectedUserParsed.address.city}.
//     Street: ${selectedUserParsed.address.street}.
//     Zip: ${selectedUserParsed.address.zipcode}.
//     Company: ${selectedUserParsed.company.name}
//     `;
// });
// getUser();

//q#5
// const getImages = async () => {
//   const rawImages = await fetch('https://jsonplaceholder.typicode.com/photos');
//   const parsedImages = await rawImages.json();
//   console.log(parsedImages);
//   for (let i = 0; i < 100; i++) {
//     mydiv.innerHTML += `
//     <p>Album ID: ${parsedImages[i].albumId}.
//     ID: ${parsedImages[i].id}.
//     title: ${parsedImages[i].title}.
//     </p>
//     <img src="${parsedImages[i].thumbnailUrl}">
//     `;
//   }
// };

//q#6
// const getUser = async () => {
//   const rawUser = await fetch('https://reqres.in/api/users');
//   const parsedUser = await rawUser.json();
//   console.log(parsedUser);
//   parsedUser.data.forEach((user) => {
//     myp.innerHTML += `
//     <img src="${user.avatar}">
//       Name: ${user.first_name} ${user.last_name}.
//       E-mail: ${user.email}.
//       <br>
//     `;
//   });
// };

//q#7

// const getWeather = async () => {
//   let chosenCity = users.value;
//   const rawData = await fetch(
//     `http://api.weatherstack.com/current?access_key=384a17fc3bc6ea2d3ade650114164c0f&query=${chosenCity}`
//   );
//   const parsedData = await rawData.json();
//   myp.innerHTML = `${parsedData.current.temperature} <img src="${parsedData.current.weather_icons[0]}">`;
//   console.log(parsedData);
// };
