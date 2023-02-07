/*******html elements******** */

const form = document.querySelector('form');
const height = document.querySelector('.height input');
const weight = document.querySelector('.weight input');
const resultsDOM = document.querySelector('.result');
const errorH = document.querySelector('.h-error');
const errorW = document.querySelector('.w-error');
const submit = document.querySelector('.submit');

/**********Clearing the tect container********** */

errorH.textContent ="";
errorW.textContent ="";
resultsDOM.textContent="";



/******************   Validate input*** */


function validateInput(heightInput, weightInput){
    isInput =false;

    if(heightInput === "" ||heightInput <= "0"){
        errorH.textContent="Please provide A valid height";
        isInput =true;
    }

    if (weightInput ==="" || weightInput <= "0"){
      errorW.textContent = "Please provide A valid weight";
      isInput =true;  
    }
    setTimeout(function(){
        errorH.textContent ="";
        errorW.textContent ="";
    }, 5000)
    return isInput;
}


/********** Calculate the BMI************ */

function calculateBmi(heightInput, weightInput){
    var bmi = (weightInput / ((heightInput/100) * (heightInput/100))).toFixed(2);
    return [bmi];
}


/******************Add event listener */

submit.addEventListener("click", function(e){
    e.preventDefault();

    var heightInput = height.value;
    var weightInput = weight.value;

    validateInput(heightInput, weightInput);

    if (!isInput){
       result = calculateBmi(heightInput, weightInput);
        resultsDOM.textContent=`Your BMI ${result}`
    }
})


