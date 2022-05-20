var users = [
    {name: "Tom", gender: 'male'},
    {name: "Maria", gender: 'female'},
    {name: "Jason", gender: 'male'},
    {name: "Sora", gender: 'female'},
    {name: "Teo", gender: 'male'}
]

const userList = document.querySelector('.list');
const genderFilter = document.getElementById('genderFilter')
render(userList,users);

genderFilter.addEventListener('change', () => {
    var selectedGender = genderFilter.value;
    console.log(selectedGender)
    if(selectedGender!=='null'){
        filteredUsers = users.filter(user => {
            return user.gender===selectedGender})     
        render(userList,filteredUsers)
    }
    else{
        render(userList,users);
    }
})

function render(container, items){
    container.innerHTML = items.map(item => `<li>${item.name}</li>`).join('');
}