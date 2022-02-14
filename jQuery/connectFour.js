let roundCount = 0;
const colNum = 7;
const rowNum = 6;
// set myMap col:currDepth
let myMap = new Map;
for(var i = 0; i < colNum; i ++ ){
  myMap.set(i, rowNum-1);
}

function increCount(){
  roundCount ++;
}

function updateInstruction(){
  if (roundCount%2===0) {
    $("#instruction").text("Player Two: Your turn, pick a column to drop your red chip");
  }else{
    $("#instruction").text("Player One: Your turn, pick a column to drop your blue chip");
  }
}

function getCurrChip(){
  return (roundCount%2===0) ? "blueChip" : "redChip";
}

function setChip(colIdx, depth){
  let tempStr = `.board tr:eq(${depth}) td:eq(${colIdx}) button`;
  $(tempStr).addClass(getCurrChip());
}

function dropChip(colIdx){
  setChip(colIdx, myMap.get(colIdx));
}

function updateDepth(colIdx){
  myMap.set(colIdx, myMap.get(colIdx)-1);
}

function checkHoriWin(colIdx, depth){
  if(colIdx + 3 < colNum){
    var ifWin = true;
    for(var i=colIdx; i<=colIdx+3; i++){
      ifWin &= $(`.board tr:eq(${depth}) td:eq(${i}) button`).hasClass(getCurrChip());
    }
    if(ifWin){
      return true;
    }
  }
  if (colIdx - 3 >= 0){
    var ifWin = true;
    for(var i=colIdx; i>=colIdx-3; i--){
      ifWin &= $(`.board tr:eq(${depth}) td:eq(${i}) button`).hasClass(getCurrChip());
    }
    if(ifWin){
      return true;
    }
  }
  return false;
}

function checkVertWin(colIdx, depth){
  if(depth + 3 < rowNum){
    var ifWin = true;
    for(var i=depth; i<=depth+3; i++){
      ifWin &= $(`.board tr:eq(${i}) td:eq(${colIdx}) button`).hasClass(getCurrChip());
      // console.log(`.board tr:eq(${i}) td:eq(${colIdx}) button`);
    }
    if(ifWin){
      return true;
    }
  }
  if (depth - 3 >= 0){
    var ifWin = true;
    for(var i=depth; i>=depth-3; i--){
      ifWin &= $(`.board tr:eq(${i}) td:eq(${colIdx}) button`).hasClass(getCurrChip());
    }
    if(ifWin){
      return true;
    }
  }
  return false;
}

function checkDiagWin(colIdx, depth){
  if(colIdx - 3 >= 0 && depth +3 < rowNum){
    var ifWin = true;
    for(var i=0; i<=3; i++){
      ifWin &= $(`.board tr:eq(${depth+i}) td:eq(${colIdx-i}) button`).hasClass(getCurrChip());
    }
    if(ifWin){
      return true;
    }
  }
  if (colIdx + 3 < colNum && depth - 3 >= 0){
    var ifWin = true;
    for(var i=0; i<=3; i++){
      ifWin &= $(`.board tr:eq(${depth-i}) td:eq(${colIdx+i}) button`).hasClass(getCurrChip());
    }
    if(ifWin){
      return true;
    }
  }
  return false;
}

function checkWin(colIdx){
  var currDepth = myMap.get(colIdx);
  if (checkVertWin(colIdx, currDepth) || checkHoriWin(colIdx, currDepth) || checkDiagWin(colIdx, currDepth)){
    alert("You win!");
  }
}


//add onclick action for top row
$(".board tr:eq(0) td").click(function(){
  var colIdx = $(this).index();
  dropChip(colIdx);
  checkWin(colIdx);
  updateDepth(colIdx);
  updateInstruction();
  increCount();
});
