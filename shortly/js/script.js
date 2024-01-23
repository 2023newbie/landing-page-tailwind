const btn = document.getElementById('control-btn')
const navbar = document.getElementById('navigation')

btn.addEventListener('click', function() {
  btn.classList.toggle('open')
  navbar.classList.toggle('show')
})