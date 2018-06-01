// game variables
let deck = document.querySelector('#game-board'),
    cards = document.querySelectorAll('.card'),
    shownCards = [],
    array = [],
    timeId = document.getElementById('timer'),
    seconds = 0, minutes = 0, t;

const modal = document.getElementById('modal'),
    extBtn = document.getElementsByClassName('exit-btn')[0],
    matches = document.getElementsByClassName('match');

// modal script
extBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutModal);

function closeModal() {
    modal.style.display = 'none';
}

function clickOutModal(e) {
    if (e.target == modal) {
    modal.style.display = 'none';
    }
}

// new game function
function newGame() {
    location.reload();
}

// Shuffle deck
for (let i = 0; i < deck.children.length; i++) {
    array.push(deck.children[i]);
}
// randomly sorts array
array.sort(function() {
    return Math.random() - 0.5;
})
// returns shuffled children to array
for (let i = 0; i < array.length; i++) {
    deck.appendChild(array[i])
}

// timer function
function addTime() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    timeId.innerText = (minutes ? (minutes > 9 ? minutes : '0' + minutes) : '00') + ':' + (seconds > 9 ? seconds : '0' + seconds)
    ;
    timer();
}

function timer() {
    // check for win state, otherwise continue timer
    if (matches.length == 16) {
        return;
    } else {
    t = setTimeout(addTime, 1000)
    }
}

cards.forEach(function(card) {
    moves = 0;
    // adds to move count 
    function addMoves() {
        let moreMoves = moves += 1;
        // adds to moves count if user clicks on card that hasn't been matched
        if (card.classList.contains('match') == false) {
            document.getElementById('moves').innerText = moreMoves;
        }
        // initiates timer on first card click
        if (moreMoves == 1) {
            timer();
        }
        // remove tree icons after a certain amount of moves
        if (moreMoves == 28) {
            document.getElementById('trees').lastChild.previousSibling.classList.remove('fa-tree')
        } else if (moreMoves == 35) {
            document.getElementById('trees').firstChild.nextSibling.classList.remove('fa-tree')
        }
    }

    card.addEventListener('click', function(e) {
        // prevents classes being added/removed on matched cards 
        if (card.classList.contains('match') == true) {
            return;
            } else 
        // adds shown cards to shownCards array when clicked
        shownCards.push(card)
        // shows cards
        card.firstChild.nextSibling.classList.add('clear')
        // keep track of click count
        addMoves();

        // determines what to do if cards match/don't match
        if (shownCards.length == 2) {
        
            setTimeout(function() {
                // clicked card variables for each turn
                let cardOne = shownCards[0];
                let cardTwo = shownCards[1];
                let cardOneData = cardOne.dataset.card;
                let cardTwoData = cardTwo.dataset.card;
                // if two cards match, add class 'match' to keep cards flipped and initiate animations
                if (cardOneData == cardTwoData && cardOne !== cardTwo) {
                   cardOne.classList.add('match')
                   cardTwo.classList.add('match')
                   cardOne.firstChild.nextSibling.nextSibling.nextSibling.classList.add('visible')
                   cardTwo.firstChild.nextSibling.nextSibling.nextSibling.classList.add('visible')
                // check for win upon match
                win(); 

                } else {        
                // if cards don't match, turn cards back over
                shownCards.forEach(function(card) {
                    // add animation for no match
                    cardOne.classList.add('not-match')
                    cardTwo.classList.add('not-match')
                    // hides card image
                    card.firstChild.nextSibling.classList.remove('clear')
                     },
                     setTimeout(function() {
                        // remove not-match animation to empty animations for future turns
                        cardOne.classList.remove('not-match')
                        cardTwo.classList.remove('not-match')
                     }, 400)
            )}
            // empties array for next turn 
            shownCards = [];
            }, 400); 
            // prevents more than three cards from being shown during a turn
        } else if (shownCards.length > 2) {
            card.firstChild.nextSibling.classList.remove('clear')
        }
    })
})

// detects win and shows modal
function win() {
    // check if all cards are flipped for a win
   if (matches.length == 16) {
        // pulls final time to display in modal
        let finalTime = document.getElementById('timer').innerHTML;
        // pulls tree total to display in modal
        let finalTrees = document.getElementById('trees').innerHTML;
        // message to display in modal
        document.getElementById('win-text').innerHTML = "YOUR FINAL TIME WAS " + finalTime + "<br>" + "YOU EARNED" + finalTrees + " OUT OF 3 TREES";
        // opens modal after final match animation
        winDelay = setTimeout(function openModal() {
            modal.style.display = 'block';
        }, 1800);
    }    
} 

// delay modal to allow final animation to show
let winDelay; 
function stopWinDelay() {
    clearTimeout(winDelay); 
}