const input = document.getElementById("studentInput");
const list = document.getElementById("studentList");
const count = document.getElementById("count");
function updateCount() {
    count.textContent = list.children.length;
}
input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addStudent();
    }
});
function addStudent() {
    const name = input.value.trim();
    if (name === "") {
        alert("Please enter a student name.");
        return;
    }
    const li = document.createElement("li");
    const number = list.children.length + 1;
    li.innerHTML = `
        <span>${number}. ${name}</span>
        <button class="delete-btn">Delete</button>
    `;
    li.querySelector("button").addEventListener("click", function() {
        li.remove();
        updateNumbers();
        updateCount();
    });
    list.appendChild(li);

    input.value = "";
    input.focus();

    updateCount();
}
function updateNumbers() {
    [...list.children].forEach((item, index) => {
        const textSpan = item.querySelector("span");
        const parts = textSpan.textContent.split(". ");
        const name = parts.slice(1).join(". "); 
        textSpan.textContent = `${index + 1}. ${name}`;
    });
}
