
const imagenes = document.querySelectorAll('.galeria .contenedor-imagen')
const imagenModal = document.getElementById("imagen-modal");


imagenes.forEach((img)=>{

    img.addEventListener('click', ()=> {

        const ruta = img.querySelector('img').src
        imagenModal.src = ruta
    })

})



