const tds = document.querySelectorAll("td");
const type = 'click';
const resetBtn = document.querySelector("#resetBtn")
let counter = 0;

function addListener(eleArray, inType, listener){
  eleArray.forEach(function(ele) {ele.addEventListener(type, listener)});
}

function clearBoard(){
  tds.forEach((ele) => {ele.textContent=''});
  counter = 0;
}

function boardClickListener(event){
  const content = event.target.textContent;
  if (content === ''){
    var target = (counter % 2 === 0) ? 'X' : 'O';
    event.target.textContent = target;
    counter++;
  }else{
    alert("Please click on a blank slot!")
  }

  if(checkWin(target)){
    clearBoard();
  }
}

function checkRow(targetValue){
  let map = new Map();
  for(const ele of tds){
    if(!map.has(ele.closest("tr").rowIndex)){
      map.set(ele.closest("tr").rowIndex, true)
    }
    if(ele.textContent !== targetValue){
      map.set(ele.closest("tr").rowIndex, false);
    }
  }

  for(const [k, v] of map.entries()){
    if(v){
      alert("You win, on row " + k);
      return true;
    }
  }
  return false;
}

function checkCol(targetValue){
  let map = new Map();
  for(const ele of tds){
    if(!map.has(ele.cellIndex)){
      map.set(ele.cellIndex, true)
    }
    if(ele.textContent !== targetValue){
      map.set(ele.cellIndex, false);
    }
  }

  for(const [k, v] of map.entries()){
    if(v){
      alert("You win, on col " + k);
      return true;
    }
  }
  return false;
}

function checkDiag(targetValue){
  var center_cond = (targetValue === tds[4].textContent);
  var diag1_cond = (targetValue === tds[0].textContent) && (targetValue === tds[8].textContent) && center_cond;
  var diag2_cond = (targetValue === tds[2].textContent) && (targetValue === tds[6].textContent) && center_cond;
  if (diag1_cond || diag2_cond){
    alert("You win!");
    return true;
  }
  return false;
}

function checkWin(value){
  const cellCurrValue = value;
  return checkRow(cellCurrValue) || checkCol(cellCurrValue) || checkDiag(cellCurrValue);
}

function btnClickListener(event){
  clearBoard();
}

addListener(eleArray=tds, inType=type, listener=boardClickListener);
resetBtn.addEventListener('click', btnClickListener);
