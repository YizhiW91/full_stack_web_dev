var fname, lname, age, height, pname;

fname = prompt("What is your first name");
lname = prompt("What is your Last name");
age = prompt("What is your age");
height = prompt("What is your height in cm");
pname = prompt("What is your pet name");

if (fname[0].toLowerCase() === lname[0].toLowerCase()
&& age < 30 && age > 20
&& height >= 170
&& pname[pname.length - 1].toLowerCase() === "y"){
  console.log("You are a spy!");
}

alert("Thanks for the info");
