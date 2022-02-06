var studentList = [];
var continueFlag = true;

function add(name){
  studentList.push(name);
}

function display(){
  console.log(studentList);
}


while (continueFlag){
  var selection = prompt("please select add, remove, display or quit.");
  switch(selection){
    case 'add':
      var name = prompt("input student name");
      add(name);
      break;
    case 'remove':
      var name = prompt("input student name");
      studentList.filter((ele) => {ele !== name});
      break;
    case 'display':
      display();
      break;
    case 'quit':
      continueFlag = false;
      break;
    default:
      prompt("only support operation: add, remove, display or quit. Plz select again");
    }
}
