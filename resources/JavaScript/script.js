// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')){
        document.getElementById('moon').src = './resources/images/artemis-luna-sailor-moon-sailor-venus-sailor-mercury-sailor-moon-62880def8a3cbfe45b9f7e251cb9dd23.png'
    } else {
        document.getElementById('moon').src = './resources/images/luna-sailor-moon-artemis-sailor-venus-chibiusa-sailor-moon-f2a2cedd0d9259d786bec4e6aaef2302.png'
    }
}

// Event listener for the dark mode toggle button
document.getElementById('moon').addEventListener('click', toggleDarkMode);

