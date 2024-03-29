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

    email.innerHTML = `Email: ${userInfo.email}`;
    id.innerHTML = `id: ${userInfo.id}`;
    name.innerHTML = `id: ${userInfo.name}`;
    phone.innerHTML = `id: ${userInfo.phone}`;
    username.innerHTML = `id: ${userInfo.username}`;
    website.innerHTML = `id: ${userInfo.website}`;

    let fullAddress = document.createElement('li');
    fullAddress.classList.add('fullAddress')

    for (const addressElement in userInfo.address) {

        let company = document.createElement('li');
        // console.log(addressElement);

        fullAddress.innerHTML = `City:${userInfo.address.city}, Street${userInfo.address.street}, Suite: ${userInfo.address.suite}, Zipcode: ${userInfo.address.zipcode}, Geo: ${userInfo.address.geo}`;
        let geo = document.createElement('p')
        console.log(userInfo.address.geo)

        // for (const geolocation in userInfo.address.geo) {
        //     geo.innerHTML = `lat: ${userInfo.address.geo.lat}, lng: ${userInfo.address.geo.lng}`;
        //     // fullAddress.appendChild(geo)
        //
        //
        // }






        address.append(fullAddress)
        
    }

    aboutUser.append(email, id, name, phone, username, website, address)
}