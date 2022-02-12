//objects are hashtables
//{key:"value"} pairs

//when creating the object, the key does not have quotes for string
var carInfo =  {make: "Toyota", year: 1990};
carInfo["make"]; //when calling, using quotes

//iterate
for (key in carInfo){
  //code
  // it is unordered
}

// methods
var carInfo =  {
  make: "Toyota",
  year: 1990,
  carAlert: fucntion(){
    return this.year;
  }
};
