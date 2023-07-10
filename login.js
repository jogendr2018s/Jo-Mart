document.querySelector('.login1').addEventListener('click',()=>{
    const user = document.querySelector('.user').value;
    const password= document.querySelector('.password').value;
    const b =JSON.parse(localStorage.getItem('usernames'));
    if(localStorage.getItem('usernames').includes(user) && localStorage.getItem('passwords').includes(password)&& user!=''&& password!= ''){
        window.open('innerweb.html','_self');
    }else if(!localStorage.getItem('usernames').includes(user)) {
        alert('NO USER FOUND');
        window.open('register.html');
    }else if(!localStorage.getItem('passwords').includes(password)){
        alert('INCORRECT PASSWORD');
    }
})