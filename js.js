bang = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (let i = 1; i < 10; i++) {
    bang += "<tr>";
    for (let j = 2; j < 10; j++) {
       bang +="<td>"+ j + "x" + i + "="+ i*j + "</td>"
    }
    bang += "</tr>";
}
bang += "</table>";
document.writeln(bang)