// Target all required HTML elements by their IDs
const colorInput = document.getElementById("colorInput");
const submitBtn = document.getElementById("submitBtn");
const change = document.getElementById("changecontent");

function updatePage() {
    // 1. Get the color value typed by the user (and remove extra spaces)
    const userColor = colorInput.value.trim();

    // 2. Change content and apply the 'green-text' CSS class
    change.innerHTML = `
        <h2 class="green-text">The content has been changed!</h2>
        <p class="green-text">Your new background color is applied.</p>
    `;

    // 3. Change the page background color if the input isn't empty
    if (userColor !== "") {
        document.body.style.backgroundColor = userColor;
    }
}

// Fire the updatePage function when the submit button is clicked
submitBtn.addEventListener("click", updatePage);
