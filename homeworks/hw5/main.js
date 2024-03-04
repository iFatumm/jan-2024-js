// ВСЕ ЗРОБИТИ СТРІЛОЧНИМИ ФУНКЦІЯМИ!
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let areaRectangle = (a, b) =>  a * b;
// console.log(areaRectangle(8, 4));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let areaOfCircle = r => 3.14 * (r * r);
// console.log(areaOfCircle(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let areaOfCilindre = (r, h) => 2 * 3.14 * r * h;
// console.log(areaOfCilindre(4, 8));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arrayPrint = (array) => {
//     for (let item of array) {
//         console.log(item);
//     }
// }
// arrayPrint(['kolya', 'olya', 'yulya', 'sveta']);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let printer = (text) => {
//     document.write(`<p>${text}</p>`);
// }
// printer('dhfhsdkjfhdfjedhf fgdhfdsgfdkshfudshf egfdfshfksdhfdjshfdu eugfdehfedhfdjhfjdfh');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let listCreator = (text) => {
//     document.write(`<ul>`);
//     for (let i=0; i < 3; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listCreator('fdghhfhsdjfhdjkhfsk');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let listCreator = (text, number) => {
//     document.write(`<ul>`);
//     for (let i=0; i < number; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`);
// }
// listCreator('fhdhfd', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let listCreator = (array) => {
//     document.write(`<ul>`)
//     for (let element of array) {
//         document.write(`<li>${element}</li>`)
//         console.log(element)
//     }
//     document.write(`</ul>`)
// }
// listCreator(['asd', 'qwe', 25, 34, true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let objectBlock = (objects) => {
//     for (const item of objects) {
//         document.write(`<div>${item.id}. ${item.name}, age - ${item.age}</div>`)
//     }
// }
// objectBlock([
//     {id: 2, name: 'vasya', age: 22},
//     {id: 17, name: 'olya', age: 18},
//     {id: 6, name: 'oleg', age: 25},
// ])

// - створити функцію яка повертає найменьше число з масиву
// let minimal = (numbers) => {
//     let minNumber = numbers[0];
//     for (const digit of numbers) {
//         if (minNumber > digit) {
//             minNumber = digit
//         }
//     }
//     return minNumber
// }
// console.log(minimal([89, 56, 1958, 18, 8]));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// let sum = (arr) => {
//     let calculator = 0;
//     for (const num of arr) {
//         calculator += num
//     }
//     return calculator
// }
// console.log(sum([1, 2, 10]));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// let swap = (arr, index1, index2) => {
//     let x = arr[index1];
//     let y = arr[index2];
//     arr[index1] = y;
//     arr[index2] = x;
//     return arr
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
//     for (let money of currencyValues) {
//         if (money.currency === exchangeCurrency) {
//             return sumUAH/money.value;
//         }
//     }
// }
// console.log(exchange(10000,[{currency: 'USD', value: 40}, {currency: 'EUR', value: '42'}],'EUR'));