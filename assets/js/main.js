const menu = document.querySelector("ul.nav--menu")
const icon = document.getElementById("menu-icon")
const toast = document.querySelector(".toast")

//eventListeners

// elemento.addEventListener( "evento", () =>{ esto es lo que se va a ejecutar cuando el "evento" sea detectado sobre el elemento } )

icon.addEventListener( "click", () => menu.classList.toggle( "visible" ))