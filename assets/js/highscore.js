
const highScoreList = document.getElementById("highScoreList");

const highScores = JSON.parse(localStorage.getItem("mystudents")) || [];



highScoreList.innerHTML = highScores.map( score => {
    return `<li class="high-score">${score.student}-${score.studentScore}</li>`;
}).join("");



console.log(highScores);
