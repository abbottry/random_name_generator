// List of all the names
var names = Array(
    "Purus Parturient",
    "Porta Tellus",
    "Vehicula Magna"
);

// Function to randomly select a name from the list above and
// it as the value of the H1 on the page
function getRandomName() {
    // Get a random name from the list
    var name = names[Math.floor(Math.random() * names.length)];

    // set the content of the html element to the name selected
    document.getElementById("name").innerHTML = name;
}