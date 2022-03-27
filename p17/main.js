// const rand = () => Math.floor(Math.random() * 20);
// function test() {
//   for (let i = 0; i < 10; i++) {
//     $('section').append(`<p>${rand()}</p>`);
//   }
// }
// function test1() {
//   $('section').on('mouseenter', 'p', function () {
//     $('p').css('color', 'red');
//   });
//   $('section').mouseleave(function () {
//     $('p').css('color', 'black');
//   });
// }

// function test2() {
//   $('select').append(`<option>${$('input').val()}</option>`);
//   $('input').val('');
// }
// $(function () {
//   $('button').click(function (e) {
//     let num1 = +$('#num1').val();
//     let num2 = +$('#num2').val();
//     $('span').append(num1 + num2);
//   });
// });
// $(function () {
//   $('button').click(function () {
//     $.ajax({
//       url: 'https://jsonplaceholder.typicode.com/todos',
//       success: (todos) => {
//         console.log(todos);
//         for (let todo of todos) {
//           const li = `<li style="color: ${todo.completed ? 'green' : 'red'}">${todo.title}</li>`;
//           $('ul').append(li);
//         }
//       },
//     });
//   });
// });
$(function () {
  $('button').click(function () {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/photos',
      success: (photos) => {
        console.log(photos);
        for (let photo of photos) {
          let tr = `<tr><td>${photo.id}</td> <td>${photo.title}</td> <td>${photo.url}</td> <td><img src="${photo.thumbnailUrl}"></td></tr>`;
          $('tbody').append(tr);
        }
      },
    });
  });
});
