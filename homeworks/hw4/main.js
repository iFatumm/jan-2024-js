// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function areaRectangle (a, b) {
//     let res = a * b;
//     console.log(res)
// }
// areaRectangle(7, 3)

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaOfCircle (r) {
//     let PI = 3.14;
//     let res = (r * r) * PI;
//     console.log(res);
// }
// areaOfCircle(4)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaOfCylindre (r, h) {
//         let PI = 3.14;
//         let s = 2 * PI * r * h;
//         return s;
// }
// let res = areaOfCylindre(5, 7);
// console.log(res);

// - створити функцію яка приймає масив та виводить кожен його елемент

// function arrayPrint (array) {
//     for (let argument of arguments) {
//         console.log(argument)
//     }
// }
// arrayPrint(1, 2, 3, 4, 5);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function printer (text) {
//     document.write(`<p>${text}</p>`)
// }
// printer('dfhbdsgfbdjklfjsdklf djkfhsdlfhsdjklfjsdjkhdfas ejfhsdjkhfdkshfsjkldhfjlasj ejfhskhfkshflasdhfasdfhsudhfjksdh efghsdjfgfusdhfuisdhvbrfvbheruihfu eruhfiodgfsidhfuserhsfo')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function listCreator (text) {
//     document.write(`<ul>`);
//     for (let i=0; i < 3; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`);
// }
// listCreator('asdqwe')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function listCreator (text, number) {
//     document.write(`<ul>`);
//     for (let i= 0; i < number; i++) {
//         document.write(`<li>${text}</li>`)
//
//     }
//     document.write(`</ul>`);
// }
// listCreator('qweasd', 3)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// function listCreator (array) {
//     document.write(`<ul>`)
//     for (let element of array) {
//         document.write(`<li>${element}</li>`)
//         console.log(element)
//     }
//     document.write(`</ul>`)
// }
// listCreator(['asd', 'qwe', 25, 34, true]);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// function objectBlock (objects) {
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
// function minimal (numbers) {
//     let minValue = numbers[0];
//     for (const number of numbers) {
//         if (minValue > number) {
//             minValue = number;
//         }
//     }
//     return minValue
// }
// let res = minimal([44, 31, 78, 66, 101]);
// console.log(res)

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// function sum (arr) {
//     let basket = 0;
//     for (const item of arr) {
//         basket += item
//     }
//     return basket
// }
// let res = sum([1, 2, 10]);
// console.log(res)

// - створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// function swap (arr, index1, index2) {
//     let a = arr[index1];
//     let b = arr[index2];
//     arr[index1] = b;
//     arr[index2] = a;
//     return arr
// }
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
// function exchange (sumUAH, currencyValues, exchangeCurrency) {
//     for (let money of currencyValues) {
//         if (money.currency === exchangeCurrency) {
//             return sumUAH/money.value;
//         }
//     }
// }
//
// console.log(exchange(
//     10000,
//     [
//         {currency: 'USD', value: 40},
//         {currency: 'EUR', value: '42'}
//     ],
//     'USD'));