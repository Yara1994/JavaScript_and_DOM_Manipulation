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

    // ===================================================================//

    // Select the input element and get the raw HTML node

    var inputElementDatetime = d3.select("#datetime");
    var inputElementCity = d3.select("#city");
    var inputElementState = d3.select("#state");
    var inputElementCountry = d3.select("#country");
    var inputElementShape = d3.select("#shape");


    // Get the value property of the input element

    var inputValueDatetime = inputElementDatetime.property("value");
    // console.log(inputValueDatetime);

    var inputValueCity = inputElementCity.property("value").toLowerCase();
    // console.log(inputValueCity);

    var inputValueState = inputElementState.property("value");
    // console.log(inputValueState);

    var inputValueCountry = inputElementCountry.property("value");
    // console.log(inputValueCountry);

    var inputValueShape = inputElementShape.property("value");
    // console.log(inputValueShape);

    if(Boolean(inputValueDatetime)) {
        tableData = tableData.filter(ufo => ufo.datetime === inputValueDatetime)
    }

    if(Boolean(inputValueCity)) {
        tableData = tableData.filter(ufo => ufo.city === inputValueCity)
    }
    
    if(Boolean(inputValueState)) {
        tableData = tableData.filter(ufo => ufo.state === inputValueState)
    }
    
    if(Boolean(inputValueCountry)) {
        tableData = tableData.filter(ufo => ufo.country === inputValueCountry)
    }
    
    if(Boolean(inputValueShape)) {
        tableData = tableData.filter(ufo => ufo.shape === inputValueShape)

    } 


    tbody.html(" ")

    // make the table

    tableData.forEach((report) => {

        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
    
            var cell = row.append("td");
            cell.text(value);
    
        });
    
    });

    tableData = data

});

var resetButton = d3.select("#reset-btn")

resetButton.on("click", function() {

    tbody.html(" ");
    
    tableData = data;

    tableData.forEach((report) => {

        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
    
            var cell = row.append("td");
            cell.text(value);
    
        });
    
    });

})

