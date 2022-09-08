const chenge_color_btn = document.getElementById('change_color')
chenge_color_btn.addEventListener('click',chenge_color)

function chenge_color() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16);

  let color = document.body.style.backgroundColor = "#" + randomColor
  color.innerHTML = "#" + randomColor;
}
