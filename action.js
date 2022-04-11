//navbar
const botao = document.querySelector('#botao')
const nav = document.querySelector('.menu')

function ativar(){
  nav.classList.toggle('active')
}

botao.addEventListener('click', ativar) 
