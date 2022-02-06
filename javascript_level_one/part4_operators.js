///////////
//boolean//
///////////
//greater than
3 > 2 ;

// less than
2 < 3 ;

// equality
2 == 2; //true
"string" == "string"; //true
"2" == 2; //true, javascript special behavior, js converts both to similar datatypes
"2" === 2; //false, not only compare value, but also type

true == 1; //true,  type coarsion for true and 1
true === 1; //false
false == 0; //true
false === 0; //false

null == undefined; //true
null === undefined; //false
NaN == NaN; //false

//inequality
5 !== "5" //True
5 != "5" //false, same type coarsion happening

///////////
//Logical//
///////////

//and
1 === 1 && 2===2;  //true

//or
1 === 1 || 2 === 3; //true

//not
!(1 === 1); //false
