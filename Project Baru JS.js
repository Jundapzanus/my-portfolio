function updateTime() {
    // Get the current date and time
    var now = new Date();

    // Format the date and time
    var date = now.toLocaleDateString(); // e.g., "9/4/2024"
    var time = now.toLocaleTimeString(); // e.g., "10:30:15 AM"

    // Display the date and time in the element with id "currentTime"
    document.getElementById('currentTime').innerText = date + ' ' + time;
}

// Call updateTime every second to keep the time updated
setInterval(updateTime, 1000);

// Initial call to display the time immediately when the page loads
updateTime();

function showAlert(message) {
    alert(message);
}