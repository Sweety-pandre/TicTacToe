//let music = new Audio("music.mp3")

let turn =  "X"

//function to change turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X";
}

//function to check win
const checkWin = ()=>{


}

//game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element =>{
    let boxText = document.getElementsByClassName('boxText');
    element.addEventListener('click',()=>{
        if(boxText.innerText===' '){
            boxText.innerText = 'X';
            changeTurn();
            checkWin();
            document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
        }
    })
})