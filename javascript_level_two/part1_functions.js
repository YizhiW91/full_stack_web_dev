//function format
// function name(p1,  p2){
//   code
// }

//no param
function hello(){
  console.log("hello world!");
}

//with one param
function helloYou(name="default"){
  console.log("hello " + name);
}

//with return
function formal(name="Sam", title="Sir") {
  console.log(title+ " " + name);
  return title+ " " + name;
}
