const getAllS = (selec) => document.querySelectorAll(selec);
const getS = (selec) => document.querySelector(selec);


//   input

function inputValue(){
    if(event.target.matches('.input')){
        if(event.target.value.length > 0){
            event.target.previousElementSibling.style.zIndex = 1;
            event.target.previousElementSibling.style.fontSize = '0.7em';
            event.target.previousElementSibling.style.top = '3px';
            event.target.style.paddingTop = '12px';
    
        }
        else{
            event.target.previousElementSibling.style.zIndex = 0;
            event.target.previousElementSibling.style.fontSize = '1em';
            event.target.previousElementSibling.style.top = '13px';
            event.target.style.paddingTop = '0';
    
        }
    }
    
}

let checkName = false;
let checkLastName = false;
let checkEmail = false;
let checkPassword = false;
let checkCheckbox = false;

function checker(){
    if(checkName && checkLastName && checkEmail && checkPassword && checkCheckbox){
        getS('#button-sign').disabled = false;
        getS('#button-sign').classList.add('button-active');
    }
    else{
        getS('#button-sign').disabled = true;
        getS('#button-sign').classList.remove('button-active');
    }
}

function userCheck(){
    let regName = /^[a-zA-Z]{2,20}$/; // name
    let regEmail = /^[a-zA-Z]{1,}[a-zA-Z0-9\.-]{0,}@{1}[a-zA-Z]{1,}\.{1}[a-zA-Z]{2,}$/; // email
    let regPassword = /^\w{8,15}$/; // password
    let addCheck = () => {
        event.target.nextElementSibling.nextElementSibling.style.display = 'none';
        event.target.nextElementSibling.style.display = 'block';
        event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'none';
    }
    let deleteCheck= () => {
        event.target.nextElementSibling.style.display = 'none';
        event.target.nextElementSibling.nextElementSibling.style.display = 'block';
        event.target.nextElementSibling.nextElementSibling.nextElementSibling.style.display = 'flex';
    }
    if(event.target.matches('.input')){
        if(event.target.id === 'firstName' || event.target.id === 'lastName'){ // name
            if(regName.test(event.target.value)){
                if(event.target.id === 'firstName'){
                    checkName = true;
                }
                if(event.target.id === 'lastName'){
                    checkLastName = true;
                }
                addCheck();
            }
            else{
                if(event.target.id === 'firstName'){
                    checkName = false;
                }
                if(event.target.id === 'lastName'){
                    checkLastName = false;
                }
                deleteCheck();
            }
            let addBorderName = () => regName.test(event.target.value) ? event.target.style.border = '2px solid #76a782': event.target.style.border = '2px solid red';
            event.target.addEventListener('blur', addBorderName);
        }
        if(event.target.id === 'email'){ // email
            if(regEmail.test(event.target.value)){
                addCheck();
                checkEmail = true;
            }
            else{
                deleteCheck();
                checkEmail = false;
            }
            let addBorderEmail = () => regEmail.test(event.target.value) ? event.target.style.border = '2px solid #76a782': event.target.style.border = '2px solid red';
            event.target.addEventListener('blur', addBorderEmail);
        }
        if(event.target.id === 'password'){ // password
            if(regPassword.test(event.target.value)){
                addCheck();
                checkPassword = true;
            }
            else{
                deleteCheck();
                checkPassword = false;
            }
            let addBorderPassword = () => regPassword.test(event.target.value) ? event.target.style.border = '2px solid #76a782': event.target.style.border = '2px solid red';
            event.target.addEventListener('blur', addBorderPassword);
        }
    }

}
function userCheckbox(){
    if(event.target.checked){
        checkCheckbox = true;
    }
    else{
        checkCheckbox = false;
    }
}
function clickButtonRegister(){
    event.preventDefault();
    getS('.window').style.display = 'flex';
}
function clickButtonWindow(){
    event.preventDefault();
    getS('.window').style.display = 'none';
    document.forms.formRegister.reset();
    event.target.previousElementSibling.style.zIndex = 0;
    event.target.previousElementSibling.style.fontSize = '1em';
    event.target.previousElementSibling.style.top = '13px';
    event.target.style.paddingTop = '0';
    for(let i = 0; i < getAllS('.input').length; i++){
        getAllS('.input')[i].previousElementSibling.style.zIndex = 0;
        getAllS('.input')[i].previousElementSibling.style.fontSize = '1em';
        getAllS('.input')[i].previousElementSibling.style.top = '13px';
        getAllS('.input')[i].style.paddingTop = '0';
        getAllS('.input')[i].style.border = '1px solid gray';
        getAllS('.input')[i].nextElementSibling.nextElementSibling.style.display = 'none';
        getAllS('.input')[i].nextElementSibling.style.display = 'none';
        checkName = false;
        checkLastName = false;
        checkEmail = false;
        checkPassword = false;
        checkCheckbox = false;
    }
}

getS('.form').addEventListener('input', inputValue);
getS('.form').addEventListener('input', userCheck);
getS('.checkbox-container').addEventListener('click', userCheckbox);
getS('#button-sign').addEventListener('click', clickButtonRegister);
getS('#windowButton').addEventListener('click', clickButtonWindow);
setInterval(checker, 100);