const menuIcon = document.getElementById("menu-icon");
const popup = document.getElementById("popup");
const close = document.getElementById("close");
const alianzas = document.getElementById("menu-alianzas");
const trabajamos = document.getElementById("menu-trabajamos");
const contribuimos = document.getElementById("menu-contribuimos");
const contacto = document.getElementById("menu-contacto");

menuIcon.addEventListener("click", show);
close.addEventListener("click", hide);
alianzas.addEventListener("click", hide);
trabajamos.addEventListener("click", hide);
contribuimos.addEventListener("click", hide);
contacto.addEventListener("click", hide);

function show() {
  popup.style.display = "flex";
}

function hide() {
  popup.style.display = "none";
}
