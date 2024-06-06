var number = 1;

while (number <= 10) {
    console.log(number);
    number = number + 1;
}
console.log("while loop is completed");

var num2 = 1;

while (num2 <= 10) {
    console.log(num2);
    num2 = num2 + 2;
}
//====================================

console.log("printing the number by using for loop");

for (nm = 1; nm <= 10; nm++) {
    console.log(nm);
}

//======================================================

console.log("printing the array value by using the for each loop");
var ar1 = [2, 3, 4, 5];
for (var storing of ar1) {
    console.log(storing);
}

//===========================================================
console.log("printing the array by using the for loop");
var ar1 = [2, 3, 4, 5];
for(i=0; i<ar1.length; i++)
    {
        console.log(ar1[i]);
    }