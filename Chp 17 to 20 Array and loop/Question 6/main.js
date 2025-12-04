
document.write("<b>Counting:</b> <br/> <br/>")

for (var i = 1; i <= 15; i++) {
    document.write(`${i}, `)
}

document.write("<br/><br/>")
document.write("<b>Reverse counting:</b><br/><br/>")

for (var j = 10; j >= 1; j--) {
    document.write(`${j}, `)
}

document.write("<br/><br/>")
document.write("<b>Even:</b><br/><br/>")

for (var k = 0; k <= 20; k += 2) {
    document.write(`${k}, `)
}

document.write("<br/><br/>")
document.write("<b>Odd:</b><br/><br/>")

for (var l = 1; l < 20; l += 2) {
    document.write(`${l}, `)
}

document.write("<br/><br/>")
document.write("<b>Series:</b><br/><br/>")

for (var m = 2; m <= 20; m += 2) {
    document.write(`${m}k, `)
}
