// - зробити файл users.html
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
    let wrapper = document.getElementById('wrap')

    for (const user of users) {
        console.log(user);
        let oneUser = document.createElement('li');
        oneUser.innerHTML = user.id +'.' + ' ' + user.name;

        let button = document.createElement('button');
        button.innerText = 'info';
        button.onclick = () => {
            location.href = `aboutUser.html?userId=${user.id}`
        }


        oneUser.appendChild(button)
        wrapper.append(oneUser);
    }

}