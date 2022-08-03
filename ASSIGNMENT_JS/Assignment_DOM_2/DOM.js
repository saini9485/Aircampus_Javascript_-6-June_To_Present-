var Data1 = [];
var Data2 = [];
var Data3 = [];
var Data4 = [];
var Data5 = [];
let n = 1;
let m = 0;
function AddRow() {
  var addRow = document.getElementById("main-table");
  var newRow = addRow.insertRow(n);

  Data1[m] = document.getElementById("fname").value;
  Data2[m] = document.getElementById("email").value;
  Data3[m] = document.getElementById("phone").value;
  Data4[m] = document.getElementById("course").value;

  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  cell1.innerHTML = Data1[m];
  cell2.innerHTML = Data2[m];
  cell3.innerHTML = Data3[m];
  cell4.innerHTML = Data4[m];
  cell5.innerHTML =
    '<input type="submit" name="remove" id="remove" value="Remove" onclick="remove()">';

  n++;
  m++;
}
let buttons = document.getElementById("remove");
buttons.addEventListener("onclick", remove);

function remove() {
  document.getElementById("main-table").deleteRow(1);
}

