//console.log('This is a comment');
alert("We have discovered 25 SUPER VIRUS on your PC!!!!!");
// console.log doesn't run until alert window closes
console.log('Hi World!');
console.clear();

//////////////////////////////////////////////////////////////

function dogage() {
    if (i == 0) {
        document.getElementById("dage").innerHTML = "Your dog age is 0";
    } else if (i==1) {
        document.getElementById("dage").innerHTML = "Your dog age is 15 years old";
    } else if (i==2) {
        document.getElementById("dage").innerHTML = "Your dog age is 24 years old";
    } else {
        let x = i-2;
        let y = 24 + (x*5); 
        document.getElementById("dage").innerHTML = "Your dog age is " + y + " " + "years old";
    }
}

/////////////////////////////////////////////////////////////

let input = prompt("How old are you?");
let i = parseInt(input);



let age = ("You are:" + " " + i + " " + "years old");
let x = i / 2;
if (i == 0){
    document.getElementById("oe").innerHTML = ("this number is nothing");
} else if (i % 2 == 0) {
    document.getElementById("oe").innerHTML = ("this number is even");
} else {
    document.getElementById("oe").innerHTML = ("this number is odd");
}
dogage(i);
    
document.getElementById("age").innerHTML = age;



