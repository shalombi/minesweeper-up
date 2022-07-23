



function  gameOver(){  
    if (gLives === 0) {
    gSmileSituation.innerText = '😜'
    gMsgSituation.innerText = 'Game Over!'

    //STOP WATCH 
    // stop()
    gIsGameOver = true
  stop()
    return
  }
  else if (gLives !==0) {
    gLives--
   lives = getLev(gLives+1)
   
gLivesStatus.innerText = lives
  
   

  } }



// function displayTheBombs(indexes){
//     for (var i = 0; i < numberOfMines; i++) {
  
//     }
//   }


function displayTheBombs(indexes){ //! SHOW THE BOMBS WHEN GAME OVER

    for (var I = 0; I < numberOfMines; I++) {
       var x = indexes[I].i
         var y = indexes[I].j
    
    
    // renderCell(x,y,'💣')
    console.log(indexes[I]);
    renderCell(indexes[I].i, indexes[I].j, '💣')
    }
    }  
    



  //תנאי ניצחון
  
function checkWin(){
// IF CLICKED SHOWS EMPTY CELL - NOTE:it's include at conditionToWiC in this page
var conditionToWinA =  gCountInvertedTiles === boardSize**2 - numberOfMines &&  gMarkedWereWasAmine === numberOfMines // marked === mines
// IF THE PLAYER PUT FLAGS AT EXACT TILE
var conditionToWiB = gCountInvertedTiles === boardSize**2 - numberOfMines
// IF CLICKED SHOWS A NUMBER AND NOT EMPTY CELL (NUMBER-LET INDICITION ON BOMBS SOROUNDING THE TILE CLICKED)
var conditionToWiC = gCountInvertedTiles === boardSize**2 - numberOfMines - numberOfNumIndicationOfBomb


if (conditionToWinA || conditionToWiB || conditionToWiC) {
    gSmileSituation.innerText = '😎'
    gMsgSituation.innerText = 'WIN!'
    gIsGameOver = true
    stop()
    return

}
}

