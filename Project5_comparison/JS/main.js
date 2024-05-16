//Boolean data type
var x = true;

//printing a data type of the variable x
document.write(typeof x);
document.write("<br>");

//expression coming a string and a number
document.write("10" + 10);
document.write("<br>");

//using the == operator
document.write(5 == 5);
document.write("<br>")

//using the === operation
x = 1;
y = 1;
document.write(x === y);
document.write("<br>");

//using the > and && operators
document.write( 10 > 5 && 11 > 6);
document.write("<br>")


//using the < and the || operators
document.write(10 < 5 || 11 < 6);
document.write("<br>")

//using the ! operator
function not_Function() {
    document.getElementsById("Not").innerHTML = !(1 > 2);
}