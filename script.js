const p1scoreDisplay = document.querySelector('#p1scoreDisplay');
const p2scoreDisplay = document.querySelector('#p2scoreDisplay');

const winningScoreSelect = document.querySelector('#games');

const addPlayer1 = document.querySelector ('#addPlayer1');
const addPlayer2 = document.querySelector ('#addPlayer2');
const resetBtn = document.querySelector('#resetBtn');

let p1Score = 0;
let p2Score = 0; 
let winningScore = 8;
let isGameOver = false;

addPlayer1.addEventListener('click', function() {
    if(!isGameOver) {
        p1Score += 1;
        if(p1Score === winningScore) {
            isGameOver = true;
            p1scoreDisplay.classList.add('winner');
            p2scoreDisplay.classList.add('loser');
        }
        p1scoreDisplay.textContent = p1Score;
    }
})

addPlayer2.addEventListener('click', function() {
    if(!isGameOver) {
        p2Score += 1;
        if(p2Score === winningScore) {
            isGameOver = true;
            p2scoreDisplay.classList.add('winner');
            p1scoreDisplay.classList.add('loser');
        }
        p2scoreDisplay.textContent = p2Score;
    }
})



winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetBtn.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1scoreDisplay.textContent = 0;
    p2scoreDisplay.textContent = 0;
    p1scoreDisplay.classList.remove('winner', 'loser');
    p2scoreDisplay.classList.remove('winner', 'loser');
}

