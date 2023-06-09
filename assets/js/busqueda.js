$(document).ready(function() {
    
    $("#formulario").submit(function(event){
        event.preventDefault();
        let busqueda = $("#txt-busqueda").val()
        


        fetch('https://superheroapi.com/api.php/10230212972529730/search/${busqueda}')
            .then((respuesta) => respuesta.json())
            .then((data) => console.log(data))
    })
}) 