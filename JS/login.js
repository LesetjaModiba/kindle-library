const username= document.getElementById("username");
const password= document.getElementById("password");
const email= document.getElementById("email");
const phone= document.getElementById("phone-no");
const form=document.getElementById("sign-in-form");
const regForm=document.getElementById("sign-up-form");
const errorElement= document.getElementById('error');

//const sign_btn = document.querySelector(".sign-in-btn");
//const reg_btn = document.querySelector(".register-btn");
let users=[];
const reg_username= document.getElementById("reg-username");
const reg_password= document.getElementById("reg-password");


regForm.addEventListener('submit',(e)=>
{
    e.preventDefault();
if(reg_username.value !=''&& email.value!=''&& phone.value!=''&& reg_password.value!='')
{

        users.push(reg_username.value, email.value, phone.value, reg_password.value);
        alert('Registered successfully');
        sessionStorage.setItem('user_name',users[0]);
        sessionStorage.setItem('password',users[3])       
        const container= document.querySelector(".container");
        container.classList.remove("sign-up-mode");
}
else{
    alert('Form is incomplete!');
    //users.splice(0, users.length);
}
    

});

form.addEventListener('submit',(e)=>
{
    e.preventDefault();
    console.log(users);
if(username.value== ''|| username.value== null)
{
   // alert("Username and password can't be empty");
   
}
else if(password.value.length < 6)
{
    alert('Password should be atleast 6 characters')
}

else if(username.value==users[0] && password.value==users[3] )
{
    window.location.href='index.html';
   
}
else
{
    alert('Wrong password or username'); 
    
}
});
//Adding image
document.querySelector('#file').addEventListener("change", function(){
    const reader = new FileReader();

    reader.addEventListener("load", () => {
        sessionStorage.setItem('img', reader.result);
    });
    reader.readAsDataURL(this.files[0]);
});






