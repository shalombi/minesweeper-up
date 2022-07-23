
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