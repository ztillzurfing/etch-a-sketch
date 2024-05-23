console.log("hello world")
const container = document.querySelector("#container")

function createDiv (num) {
    for (let i = 0; i < num; i++ ) {
        const div = document.createElement("div");
        div.classList.add("content"); 
        container.appendChild(div);
        
    }
}

createDiv(40);
console.log("hello")

