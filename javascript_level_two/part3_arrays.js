//array
var countries = ["USA", "Germany", "China"];

//indexing
var country = coutries[0];
countries[2] = "France";

//immutable v.s mutable
// array is mutable
country = "USA"
country[2] = "B" //cannot change the value of country, because string is immutable

//mixed array
var mixed = [true, 20, "string"];

//methods
var myArr = ['one', 'two', 'three'];
// pop the right most element
myArr.pop();
// push
myArr.push("something");
// iteration using for/of
for(ele of myArr){
  console.log(ele);
}
//iteration using for each, can be a lambda expression
myArr.forEach(alert);
