console.log("hello world")
const container = document.querySelector("#container")
const containerLength = 1000;

function createDiv (num) {
    
    //div dimensions
    const divLength = containerLength / num;

    for (let i = 0; i < (num * num); i++ ) {
        const div = document.createElement("div");
        div.classList.add("content");
        div.style.height = `${divLength}px`;
        div.style.width = `${divLength}px`;
        div.addEventListener("mouseover", () =>{
            div.style.backgroundColor = "blue"
        })
        container.appendChild(div);
        
    }
}


createDiv(70);


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

function removeDiv () {
    const oldDiv = document.getElementById("container");
    while (oldDiv.firstChild) {
        oldDiv.removeChild(oldDiv.lastChild);
    }
}

function breakRow() {


}