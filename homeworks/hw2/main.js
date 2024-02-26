// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let newArr = [1, 555, -87, true, 'name', "hello", 'owu', false, {name: 'john'}, [1, 2]];
// console.log(newArr)
// console.log(newArr[0])
// console.log(newArr[1])
// console.log(newArr[2])
// console.log(newArr[3])
// console.log(newArr[4])
// console.log(newArr[5])
// console.log(newArr[6])
// console.log(newArr[7])
// console.log(newArr[8])
// console.log(newArr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1={
//     title: 'Kolobok',
//     pageCount: 8,
//     genre: 'tale'
// };
// let book2 = {
//     title: 'Harry Potter',
//     pageCount: 856,
//     genre: 'fantasy'
// };
// let book3 = {
//     title: 'Atlantic ocean',
//     pageCount: 132,
//     genre: 'documentary'
// };
// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
// let book1={
//     title: 'Kolobok',
//     pageCount: 8,
//     genre: 'tale',
//     authors: ['folclore', 1150]
// };
// console.log(book1)
// let book2 = {
//     title: 'Harry Potter',
//     pageCount: 856,
//     genre: 'fantasy',
//     authors: ['Mr. Been', 75]
// };
// console.log(book2)
// let book3 = {
//     title: 'Atlantic ocean',
//     pageCount: 132,
//     genre: 'documentary',
//     authors: ['Jak Iv Custo', 28]
// };
// console.log(book3.authors)
// console.log(book3.authors[0])

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
// let usersArr = [
//     {name: 'vasya', username: 'kokos', password: 12},
//     {name: 'tolya', username: 'ananas', password: 123},
//     {name: 'ana', username: 'slyva', password: 1234},
//     {name: 'ira', username: 'apple', password: 12345},
//     {name: 'kolya', username: 'chery', password: 123456},
//     {name: 'denys', username: 'abrikos', password: 1234567},
//     {name: 'olya', username: 'candy', password: 12345678},
//     {name: 'andriy', username: 'chocolate', password: 123456789},
//     {name: 'tanya', username: 'sugar', password: 1234567890},
//     {name: 'natasha', username: 'solt', password: 12345678900},
// ];
// console.log(usersArr[0].password)
// console.log(usersArr[1].password)
// console.log(usersArr[2].password)
// console.log(usersArr[3].password)
// console.log(usersArr[4].password)
// console.log(usersArr[5].password)
// console.log(usersArr[6].password)
// console.log(usersArr[7].password)
// console.log(usersArr[8].password)
// console.log(usersArr[9].password)
//
// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
// let x = 0;
// if (x != 0) {
//     console.log('true')
// } else {
//     console.log('false')
// }
// Перевірте  скрипт при a, що дорівнює 1, 0, -3 // тут не зрозумів, що маю робити(((

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 50;
// if (time >= 0 && time <= 15) {
//     console.log('в першу')
// } else if (time >= 16 && time <= 30) {
//     console.log('в другу')
// } else if (time >= 31 && time <= 45) {
//     console.log('в третю')
// }else if (time >= 46 && time <= 59) {
//     console.log('в четверту')
// }

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = 21;
// if (day >=1 && day <=10) {
//     console.log('перша декада')
// }else if (day >=11 && day <=20) {
//     console.log('друга декада')
// }else if (day >=21 && day <=31) {
//     console.log('третя декада')
// }
// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = 10;
// switch (day) {
//     case 1:
//         console.log('понеділок');
//         break;
//     case 2:
//         console.log('віторок');
//         break;
//     case 3:
//         console.log('середа');
//         break;
//     case 4:
//         console.log('четвер');
//         break;
//     case 5:
//         console.log("п'ятниця");
//         break;
//     case 6:
//         console.log('субота');
//         break;
//     case 7:
//         console.log('неділя');
//         break;
//     default:
//         console.log('не знаю, який це день')
// }

//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a = 3;
// let b = 3;
// if (a > b) {
//     console.log(a, 'більше')
// } else if (a < b) {
//     console.log(b, 'більше')
// } else if (a == b) {
//     console.log('числа рівні')
// }
//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let x = 'undefined';
// let res = x || 'ghjkklj';
// console.log(res)
//
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// if (coursesAndDurationArray[5].monthDuration > 5){ // підставити [індекси від 0-5] кожного елементу в масиві
//     console.log('Super')
// } else {
//     console.log('Продовжуйтке навчання!')
// }