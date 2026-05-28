// REGISTER.JS
document
.document
.getElementById("registerForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const user={

name:
document.getElementById("name").value,

email:
document.getElementById("email").value,

password:
document.getElementById("password").value

};


// save user

localStorage.setItem(

"user",

JSON.stringify(user)

);


alert(
"Account created successfully"
);


// go to login

window.location.href=
"login.html";

});
// LOGIN.JS
document
.getElementById("loginForm")
.addEventListener("submit",(e)=>{

e.preventDefault();

const email=

document.getElementById(
"email"
).value;

const password=

document.getElementById(
"password"
).value;


const user=

JSON.parse(

localStorage.getItem(
"user"
)

);


if(

user &&

email===user.email &&

password===user.password

){

localStorage.setItem(

"isLoggedIn",

"true"

);


// save current user

localStorage.setItem(

"currentUser",

user.name

);


window.location.href=

"dashboard.html";

}


else{

alert(

"Wrong email or password"

);

}


});