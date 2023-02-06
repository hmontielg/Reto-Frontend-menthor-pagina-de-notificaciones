const notificaciones = document.querySelector ('#tres')
const usuarios = document.querySelectorAll ('div')
const marcarLeidos = document.querySelector ('#perion')
const puntitos = document.querySelectorAll('span')
const unread = document.querySelector('#blue')
let redDot = document.querySelector('#punto')


marcarLeidos.addEventListener("click", (e) => {
    e.preventDefault();  
    
    puntitos.forEach(span => span.classList.remove('punto'))
    usuarios.forEach(div => div.classList.remove('blue'))
    notificaciones.textContent = 0 })


unread.addEventListener("click", () => {
unread.classList.remove('blue')
notificaciones.textContent = 2
redDot.classList.remove('punto')
})

