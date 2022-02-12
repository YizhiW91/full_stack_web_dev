let i = 0;

function ColorChanger(){
  const myColors = ["#264653", "#2a9d8f", "#e9c46a", "#f4a261", "#e76f51"];
  let idx = 0;
  idx = i % myColors.length;
  document.querySelector("h1").style.color = myColors[idx];
  i++;
}

setInterval(ColorChanger, 1000);
