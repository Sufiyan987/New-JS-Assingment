
var colors = ["Red", "Green", "Blue", "Yellow"]
document.getElementById("output").innerHTML += "<b>Initial Array:</b> " + colors + "<br><br>"

var beginColor = prompt("Which color do you want to add to the beginning?")
colors.unshift(beginColor)
document.getElementById("output").innerHTML += "<b>After adding at beginning:</b> " + colors + "<br><br>"

var endColor = prompt("Which color do you want to add to the end?")
colors.push(endColor)
document.getElementById("output").innerHTML += "<b>After adding at end:</b> " + colors + "<br><br>"

colors.unshift("Purple", "Orange")
document.getElementById("output").innerHTML += "<b>After adding two more at beginning:</b> " + colors + "<br><br>"

colors.shift()
document.getElementById("output").innerHTML += "<b>After deleting first color:</b> " + colors + "<br><br>"

colors.pop()
document.getElementById("output").innerHTML += "<b>After deleting last color:</b> " + colors + "<br><br>"

var addIndex = prompt("At which index do you want to add a color?")
var addColor = prompt("Enter the color name you want to add:")
colors.splice(addIndex, 0, addColor)
document.getElementById("output").innerHTML += "<b>After adding at user index:</b> " + colors + "<br><br>"

var delIndex = prompt("At which index do you want to delete color(s)?")
var delCount = prompt("How many colors do you want to delete?")
colors.splice(delIndex, delCount)
document.getElementById("output").innerHTML += "<b>After deleting from user index:</b> " + colors + "<br><br>"