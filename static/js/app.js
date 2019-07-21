// from data.js

var tableData = data;
// console.log(tableData)

// Select the table body

var tbody = d3.select("tbody");
// console.log(tbody)

// make the table

tableData.forEach((report) => {

    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {

        var cell = row.append("td");
        cell.text(value);

    });

});

// Select the button

var button = d3.select("#filter-btn");

button.on("click", function() {

    // Select the input element and get the raw HTML node

    var inputElement = d3.select("#datetime");
    
    // Get the value property of the input element

    var inputValue = inputElement.property("value");
    console.log(inputValue);

    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData)

    tbody.html(" ")

    // make the table

    filteredData.forEach((report) => {

        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
    
            var cell = row.append("td");
            cell.text(value);
    
        });
    
    });

});

