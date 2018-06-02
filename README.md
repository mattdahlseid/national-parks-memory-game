# National Parks Memory Game
<a href="https://mattdahlseid.github.io/national-parks-memory-game/" target="_blank">Click here to play the game</a>

## Introduction
This project was created to fulfill a requirement for Udacity's Front-End Development Nanodegree program. I declined to use the starter code provided by Udacity and opted to build the project from scratch. 

## How to play
There are 16 cards (eight matching pairs) turned face down on the game board. For each turn, a player clicks or touches two cards to see if they match. If they do, the cards remain face up. Otherwise, they flip back over. A timer starts upon the first move of the game. A player wins when all eight matches are found. A reset button is available if a player wishes to start the game over.

A player receives a score based on how many moves it takes to finish a game. In keeping with the national parks theme, the score is displayed as tree icons.
* Completing the game in 27 moves or fewer results in the player receiving three out of three trees
* Completing the game in 34 moves or fewer results in the player receiving two out of three trees
* Completing the game in 35 moves or more results in the player receiving one out of three trees

<a href="https://ibb.co/njUiOJ"><img src="https://preview.ibb.co/gpXRcd/np_mg_snip.png" alt="memory game screenshot" border="0"></a>

## Built With
This project was created with:
* HTML
* CSS 
* Vanilla JavaScript

## Acknowledgements
I utilized multiple resources to help me better understand how to construct various elements of this project.

I gained direction for creating this game through watching a Udacity webinar by Mike Wales, [found here](https://www.youtube.com/watch?v=_rUH-sEs68Y).

I found [this Traversy Media video](https://www.youtube.com/watch?v=6ophW7Ask_0) useful when building my "congratulations" modal.

To shuffle the deck, I used the [Fisher-Yates Shuffle Algorith](https://bost.ocks.org/mike/shuffle/). It's a widely-used algorith to get a randomly shuffled array/data set. This [YouTube walkthrough](https://www.youtube.com/watch?v=tLxBwSL3lPQ&feature=youtu.be) by Adam Khoury introduced me to it. 

And this [codepad link](https://codepad.co/snippet/YMYUDYgr) gave me a better understanding of how to create a timer function.
