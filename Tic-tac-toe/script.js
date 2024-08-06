let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelectorAll("#reset-btn");
let newGameBtn = document.querySelectorAll("#new-btn");
let msgContainer = document.querySelectorAll(".msg-container");
let msg = document.querySelectorAll(".msg");

let turnO = true; // playerX, playerO

const winpatterns = [
   [0,1,2,3],
   [0,5,10,15],
   [0,4,8,12],
   [1,5,9,13],
   [2,6,10,14],
   [3,7,11,15],
   [3,6,9,12],
   [4,5,6,7],
   [8,9,10,11],
   [12,13,14,15],

];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
}

boxes.forEach((box) => {
    box.addEventListener("click", () =>{
        console.log("box was clicked");
        if (turnO) { // player O
            box.innerText = "O";
            turnO = false;
        } else { // playerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
     box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes){
     box.disabled = false;
    }
};


const showWinner = (winner) => {
       msg.innerText = `Congratulation, winner is ${winner}`;
       msgContainer.classList.remove("hide");
       disableBoxes();
};
const checkWinner = () => {
    for (let pattern of winpatterns) {

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        let pos4val = boxes[pattern[3]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "" && pos4val != "") {
            if (pos1val == pos2val == pos3val == pos4val) {
                console.log("winner," , pos1val);
                showWinner(pos1val);
                
            }
        }
    }
};





