//Keeps track of Active Player
let activePlayer = 'X';

//Stores moves and is used to determine win conditions
let selectedSquares = [];

//Fuction to place X or O in a square
function placeXOrO(sqaureNumber) { 
    //Checks if square has been selected
    if (!selectedSquares.some(element => element.includes(sqaureNumber))) {
       //Holds the Html element that was clicked
        let select = document.getElementById(sqaureNumber);
        //Determines the active player and places the icon
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //adds the sqaure and the player array
        selectedSquares.push(sqaureNumber + activePlayer);
        //call function to check for the win condition
        checkWinConditions();
        //Changes active player
        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }
        //function to play sound of icon being placed
        audio('./media/place.mp3');
        //Checks for computers turn in the game
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        //returning true is need the computers turn function
        return true;
    }
    //picks a random number for the computers turn
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}
//Function parses the selectedSquares array to determine if a player has won
//the drawLine function is called if a win condition is met
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 588, 100) }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 588) }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 588) }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 588) }
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 588) }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 588) }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 588) }
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    //checks for a tie - if no win conditions is met and all 9 squares have been picked
    else if (selectedSquares.length >= 9) {
        //plays the tie sounds
        audio('./media/tie.mp3');
        //resets the game if there is a tie
        setTimeout(function () { resetGame(); }, 500);
    }
    //Checks for each win conditions
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true; }
    }
}
    //Clears the board and the array to restart the game
function resetGame() {
    for (let i = 0; 1 < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}
//plays the audio files
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}
//draws the line across winning coordinates
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas =document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x = x1,
        y = y1;
    
    function animateLineDrawing() {
        const animationLoop= requestAnimationFrame(animateLineDrawing)
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if ( x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if ( x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }
    //clears the board after the animation
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('.media/winGame.mp3');
    animateLineDrawing();
    setTimeout(function () { clear(); resetGame(); }, 1000);
}
//Disables the click during the computers turn 
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000);
}
