// code your solution here
function superbowlWin(arrayOfGames){

  for (let gameInfo of arrayOfGames){
    if (gameInfo.result === "W") {
      return gameInfo.year
    }
    arrayOfGames.find(({result}) => result === "W")
  }
}
