const flip = document.querySelector('.flip');
const coin = document.getElementsByClassName('coin');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
function flippppp(){
  l = Array(1,0,1,0,1,0,1,1,0,1)
  x = l[Math.floor(Math.random()*l.length + 1)];
  console.log(x);
  if (x == 0){
    var text = document.createElement("H1");
    text.innerHTML = 'heads win';
    document.body.appendChild(text);
  }
  else if (x == 1) {
    var text = document.createElement("H1");
    text.innerHTML = 'tails win';
    document.body.appendChild(text);
  }
}
