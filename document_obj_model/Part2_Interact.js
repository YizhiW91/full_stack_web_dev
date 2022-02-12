// Try setting the content and anchor tag content

function SetSpecialAnchor(){
  var mySpecial = document.querySelector("#special");
  var mySpecAnchor = mySpecial.querySelector("a");
  mySpecAnchor.textContent = "Staples Link";
  mySpecAnchor.setAttribute("href", "http://www.staples.com");
}

SetSpecialAnchor()
