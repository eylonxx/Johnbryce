//q#1
// $('#btn1').click(function (e) {
//   $('#p1').html($('#num1').val());
//   $('#num1').val('');
// });
// $('#btn2').click(function (e) {
//   $('#p2').html($('#num2').val());
//   $('#num2').val('');
// });

//q#2
// $('#btn3').click(function (e) {
//   const num1 = $('#num1').val();
//   const num2 = $('#num2').val();
//   for (let i = num1; i <= num2; i++) {
//     $('#select1').append(`<option value="${i}">${i}</option>`);
//   }
// });

//q#3
// const generateRandomcolor = () => {
//   return `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(
//     Math.random() * 255
//   )})`;
// };
// $('#btn1').click(function (e) {
//   $('div').each(function () {
//     console.log(generateRandomcolor());
//     $(this).css('background-color', generateRandomcolor());
//   });
// });

//q$4
// let flag1 = true;
// $('#bluebtn').click(function (e) {
//   if (flag1) {
//     $('.blue').fadeOut(2000);
//     flag1 = false;
//     $('#bluebtn').html('fade in blue');
//   } else {
//     $('.blue').fadeIn(2000);
//     flag1 = true;
//     $('#bluebtn').html('fade out blue');
//   }
// });
// let flag2 = true;
// $('#redbtn').click(function (e) {
//   if (flag2) {
//     $('.red').fadeOut(2000);
//     flag21 = false;
//     $('#redbtn').html('fade in red');
//   } else {
//     $('.red').fadeIn(2000);
//     flag2 = true;
//     $('#redbtn').html('fade out red');
//   }
// });

//q#5
// let flag1 = true;
// $('#bluebtn').click(function (e) {
//   if (flag1) {
//     $('.blue').fadeOut(2000);
//     flag1 = false;
//     $('#bluebtn').html('fade in blue');
//   } else {
//     $('.blue').fadeIn(2000);
//     flag1 = true;
//     $('#bluebtn').html('fade out blue');
//   }
// });
// let flag2 = true;
// $('#redbtn').click(function (e) {
//   if (flag2) {
//     $('.red').fadeOut(2000);
//     flag2 = false;
//     $('#redbtn').html('fade in red');
//   } else {
//     $('.red').fadeIn(2000);
//     flag2 = true;
//     $('#redbtn').html('fade out red');
//   }
// });

// $('div').each(function () {
//   $(this).click(function (e) {
//     alert($(this).html());
//   });
//   $(this).hover(
//     function () {
//       $(this).css('font-weight', '700');
//     },
//     function () {
//       $(this).css('font-weight', '400');
//     }
//   );
// });
