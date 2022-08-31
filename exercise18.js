
// exercise 18

// var anotherVar = "you can just type anything here"
// var anotherDiv = document.getElementById("tablediv")
// var tableElement = document.createElement("table")

// tableElement.innerText = anotherVar
// console.log(tableElement)

// tablediv.appendChild(tableElement)


// exercise 18 take 2

// console.log(document)


function addMultTable(rows, cols) {
    var tableDiv = document.getElementById('tablediv');
    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    table.appendChild(tbody);

    for (var i = 0; i < [rows]; i++) {
        var trow = document.createElement('tr');
        for (var j = 0; j < [cols]; j++) {
            var tdata = document.createElement('td');
            trow.appendChild(tdata);
        }
        tbody.appendChild(trow);
    }

    tableDiv.appendChild(table);
}
addMultTable(4, 8)





