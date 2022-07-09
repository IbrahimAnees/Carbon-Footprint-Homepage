// Function to open sidebar on small screens
function w3_open() {
    document.getElementById("navBar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}

// Function to close sidebar on small screens
function w3_close() {
    document.getElementById("navBar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}

// Function to close form
function close_form() {
    document.getElementById('registration-form').style.display='none'
}