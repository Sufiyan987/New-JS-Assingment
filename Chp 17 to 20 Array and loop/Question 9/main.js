var A = [24, 53, 78, 91, 12]
var smallest = A[0]

for (var i = 0; i < A.length; i++) {
    if (A[i] < smallest) {
        smallest = A[i]
    }
}

document.write("Array: " + A + "<br>")
document.write("Smallest number: " + smallest)
