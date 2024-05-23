const container = document.querySelector("#container")

function createDiv (num) {
    for (let i = 0; i <num; i++ ) {
        const content = document.createElement("div")
        content.setAttribute("class", "content")
        container.appendChild(content);
    }
}

createDiv(16);