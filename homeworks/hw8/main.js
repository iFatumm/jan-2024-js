// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let u1 = new User(5, 'kokos', 'banan', 'kokoban@ukr.net', 545564654);
// console.log(u1);
// let users = [
//     new User(5, 'kokos', 'banan', 'kokoban@ukr.net', 54644654),
//     new User(7, 'pokos', 'grass', 'newholland@ukr.net', 54568754),
//     new User(2, 'ponos', 'bayan', 'apteca@ukr.net', 98564654),
//     new User(4, 'panas', 'taras', '4uvak@ukr.net', 545564987),
//     new User(1, 'kvas', 'beer', 'alko@ukr.net', 5419087654),
//     new User(10, 'matras', 'veneto', 'dreem@ukr.net', 541296865254),
//     new User(8, 'apple', 'yabluko', 'jobs@ukr.net', 54000),
//     new User(3, 'pepsi', 'cola', 'pepco@ukr.net', 545565854654),
//     new User(9, 'vovk', 'bratyk', 'vovk@ukr.net', 54545954),
//     new User(6, 'kaban', 'iklan', 'kaban@ukr.net', 597524654),
// ];
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// console.log(users.filter((user) => !(user.id % 2)));
//
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(users.sort((a, b) => a.id - b.id));
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
// let clients =[
//     new Client(5, 'kokos', 'banan', 'kokoban@ukr.net', 54644654, ['car']),
//     new Client(7, 'pokos', 'grass', 'newholland@ukr.net', 54568754, ['car', 'wheels']),
//     new Client(2, 'ponos', 'bayan', 'apteca@ukr.net', 98564654,['car', 'wheels', 'glass', 'discs', 'mirror']),
//     new Client(4, 'panas', 'taras', '4uvak@ukr.net', 545564987,['car', 'wheels', 'mirror']),
//     new Client(1, 'kvas', 'beer', 'alko@ukr.net', 5419087654, ['car', 'wheels']),
//     new Client(10, 'matras', 'veneto', 'dreem@ukr.net', 541296865254, ['car', 'wheels']),
//     new Client(8, 'apple', 'yabluko', 'jobs@ukr.net', 54000, ['car', 'wheels', 'glass', 'discs']),
//     new Client(3, 'pepsi', 'cola', 'pepco@ukr.net', 545565854654, ['car', 'wheels', 'dics']),
//     new Client(9, 'vovk', 'bratyk', 'vovk@ukr.net', 54545954, ['fruits', 'water', 'bread', 'juice']),
//     new Client(6, 'kaban', 'iklan', 'kaban@ukr.net', 597524654, ['fruits', 'water', 'juice']),
// ]
// console.log(clients)
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(clients.sort((client1, client2) => client1.order.length - client2.order.length));
//
//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car (model, manufacturer, year, maxspeed, enginevolume) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxspeed = maxspeed;
//     this.enginevolume = enginevolume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
//     };
//     this.info = function () {
//         console.log(`model - ${model}, manufacturer - ${manufacturer}, year - ${this.year}, maxspeed - ${this.maxspeed}, enginevolume - ${enginevolume}`)
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed += newSpeed;
//         console.log(`new max speed ${this.maxspeed} now`)
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue
//         console.log(`the year of the car release has changed ${this.year}`)
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//         console.log(`info of driver: name - ${driver.name}, he is ${driver.age} years old, he has ${driver.experience} years experience`)
//     }
// }
// let car = new Car('k5', 'kia', 2016, 260, 1.7 );
// console.log(car)
// car.drive();
// car.info();
// car.increaseMaxSpeed(20);
// car.changeYear(2020);
// car.addDriver({name: 'kolya', age: 37, experience: 12});
// console.log(car)
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, manufacturer, year, maxspeed, enginevolume) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxspeed = maxspeed;
//         this.enginevolume = enginevolume;
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${maxspeed} на годину`)
//         };
//         this.info = function () {
//             console.log(`model - ${model}, manufacturer - ${manufacturer}, year - ${year}, maxspeed - ${maxspeed}, enginevolume -               ${enginevolume}`)
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             console.log(`maxspeed ${newSpeed} now`)
//         };
//         this.changeYear = function (newValue) {
//             console.log(`the year of the car release has changed ${newValue}`)
//         };
//         this.addDriver = function (driver) {
//             console.log(`info of driver: name - ${driver.name}, he is ${driver.age} years old, he has ${driver.experience} years experience`)
//         }
//     }
// }
// let car = new Car('k5', 'kia', 2016, 260, 1.7 );
// console.log(car.drive(), car.info(), car.increaseMaxSpeed(280), car.changeYear(2014), car.addDriver({name: 'kolya', age: 37, experience: 12}))
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
// }
// class Cinderellas extends Person {
//     constructor(name, age, footsize) {
//         super(name, age);
//         this.footsize = footsize;
//     }
// }
// let cinderellas =  [
//     new Cinderellas('sveta', 17, 37),
//     new Cinderellas('masha', 17, 40),
//     new Cinderellas('olya', 18, 37),
//     new Cinderellas('yulya', 22, 35),
//     new Cinderellas('natasha', 25, 36),
//     new Cinderellas('ira', 18, 37),
//     new Cinderellas('inna', 19, 38),
//     new Cinderellas('ursula', 20, 39),
//     new Cinderellas('zoya', 21, 36),
//     new Cinderellas('zina', 68, 34),
//     new Cinderellas('lena', 27, 35),
// ]
//
// class Prince extends Person{
//     constructor(name, age, shoesfind) {
//         super(name, age);
//         this.shoesfind = shoesfind;
//     }
// }
// let prince = new Prince ('richard', 22, 34);
//
// //     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// cinderellas.map((cinderella)=>{
//     if (cinderella.footsize === prince.shoesfind) {
//         console.log(cinderella)
//     }
// });
//
// // Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// console.log(cinderellas.find((cinderella) => cinderella.footsize === 34));