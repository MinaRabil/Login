

/* signup__________________________________________________________________________*/

let  userNameInput= document.getElementById('userNameInput');
let  emailInput= document.getElementById('emailInput');
let  passwordInput= document.getElementById('passwordInput');
let signUpBtn =document.getElementById('signUpBtn');

let data=[];
if(signUpBtn != null){
  let alertMassage = document.getElementById('alertMassage')

if(localStorage.getItem('users') != null ){
  data = JSON.parse(localStorage.getItem('users'));
}

function signUp()
{
  let info={
    username:userNameInput.value,
    email:emailInput.value,
    password:passwordInput.value,
  }
  if(required() == true)
  {
    doneProcess('Inputs required','red');
  }else{
    if(emailCheck() == true)
    {
      doneProcess('Email Already Exist', 'red');
    }
    else{
      data.push(info)

  localStorage.setItem('users',JSON.stringify(data))
  doneProcess('success','green')
  clear()}
}
  }

function doneProcess(text , color){
  alertMassage.classList.replace('d-none','d-block')
  alertMassage.innerHTML= text;
  alertMassage.style.color=color;

}



function required(){
  if(userNameInput.value == ''|| emailInput.value == '' || passwordInput.value == ''){
    return true}
   else{
  return false}

} 


function clear(){
  userNameInput.value = '';
  emailInput.value = '';
  passwordInput.value = '';
}

function emailCheck() {
  for (let i = 0; i < data.length; i++) {
      if (data[i].email == emailInput.value)
          return true;
  }
}
signUpBtn.addEventListener('click',signUp) }
else{
  signUpBtn == 0
}

/* sign in_________________________________________________________________________ */



  



  let loginBtn = document.getElementById('loginBtn');


if(loginBtn != null){
  
  let emailLoginInput = document.getElementById('emailLoginInput');
  let passwordLoginInput = document.getElementById('passwordLoginInput');
  let alertMassage=document.getElementById('alertMassage');
  if (localStorage.getItem('users') != null) {
      data = JSON.parse(localStorage.getItem('users')); 
  }
         console.log(data)

  function logIn() {
      if(checkInputsEmpty() == true)
      {
          //alert message
          getAlertMessage('All Inputs Required','red')
      }
      else
      {
          if(checkEmailPassword() == true)
          {
              //navigate home page
              window.location.href='home.html';
          }
          else
          {
              //alert message 
              getAlertMessage('Email or Password notCorrect','red');
          }
      }
     
  }
  function checkEmailPassword() {
      for (let index = 0; index < data.length; index++) {
          if (data[index].email == emailLoginInput.value && data[index].password == passwordLoginInput.value) {
              localStorage.setItem('username',data[index].username)
              return true;
          }
      }
  }
  function getAlertMessage(text, color) {
      alertMassage.classList.replace('d-none', 'd-block');
      alertMassage.innerHTML = text;
      alertMassage.style.color = color;
  }
  function checkInputsEmpty() {
      if ( emailLoginInput.value == '' || passwordLoginInput.value == '')
          return true;
      else
          return false;
  }
  loginBtn.addEventListener('click', logIn);
}


/* welcome _________________________________________*/



if(loginBtn == null && signUpBtn == null ){



  let welcomeMassage=document.getElementById('welcomeMassage');
let logOutBtn=document.getElementById('logOutBtn');

if(localStorage.getItem('username') != null)
{
    welcomeMassage.innerHTML = `Welcome ${localStorage.getItem('username')}`
}

function logOut()
{
    //navigate login page
    //remove userName from localstorage
    window.location.href='index.html';
    localStorage.removeItem('username');
}
logOutBtn.addEventListener('click',logOut)

}









