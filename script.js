'use strict';

////SELECTING ELEMENTS(IDS)

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0'); ////querySelector("#")
const score1El = document.getElementById('score--1'); ////getElementbyId("")
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

////SETTING IT TO ZERO and HIDING DICE

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

////ROLLING DICE

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

////FUNCTION TO SWITCH PLAYER.
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

/////

btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generate Random No
    let dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    // 2. Display the image
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    //07-Pig-Game\starter\dice-6.png

    // 3. Check if its 1 ? switch : add to current
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Current Score to active players score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 50) {
      diceEl.classList.add('hidden');

      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  // remove player winner
  playing = true;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  switchPlayer();
  score0El.textContent = 0;
  score1El.textContent = 0;
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  // swicth to player 0

  // current score 0
  // score 0
});
