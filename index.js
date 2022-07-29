/* eslint-disable @typescript-eslint/no-unused-vars */

const form = document.querySelector('form')
const emial = document.querySelector('#email')
const zipCode = document.querySelector('#zip-code')
const password = document.querySelector('#password')
const passwordCon = document.querySelector('#password-con')
const submit = document.querySelector('#submit')
const errorMes = document.querySelector('.error')

emial.addEventListener('input', ()=> {
    if(emial.validity.typeMismatch) {
        emial.setCustomValidity('Enter a correct e-mail adress!')
        emial.reportValidity()
    }
    else emial.setCustomValidity('')
})
zipCode.addEventListener('focusout', () => {
    if(zipCode.validity.patternMismatch) {
        zipCode.setCustomValidity('Enter a correct Zip Code!')
        zipCode.reportValidity()
    }
    else zipCode.setCustomValidity('')
})

form.addEventListener('submit', checkPassword)

function checkPassword (e) {
  if(password.value!==passwordCon.value) {
      passwordCon.setCustomValidity('Passwords does not match')
      errorMes.textContent="Please enter the correct password!"
      passwordCon.reportValidity()
      e.preventDefault();

    }
    else {
        passwordCon.setCustomValidity('')
        errorMes.textContent=''

    } 
}