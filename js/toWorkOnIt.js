//לבדוק למה לא עובד
//מציג את כל המוקשים בסיום המשחק
  function renderCellmine(indexes, value) {
    for (var I = 0; I < numberOfMines; I++) {
      // console.log('(`${indexes[I].i},${indexes[I].j}`) from renderCellmine',`cell-${indexes[I].i}-${indexes[I].j}`);
    var elCell = document.querySelector(`.cell-${indexes[I].i}-${indexes[I].j}`) //!CHECK WHY NOT WORKING
    // var elCell = document.querySelector('.lives') //!IS WORKING
    // var elCell = document.querySelector(`.mine`)
    elCell.innerHTML = value
    }
    // return elCell
    return
  }



   
//   function hint(){
//     gCountInvertedTiles++
//  console.log('gCountInvertedTiles from hint function ',gCountInvertedTiles)

//  document.querySelector('.mine').style.backgroundColor = "#AA0000";

//     }


//רק אם לא לחצנו על הפצצה הוא יסמן אותה בצבע אדום-לבדוק למה הוא לא מקיים את התנאי
    //  function hint(){
    // var currCellHint
    // for (var i = 0; i < boardSize; i++) {
    //     for (var j = 0 ; j < boardSize ; j++) {
    //          currCellHint = gBoard[i][j]
    
    // if (!currCellHint[i][j].isShowed )  document.querySelector('.mine').style.backgroundColor = "#AA0000";
    
      
    //     }
    // }
          
    // }