/*

• Using HTML, Bootstrap, and JavaScript create a single page website that 
  contains the following: 
• A Bootstrap styled table representing your choice of data. 
• A Bootstrap styled form that allows a user to add a new row to the 
  table when clicking on submit.

*/

/* What do I need? 

My button... on click, add information to the table 

How do I get information? - form the ‹input› fields... and their .value()
Need: firstNane, lastiame, favoritecolor - store that in a variable 
Find a way to get the # value 
Way to get values fron the form... when we submit... then append() the info 
   to the table 

so... we need to get values with: getelementById()
which means, we need ID's on our values


*/

const formButton = document.getElementById("formSubmit"); // Corrected variable name to 'formButton'

let number = 0;

formButton.addEventListener("click", (event) => {
  // Fixed 'click' event and syntax
  event.preventDefault();

  // Variables to hold the values from the form
  let firstName = document.getElementById("firstName").value; // Fixed syntax for getElementById
  let lastName = document.getElementById("lastName").value; // Fixed syntax
  let favoriteColor = document.getElementById("favoriteColor").value; // Fixed typo in 'favoriteColor'

  // Create a new table row (tr) to append to the table body
  let newTableRow = document.createElement("tr");

  // Create and append a new table cell (td) for the number
  let numberNode = document.createElement("td"); // Fixed typo in 'createElement'
  numberNode.innerHTML = number; // Assign number to innerHTML
  newTableRow.append(numberNode); // Append the cell to the row

  // Create and append a new table cell (td) for the first name
  let firstNameNode = document.createElement("td");
  firstNameNode.innerHTML = firstName;
  newTableRow.append(firstNameNode);

  // Create and append a new table cell (td) for the last name
  let lastNameNode = document.createElement("td");
  lastNameNode.innerHTML = lastName; // Fixed typo with 'LastNameNode'
  newTableRow.append(lastNameNode);

  // Create and append a new table cell (td) for the favorite color
  let favoriteColorNode = document.createElement("td"); // Fixed typo in 'favoriteColorNode'
  favoriteColorNode.innerHTML = favoriteColor; // Assign favoriteColor to innerHTML
  newTableRow.append(favoriteColorNode);

  // Append the new row to the table body
  document.getElementById("tBody").appendChild(newTableRow);

  // Reset the input fields
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("favoriteColor").value = ""; // Fixed typo in 'favoriteColor'

  // Increment the number for the next row
  number++;
});
