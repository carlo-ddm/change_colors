const chenge_color_btn = document.getElementById('change_color');
chenge_color_btn.addEventListener('click',chenge_color);
var audio = new Audio('mixkit-water-sci-fi-bleep-902.wav')

function chenge_color() {
  audio.play();
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  console.log(randomColor);

  let color = document.body.style.backgroundColor = "#" + randomColor;
  color.innerHTML = "#" + randomColor;
  console.log(color);
}
