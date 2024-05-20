//The .concat() method
function full_sentence() {
    var part_1 = "Guess what day ";
    var part_2 = "it is... ";
    var part_3 = "May 16th! ";
    var whole_sentence = part_1.concat(part_2, part_3);
    document.getElementById("StringMethod").innerHTML = whole_sentence;
}


//The .slice method
function slice_method() {
    var sentence = "Slice and Dice";
    var section = sentence.slice(10, 14);
    document.getElementById("Slice").innerHTML = section;
}


//The .toString() method
function string_Method() {
    var myNumber = 745;
    document.getElementById("ToString").innerHTML = myNumber.toString();
}


//The .toPrecision() method
function precision_method() {
    var myNumber = 123.45678910111213
    document.getElementById("SpecificLength").innerHTML = myNumber.toPrecision(5); 
}