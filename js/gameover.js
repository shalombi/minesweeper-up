



function  gameOver(){  
    if (gLives === 0) {
    gSmileSituation.innerText = '😜'
    gMsgSituation.innerText = 'Game Over!'

    //STOP WATCH 
    // stop()
    gIsGameOver = true
  stop()
 // MAKE ALL MINE VISIBLE IN GAME OVER

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

// gIndexMines

// displayTheBombs(gIndexMines)

// function displayTheBombs(indexes){ //! SHOW THE BOMBS WHEN GAME OVER
// // var elCell = document.querySelector('.cell ')

//     for (var I = 0; I < numberOfMines; I++) {
//       console.log(`${'I',I}`);
//        var x = indexes[I].i
//          var y = indexes[I].j
//         //  var currCell = gBoard[x][y]
//         //  gBoard[x][y] ='💣'
//          // Update the DOM
//         //  elCell.innerText = '💣'
//             // Update the status of Showed 

//     console.log(indexes[I] ,'indexes[I] from displayTheBombs');
//     renderCellmine(indexes[I].i, indexes[I].j, '💣💣💣💣')


//     }
//     }  
    



  //תנאי ניצחון
  
function checkWin(){
// IF CLICKED SHOWS EMPTY CELL - NOTE:it's include at conditionToWiC in this page
var conditionToWinA =  gCountInvertedTiles === boardSize**2 - numberOfMines &&  gMarkedWereWasAmine === numberOfMines // marked === mines
// IF THE PLAYER PUT FLAGS AT EXACT TILE
var conditionToWiB = gCountInvertedTiles === boardSize**2 - numberOfMines
// IF CLICKED SHOWS A NUMBER AND NOT EMPTY CELL (NUMBER-LET INDICITION ON BOMBS SOROUNDING THE TILE CLICKED)
var conditionToWiC = gCountInvertedTiles === boardSize**2 - numberOfMines - numberOfNumIndicationOfBomb

var conditionToWinD=  gCountInvertedTiles === (boardSize**2 - numberOfNumIndicationOfBomb - gMarkedWereWasAmine) // marked === mines


if (conditionToWinA || conditionToWiB || conditionToWiC || conditionToWinD) {
    gSmileSituation.innerText = '😎'
    gMsgSituation.innerText = 'WIN!'
    gIsGameOver = true
    stop()
    return

}
}

