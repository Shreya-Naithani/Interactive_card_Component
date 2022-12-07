const cardNumber = document.getElementById("number");
const numberInp = document.getElementById("card_number");
const nameInp = document.getElementById("card_name");
const cardName = document.getElementById("name");
const cardMonth = document.getElementById("month");
const cardYear = document.getElementById("year");
const monthInp = document.getElementById("card_month");
const yearInp = document.getElementById("card_year");
const cardCvc = document.getElementById("cvc");
const cvcInp = document.getElementById("card_cvc");
const submitBtn = document.getElementById("submit_btn");
const compeleted = document.querySelector(".thank");
const button = document.getElementById("btn");
const form = document.querySelector("form");

function setCardNumber(e) {
  cardNumber.innerText = format(e.target.value);
}
function setCardName(e) {
  cardName.innerText = format(e.target.value);
}
function setCardMonth(e) {
  cardMonth.innerText = format(e.target.value);
}
function setCardYear(e) {
  cardYear.innerText = format(e.target.value);
}
function setCardCvc(e) {
  cardCvc.innerText = format(e.target.value);
}
function handleConfirm(e) {
  e.preventDefault();
  if (button) {
    compeleted.classList.add("hidden");
    form.classList.remove("hidden");
    cardNumber.innerText='0000 0000 0000 0000';
    cardName.innerText='shreya Naithani';
    cardMonth.innerText="00";
    cardYear.innerText ="00";
    cardCvc.innerText = "000";
   form.reset();
  }
}

function handleSubmit(e) {
  e.preventDefault();
  if (!nameInp.value) {
    nameInp.classList.add("error");
    nameInp.parentElement.classList.add("error_message");
  } else {
    nameInp.classList.remove("error");
    nameInp.parentElement.classList.remove("error_message");
  }
  if (!numberInp.value) {
    numberInp.classList.add("error");
    numberInp.parentElement.classList.add("error_message");
  } else if (numberInp.value.length < 16) {
    numberInp.classList.add("error1");
    numberInp.parentElement.classList.add("error1_message");
  } else if (numberInp.value.length > 16) {
    numberInp.classList.add("error1");
    numberInp.parentElement.classList.add("error1_message");
  } else {
    numberInp.classList.remove("error");
    numberInp.parentElement.classList.remove("error_message");
    numberInp.classList.remove("error1");
    numberInp.parentElement.classList.remove("error1_message");
  }
  if (!monthInp.value) {
    monthInp.classList.add("error");
    monthInp.parentElement.classList.add("error_message");
  } else if (monthInp.value.length > 2 || monthInp.value.length < 2) {
    monthInp.classList.add("error1");
    monthInp.parentElement.classList.add("error1_message");
  } else if (monthInp.value>12) {
    monthInp.classList.add("error2");
    monthInp.parentElement.classList.add("error2_message");
  } 

  else {
    monthInp.classList.remove("error");
    monthInp.parentElement.classList.remove("error_message");
    monthInp.classList.remove("error1");
    monthInp.parentElement.classList.remove("error1_message");
    monthInp.classList.remove("error2");
    monthInp.parentElement.classList.remove("error2_message");
  }
  if (!yearInp.value) {
    yearInp.classList.add("error");
    yearInp.parentElement.classList.add("error_message");
  } else if(yearInp.value.length>2||yearInp.value.length<2){
    yearInp.classList.add("error1");
    yearInp.parentElement.classList.add("error1_message");
  }else {
    yearInp.classList.remove("error");
    yearInp.parentElement.classList.remove("error_message");
    yearInp.classList.remove("error1");
    yearInp.parentElement.classList.remove("error1_message");
  }
  if (!cvcInp.value) {
    cvcInp.classList.add("error");
    cvcInp.parentElement.classList.add("error_message");
  } 
  else if(cvcInp.value.length>3||cvcInp.value.length<3){
    cvcInp.classList.add("error1");
    cvcInp.parentElement.classList.add("error1_message");
  }else {
    cvcInp.classList.remove("error");
    cvcInp.parentElement.classList.remove("error_message");
    cvcInp.classList.remove("error1");
    cvcInp.parentElement.classList.remove("error1_message");
  }
  if (
    nameInp.value &&
    numberInp.value &&
    monthInp.value.length==2 && monthInp.value<12 &&
    yearInp.value.length==2 &&
    cvcInp.value.length==3 &&
    numberInp.value.length == 16
  ) {
    compeleted.classList.remove("hidden");
    form.classList.add("hidden");
  }
}
function format(s) {
  return s.toString().replace(/\d{4}(?=.)/g, "$& ");
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", handleSubmit);
button.addEventListener("click", handleConfirm);
