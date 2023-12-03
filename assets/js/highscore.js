var backBtn = document.querySelector("#backBtn");
var clearBtn = document.querySelector("#clearBtn");


const highScoreList = document.getElementById("highScoreList");

const highScores = JSON.parse(localStorage.getItem("mystudents")) || [];



highScoreList.innerHTML = highScores.map( score => {
    return `<li class="high-score">${score.student}-${score.studentScore}</li>`;
}).join("");



backBtn.addEventListener("click", goToMain);

function goToMain(){
    location.href="/index.html";
}
console.log(highScores);

clearBtn.addEventListener("click", clearScores);

function clearScores(){
   localStorage.removeItem("mystudents");
   window.location.reload();
}


