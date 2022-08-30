const teamsScoreList = document.querySelector(".teams-list");

const sortScoresArr = function () {
  const teamArray = JSON.parse(localStorage.getItem("teams"));
  sortedArr = teamArray.sort(function (objOne, objTwo) {
    let numOne = objOne.totalScore;
    let numTwo = objTwo.totalScore;

    if (numOne < numTwo) {
      return 1;
    }
    if (numOne > numTwo) {
      return -1;
    }
    return 0;
  });
};

let sortedArr;

const displayScoreBoard = function () {
  sortScoresArr();

  console.log(sortedArr);
  for (let i = 0; i < sortedArr.length; i++) {
    const teamScoreLi = document.createElement("li");
    teamScoreLi.classList.add("team-name");
    let scoreSpan = document.createElement("span");
    scoreSpan.classList.add("tag");
    scoreSpan.classList.add("is-black");
    scoreSpan.textContent = sortedArr[i].totalScore;
    teamScoreLi.textContent = sortedArr[i].teamName;

    teamScoreLi.appendChild(scoreSpan);

    teamsScoreList.appendChild(teamScoreLi);
  }
};

displayScoreBoard();
