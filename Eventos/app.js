//Evento click para el header, incluye todos los elementos del header
const header = document.querySelector("header");
    header.addEventListener("click", function (e) {
    console.log("Has clickado en " + e.target.nodeName);
    e.stopPropagation();//Esta función se coloca para que ya no se muestre el siguiente evento
});

//Evento click en el documento html completo
document.addEventListener("click", function (e) {
    console.log("Has clickado en el documento");
});

/*
Otros Eventos

- click, dblclick
- change
- drag (dragenter, dragend, dragleave, dragover, dragstart,...)
- focus
- keydown, keyup, keypress,
- mouseenter, mouseleave, mouseover, mouseup,...
- scroll
- submit

Lista completa de eventos en: https://developer.mozilla.org/en-US/docs/Web/Events

*/