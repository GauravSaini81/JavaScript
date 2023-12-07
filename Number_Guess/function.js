   let randoNum = parseInt(Math.random()*100+1); 
   const userInput = document.getElementById('guessField');
   const submit = document.querySelector('#subt');
   const guess_slots = document.querySelector('.guesses');
   const remaining = document.querySelector('.lastResult');
   const loworHi = document.querySelector('.loworHi');
   const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
  let prevGuesses = [];
 let numGuesses = 1;
 let playGame = true;
 if(playGame)
 {
    submit.addEventListener('click',(e)=>
    {
        e.preventDefault();
     const guess =  parseInt(userInput.value);
    //  console.log(guess);
     validateGuess(guess);
    })
 }
 function validateGuess(guess){
//
if(isNaN(guess))
{
    alert(`Please Enter a valid number`);
}
else if(guess<1)
{
    alert(`Please Enter number more  than 1`);
}
else if(guess>100)
{
    alert(`Please Enter less than 100`);
}
else {
    prevGuesses.push(guess);
    if(numGuesses > 10)
    {
        displayGuess(guess);
        displayMessage(`Game Over! Random number was ${randoNum}`);
        endGame();
    } else {
        displayGuess(guess);
        checkGuess(guess);
   }
} 


 }
 function checkGuess(guess){
    //
    if(guess === randoNum)
    {
        displayMessage(`You Won you guest it right`);
        endGame();
    }
    else if(guess > randoNum)
    {
        displayMessage(`Number is Too Big`);
    }
    else{
        displayMessage(`Number is Too Low`); 
    }
     }
     function displayGuess(guess){
//
userInput.value ='';
guess_slots.innerHTML += `${guess}, `;
numGuesses++;
remaining.innerHTML = `${11- numGuesses}`;
     }
     function displayMessage(message){
        //
        loworHi.innerHTML = `${message}`;
         }
         function endGame(){
            //
            userInput.value ='';
            userInput.setAttribute('disabled','');
            p.classList.add('button');
            p.innerHTML = `<h1 style="  font-size: 16px;
            padding: 10px;
            align-self: center;
            margin-top: 25px;
            color: #000;
            cursor: pointer;
            display: inline;
            border: 0;
            text-decoration: none;" id ="newGame"> Start New Game</h1>`
            playGame = false;
            startOver.appendChild(p);
            newGame();


             }
             function newGame(){
                //
                const newGame = document.querySelector('#newGame');
                newGame.addEventListener('click',()=>
                {
                    prevGuesses =[];
                    numGuesses =2;
                    guess_slots.innerHTML = '';
                    remaining.innerHTML = `${11- numGuesses}`;
                    userInput.removeAttribute('disabled');
                    startOver.removeChild(p);
                     playGame =true;
                });
                 }