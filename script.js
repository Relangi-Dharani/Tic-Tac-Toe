const playButton = document.querySelector(".play-button");
const backButton = document.getElementById("back-button");
const mainHeading = document.querySelector(".main-heading");
const reset = document.getElementById("reset");
const boxes = document.querySelectorAll(".boxes");

let turn = "X";
let isgameover = false;
function openGame() {
  document.querySelector(".popup-game").style.display = "block";
  mainHeading.style.display = "none";
}

backButton.addEventListener("click", () => {
  gameReset();
});

backButton.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  document.querySelector(".won-info").innerText = "";
  turn = "X";
  isgameover = false;
  closeGame();
});

function closeGame() {
  document.querySelector(".popup-game").style.display = "none";
  mainHeading.style.removeProperty("display");
}

playButton.addEventListener("click", () => {
  openGame();

  // gameLogic();
});

// function gameLogic() {
//   Array.from(boxes).forEach((element) => {
//     element.addEventListener("click", () => {
//       const boxtext = document.querySelector("boxtext");
//       if (boxtext.innerText == "") {
//         boxtext.innerText = turn;
//         console.log(boxtext);
//       }
//     });
//   });
// }

console.log(boxes);
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

function mark(item, index, arr) {
  const boxtext = document.querySelectorAll(".boxtext");
  item.addEventListener("click", () => {
    if (boxtext[index].innerText === "") {
      boxtext[index].innerText = turn;
      turn = changeTurn();
      random();
      gameReset();
    }
  });
}
boxes.forEach(mark);

function random() {
  const boxtext = document.querySelectorAll(".boxtext");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      document.querySelector(".won-info").innerText =
        "Player" + boxtext[e[0]].innerText + " Won";
      isgameover = true;
    }
  });
}

function gameReset() {
  reset.addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach((element) => {
      element.innerText = "";
    });
    document.querySelector(".won-info").innerText = "";
    turn = "X";
    isgameover = false;
  });
}
