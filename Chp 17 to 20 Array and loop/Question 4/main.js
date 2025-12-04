
var number = +prompt("Enter a number to show its multiplication table")
var length = +prompt("Enter length multiplication table")

document.write(`Multiplication table of ${number} <br/>`)
document.write(`Length ${length} <br/><br/>`);

for (var i = 1; i <= length; i++) {
    document.write(`${number} x ${i} = ${number * i} <br/>`)
}
