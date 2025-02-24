// Function to generate a random color in hexadecimal format
function generateRandomColor() {
    let hex = Math.floor(Math.random() * 16777215).toString(16);
    return "#" + hex.padStart(6, '0');  // Ensure the hex is 6 characters long
}

// Function to set the colors for the color boxes
function setColors() {
    for (let i = 1; i <= 5; i++) {
        let color = generateRandomColor();
        document.getElementById(`color-${i}`).style.backgroundColor = color;

        // Add an event listener to copy the color to the clipboard
        document.getElementById(`color-${i}`).onclick = () => {
            copyColorToClipboard(color);
        };
    }
}

// Function to copy a color to the clipboard
function copyColorToClipboard(color) {
    navigator.clipboard.writeText(color).then(() => {
        const message = document.getElementById('message');
        message.textContent = `${color} copied!`;
        setTimeout(() => message.textContent = '', 2000); // Clear message after 2 seconds
    });
}

// Event listener for the "Generate Palette" button
document.getElementById('generate-btn').onclick = setColors;

// Initial load: generate the first color palette
setColors();
