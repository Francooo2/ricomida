var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

$(enviarCorreo).click(function() {
    alert ("El correo fue enviado correctamente..."); 
});

$(".card-title").click(function() {
    $(".card-title").siblings().toggleClass( "none" );
});

var hdbl = $( "h5" ).first();

hdbl.dblclick(function() {
    hdbl.toggleClass( "dbl" );
  });

const element = document.getElementById('cambiar')
element.addEventListener('dblclick', () => {
    element.classList.toggle("dbl") 
})

