let userID =new URL(location.href).searchParams.get('userId');

function foo(){
fetch(`http://jsonplaceholder.typicode.com/users/${userID}`)
    .then(res => res.json()).then(info => {
        let userInfo = info;
        infoOfOneUser(userInfo)

})}
foo();

function infoOfOneUser(userInfo){
    console.log(userInfo)

    let aboutUser = document.getElementById('aboutUser');
    let email = document.createElement('li');
    let id = document.createElement('li');
    let name = document.createElement('li');
    let phone = document.createElement('li');
    let username = document.createElement('li');
    let website = document.createElement('li');
    let address = document.createElement('li');
    let geo = document.createElement('li');
    let company = document.createElement('li')

    email.innerHTML = `Email: ${userInfo.email}`;
    id.innerHTML = `id: ${userInfo.id}`;
    name.innerHTML = `name: ${userInfo.name}`;
    phone.innerHTML = `phone: ${userInfo.phone}`;
    username.innerHTML = `username: ${userInfo.username}`;
    website.innerHTML = `website: ${userInfo.website}`;


    let fullAddress = document.createElement('li');
    fullAddress.classList.add('fullAddress');
    let companyInfo = document.createElement('li');


    for (const addressElement in userInfo.address) {


        // console.log(addressElement);

        fullAddress.innerHTML = `Address: City: ${userInfo.address.city}, Street: ${userInfo.address.street}, Suite: ${userInfo.address.suite}, Zipcode: ${userInfo.address.zipcode}, Geo: ${userInfo.address.geo.lat}, ${userInfo.address.geo.lng}`;

        address.append(fullAddress);
    }
    for (const companyKey in userInfo.company) {
        companyInfo.innerHTML = `Company: BS - ${userInfo.company.bs}, catch phrase - ${userInfo.company.catchPhrase}, name - ${userInfo.company.name}`;
        company.append(companyInfo)
    }

    aboutUser.append(username, id, name, phone, email, website, address, company)
}