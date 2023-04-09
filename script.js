// Create a multi-dimensional array
var multiDimensionalArray = [
  ["John", "Doe", 25],
  ["Jane", "Doe", 23],
  ["Bob", "Smith", 30],
  [{name: "Tom", age: 28}, {name: "Sue", age: 27}]
];

// Get the table element
var table = document.getElementById("myTable");

// Loop through the multi-dimensional array and create table rows and cells
for (var i = 0; i < multiDimensionalArray.length; i++) {
  var row = table.insertRow();
  for (var j = 0; j < multiDimensionalArray[i].length; j++) {
    var cell = row.insertCell();
    cell.innerHTML = multiDimensionalArray[i][j];
  }
}
