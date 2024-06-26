// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
// Відобразити всі поля кожної корзини.
//
// const URL='https://dummyjson.com/carts';
// function getUrl(url) {
//     fetch(url).then(res => res.json())
//         .then(data => {
//             displayCarts(data.carts)
//         });
// }
// getUrl(URL);
// function displayCarts(carts) {
//     let productsCarts=document.createElement('div');
//     for (const cart of carts) {
//         for (const product of cart.products) {
//             let divCart=document.createElement('div');
//             let image=document.createElement('img');
//             image.src=`${product.thumbnail}`;
//             image.classList.add('image');
//             let title=document.createElement('p');
//             title.innerHTML=product.title;
//             let price=document.createElement('p');
//             price.innerHTML='price - ' + product.price;
//             let total=document.createElement('p');
//             total.innerHTML='total - ' + product.total;
//             let discountPercentage=document.createElement('p');
//             discountPercentage.innerHTML='discountPercentage - ' + product.discountPercentage;
//             let discountedPrice=document.createElement('p');
//             discountedPrice.innerHTML='discountedPrice - ' + product.discountedPrice;
//             let id=document.createElement('p');
//             id.innerText='id - ' + product.id;
//             let quantity=document.createElement('p');
//             quantity.innerHTML='quantity - ' + product.quantity;
//             divCart.append(image, title, price, total, discountPercentage, discountedPrice, id, quantity);
//             productsCarts.appendChild(divCart);
//         }
//     }
//     document.body.appendChild(productsCarts);
// }



//
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
//
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

let URL = 'http://jsonplaceholder.typicode.com/users';

function getUsers(url) {
    fetch(url).then(response => response.json())
        .then(data => {
            let users = data
            showUsers(users)
    });
}
getUsers(URL)

function showUsers (users) {

    let usersList = document.createElement('ul');

    for (const user of users) {
        console.log(user);
        let oneUser = document.createElement('li');
        oneUser.innerHTML = user.id +'.' + ' ' + user.name;



        usersList.append(oneUser);
    }
    document.body.appendChild(usersList)
}