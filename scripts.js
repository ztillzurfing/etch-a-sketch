console.log("hello world")
const container = document.querySelector("#container")

function createDiv (num) {
    for (let i = 0; i < num; i++ ) {
        const div = document.createElement("div");
        div.classList.add("content");
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue"
        })
        container.appendChild(div);
        
    }
}

// function hover() {
//     const hover = document.querySelectorAll("div")
//     hover.addEventListener("mouseover", () => {
//         hover.classList.add("hover");
//         div.appendChild(hover);
//     })
// }


createDiv(256);
// hover();


function newGrid (number) {

    removeDiv();
    
    divNum = squareNum(number)
    for (let i = 0; i < divNum; i++ ) {
        
        const div = document.createElement("div");
        div.classList.add("content");
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue"
        })
        container.appendChild(div);
        
    }
}

function squareNum(number) {
    return number ** 2;
}

function removeDiv () {
    const oldDiv = document.getElementById("container");
    while (oldDiv.firstChild) {
        oldDiv.removeChild(oldDiv.lastChild);
    }
}