function addition() {  //Defining and naming the add function
    var add = 2+2;
    document.getElementById("Add").innerHTML = "2 + 2 = " + add; //shows the results
}

function subtraction() { //Names and defines the sub function
    var sub = 21-10;
    document.getElementById("Sub").innerHTML = "21 - 10 = " + sub //shows the results
}

function multiplication() {  //Names and defines the multiply function
    var mult = 24*5;
    document.getElementById("Mlt").innerHTML = "24 * 5 = " + mult //Shows the results
}

function division() {  //Names and defines the Divide Function
    var divide =40/4;
    document.getElementById("Div").innerHTML = "40 / 4 = " + divide //Shows the results
}

function random() { //Names and define the random function
    document.getElementById("Ran").innerHTML = Math.random()*25; //Shows the results
}

function modulus_operator() {  //Names and define the modulus operator function
    var modulus = 38 % 4;
    document.getElementById("Mod").innerHTML = "When you divide 38 by 4 you have a remainder of: " + modulus;  //Shows the results
}

function Increment() {  //defines and names the increment function
    var value = document.getElementById("IncrementText").innerHTML; //Shows the results

    value++; //adds one to the vaule

    document.getElementById("IncrementText").innerHTML = value; //Shows the results
}

function Decrement() { //defines and names the decrement function
    var value = document.getElementById("DecrementText").innerHTML;

    value--; //minuses one from the value

    document.getElementById("DecrementText").innerHTML = value; //shows the results
}