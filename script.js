`use strict`;
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
*/

let secretnumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;
 
const displaymessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click' , function() {
   const guess = Number(document.querySelector('.guess').value);
   console.log(guess);

if(!guess){
   displaymessage('NO NUMBER!');
}
else if(guess === secretnumber){
    displaymessage('Correct Number! 🎉');
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor ='#60b347';
    if(score > highscore){
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}
else if(guess != secretnumber){
        if(score > 0){
             displaymessage(guess > secretnumber ? 'Too high! 📈' :'Too low! 📉'); 
            score--;  
            document.querySelector('.score').textContent = score;
        }
        else{
            displaymessage('💥 YOU LOST THE GAME!');
        }
}
});

document.querySelector('.again').addEventListener
('click', function(){
    score =20;
    secretnumber = Math.trunc(Math.random()* 20)+1;

    displaymessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value ='';

    document.querySelector('body').style.backgroundColor ='#0c8696';

});


