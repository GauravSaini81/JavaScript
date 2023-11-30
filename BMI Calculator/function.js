const form= document.querySelector('form');
// THis use case give the empty 
// height = parseInt(document.querySelector('#Height').value);
const Result = document.querySelector('.result');
form.addEventListener('submit',(e) => {
//To prevent the default Behaviour
    e.preventDefault();
    //These value comes as string so we have to parse the value into int
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#Weight').value);
    const Result = document.querySelector('.result');
    const bmi = (weight/((height*height)/10000)).toFixed(2);
    if(bmi<18.5){
        Result.innerHTML =`<span>${bmi}</span> <br>
        You are Underweight &#128534;`
    }
    if(bmi>=18.5&&bmi<=24.9){
        Result.innerHTML =`<span>${bmi}</span> <br>
        You are Normal Weight &#128525;`
    }
    if(bmi>=25&&bmi<=29.9){
        Result.innerHTML =`<span>${bmi}</span> <br>
        You are Over Weight &#128531;`
    }
    if(bmi>=30){
        Result.innerHTML =`<span>${bmi}</span> <br>
        You are Obese Person &#128533;`
    }
    
    
});