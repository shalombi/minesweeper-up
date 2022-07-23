'use-strict';
////
const GAME_FREQ = 1000;
const LIFE = '🎃';
const SUPER_LIFE = '';
const TILE='⬛️'
const BOMB = '💣'

// TILE_STATUSES
HIDDEN='hidden'
var numberOfMines =3
var boardSize = 4
// The Model
var gBoard;
var gGameInterval = 0
var gBombs
// FOR GAME OVER FUNCTION
gIsGameOver = false
gLives = 2 
var gSmileSituation = document.querySelector(".btn")
var gMsgSituation = document.querySelector(".msg")
var gLivesStatus = document.querySelector(".lives")
// FOR COUNTER TILES INVERTED
var gCountInvertedTiles = 0
var gMarkedWereWasAmine = 0
//INDEX OF MINES
var gIndexMines
// stop watch
var gIsGaming = false
var gWatchIsStartAlready = false
//(NUMBER-LET INDICITION ON BOMBS SOROUNDING THE TILE CLICKED)
var numberOfNumIndicationOfBomb = 0


function init() {
    gBoard = createBoard();
    renderBoard(gBoard)
    // if (gGameInterval) clearInterval(gGameInterval)
    // play()



}

function toggleGame(elBtn){
    if(gGameInterval){
        clearInterval(gGameInterval)
        gGameInterval = 0
        elBtn.innerText = 'Resume Game'
    } else {
        gGameInterval = setInterval(play, GAME_FREQ);
        elBtn.innerText = 'Pause Game'
    }
}

function play() {
    // gBoard = runGeneration(gBoard);
    gBoard
    renderBoard(gBoard);
}



function createBoard() {
    gBombs = createBombs()
    var board = [];
     gIndexMines = []
    for (var i = 0; i < boardSize; i++) {
        const row = []

        for (var j = 0; j < boardSize; j++) {
            // board[i][j] = (Math.random() > 0.5) ? LIFE : ''
            //  (gBombs[x*boardSize+j] === 1)?  
      
             const element = document.createElement('div')
   
             element.dataset.status = HIDDEN
            
             if (gBombs[i*boardSize+j] === 1) {
           var tile = {
               element,
               i,
               j,
               mine:1,
               status:'hidden',
               negs:0,
               isShowed:false,
               tileBoard : TILE,
               indexMines:{i,j},
               isTileMarked:false,
             }
        
            
        row.push(tile);
        gIndexMines.push(tile.indexMines)
               }
               else
               {
                 var tile = {
                   element,
                   i,
                   j,
                   mine:null,
                   status:'hidden',
                   negs:0,
                   isShowed:false,
               tileBoard : TILE,
               isTileMarked:false,


                 }
        row.push(tile);
               
               }




        }
        board.push(row);
    }
    console.log(gIndexMines);
    console.log(board);
    return board;
}



function renderBoard(board) {
    console.table(board)

    var strHTML = ''
    for(var i = 0; i < board.length; i++){

        strHTML += '<tr>\n'
        
        for(var j = 0; j < board[i].length; j++){
            var strClass = board[i][j] ? 'occupied' : ''
            strHTML += `
                \t<td 
                    class="${strClass}"
                    data-i="${i}" data-j="${j}" 
                    oncontextmenu = "markTile (this,${i}, ${j})"
                    onclick="cellClicked(this,${i}, ${j})">
                        ${board[i][j].tileBoard}
                </td>\n
            `
        }
        strHTML += '</tr>\n'
    }
    var elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML
}



function createBombs(){
    var bombs = []
   for (var index=0;index<boardSize**2;index++){
    bombs.push(0);
   }

   for (var bomb=0 ;bomb<numberOfMines;bomb++){
    var place = getRandomInt(0,boardSize**2-1);
    
    while (bombs[place]=== 1 ){ 
     place = getRandomInt(0,boardSize**2-1)
    }

    bombs[place]=1;
   }
   return bombs
}





function runGeneration(board) {
    var newBoard = copyMat(board)

    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[0].length; j++) {

            var numOfNeighbors = countNeighbors(i, j, board)

            // if ((numOfNeighbors > 2) && (numOfNeighbors < 6)) {
            //     if (board[i][j] === '') newBoard[i][j] = LIFE;
            // // }
            // else if (board[i][j] === LIFE) newBoard[i][j] = '';
        }
    }
    return newBoard;
}

function countBombs(cellI, cellJ, mat) {
    var bombsCounter = 0;
    var notAconditionToCountNegs = (i === cellI && j === cellJ)

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;

        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            // if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            if (gBoard[i][j].mine === 1 && !notAconditionToCountNegs) {
                // console.log("warning!! in this area ther is a mine")
                bombsCounter++
            }
        }
    }
    return bombsCounter;
}

// var aBombArea = countBombs(cellI, cellJ, mat) 
// if (aBombArea) console.log(`EXACT NUMBER OF BOMBS IN THIS AREA IS ${aBombArea}` );


//MARK WITCK RIGHT CLICK
function markTile(elCell, cellI, cellJ){
    if (gIsGameOver ) return
    var currCell = gBoard[cellI][cellJ]


    if (!currCell.isShowed ) {
//   
   currCell.isTileMarked = true
     gBoard[cellI][cellJ] ='🚩'
        // Update the DOM
        elCell.innerText = '🚩'
           // Update the status of Showed 

        if (currCell.mine === 1) gMarkedWereWasAmine ++

        checkWin()
    }

}




    // if( currCell.isMarked === true || currCell.tileBoard === TILE ) {



function cellClicked(elCell, cellI, cellJ){
    gIsGaming= true
     if (gIsGameOver ) return 
     startStopWatch()
    // blowUpNegs(gBombs, 0, 0)//!! it's bombs negs - IS WORKING - IS WORKING - IS WORKING - IS WORKING
    // console.log('gIndexMines',gIndexMines);
    // displayTheBombs(gIndexMines)

    var aBombArea = countBombs(cellI, cellJ, gBoard) 
    var currCell = gBoard[cellI][cellJ]

    if (aBombArea  && !currCell.mine) {
    console.log(`EXACT NUMBER OF BOMBS IN THIS AREA IS ${aBombArea}` );
    
    gBoard[cellI][cellJ] = aBombArea
    elCell.innerText =aBombArea
    numberOfNumIndicationOfBomb++
    console.log('numberOfNumIndicationOfBomb',numberOfNumIndicationOfBomb); 
    }


    //    renderCell(cellI,cellJ,aBombArea)  //!LEARN TO USE USER RENDER WORKING
    // console.log('countNegs',countMines);



  currCell = gBoard[cellI][cellJ]

    if( currCell.tileBoard === TILE &&  currCell.mine !== 1 ) {

  


        console.log('TILE!!');
        // Update the model
        gBoard[cellI][cellJ] =''
     
        // Update the DOM
        elCell.innerText = ''
           // Update the status of Showed 
           currCell.isShowed = true  //! CHECK IF THERE IS A BUG IN COUNTER OF TILES 
        gCountInvertedTiles++
        console.log(gCountInvertedTiles);
        checkWin()
    }
    // CHECK IF THERE IS A MINE
    if(currCell.mine === 1){
        console.log( ' is a mine!!!');
           // Update the model
           gBoard[cellI][cellJ] = BOMB
           // Update the DOM
           elCell.innerText = BOMB
             // Update the status of Showed 
        currCell.isShowed = true 

           gameOver()
    }



}




// blowUpNegs(gBombs, 2, 2)
function blowUpNegs(mat, cellI, cellJ){

    for (var i = cellI - 1; i <= cellI + 1; i++) {
        if (i < 0 || i >= mat.length) continue;

        for (var j = cellJ - 1; j <= cellJ + 1; j++) {
            if (i === cellI && j === cellJ) continue;
            if (j < 0 || j >= mat[i].length) continue;
            
            if(mat[i][j] === SUPER_LIFE) continue
            
            // Update Model
            mat[i][j] = ''

            // Update DOM
            var selector = `[data-i="${i}"][data-j="${j}"]`
            var elCell = document.querySelector(selector)

            elCell.innerText = ''
            elCell.classList.remove('occupied')
            console.log("miki");
        }
    }
}



