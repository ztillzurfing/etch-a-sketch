const container = document.querySelector("#container");
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


createDiv(20);


function newGrid (num) {
    
    removeDiv();

    createDiv(num);
}

function removeDiv () {
    const oldDiv = document.getElementById("container");
    while (oldDiv.firstChild) {
        oldDiv.removeChild(oldDiv.lastChild);
    }
}

function buttonGrid(num) {
    let buttonNum = prompt("please input the number of cells.");
    buttonNum.isInteger;
    if (buttonNum <100) {
        newGrid(buttonNum);
    } else if (buttonNum > 100) {
        alert("Try a number below 100")
    } else {
        alert("not a number")
    }
}
const btn = document.querySelector("#btn");
btn.addEventListener("click", buttonGrid);
