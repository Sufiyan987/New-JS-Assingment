
var A = [24, 53, 78, 91, 12]
var largest = A[0]

for (var i = 0; i < A.length; i++) {
    if (A[i] > largest) {
        largest = A[i]
    }
}

document.write("Array: " + A + "<br>")
document.write("Largest number: " + largest)
