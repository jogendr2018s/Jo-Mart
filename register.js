document.querySelector('.registered').addEventListener('click',()=>{
        afterclick();
})
var usernames=[''];
var passwords=[''];
function afterclick(){
    const username = document.querySelector('.username');
    const password= document.querySelector('.password');
    const cpassword= document.querySelector('.cpassword')
    if(usernames.includes(username.value) && password.value===cpassword.value){
        alert('ALREADY USER FOUND');
    }else if(password.value != cpassword.value){
        alert('CHECK PASSWORD');
    }else{
        usernames.push(username.value);
        passwords.push(password.value);
        console.log(usernames,passwords);
        localStorage.setItem('usernames',JSON.stringify(usernames));
        localStorage.setItem('passwords',JSON.stringify(passwords));
        alert('Registered');
        window.open('loginpage.html','_self');
    }
}
console.log(localStorage.getItem('usernames'));
console.log(localStorage.getItem('passwords'));
