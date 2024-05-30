var imagenes = ['img/peugeot_208_g4.jpg', 'img/peugeot_208_g2.jpg', 'img/peugeot_208_g1.jpg', 'img/peugeot_208_g3.jpg'];
var contador = 0;

function carrousel(contenedor) {
    let img = contenedor.querySelector('img');
    img.src = imagenes[contador];

    // Resalta la miniatura correspondiente a la imagen mostrada
    let miniaturas = document.querySelectorAll('.fotos-carr img');
    miniaturas.forEach((miniatura, index) => {
        miniatura.addEventListener('click', () => {
            contador = index;
            img.src = imagenes[index];

            // Actualiza el resaltado de las miniaturas
            miniaturas.forEach((miniatura, idx) => {
                if (idx === contador) {
                    miniatura.classList.add('seleccionada');
                } else {
                    miniatura.classList.remove('seleccionada');
                }
            });
        });
    });
    contenedor.addEventListener('click', e => {
        let tgt = e.target;
        if (tgt.closest('#prevBtn')) {
            contador--;
            if (contador < 0) {
                contador = imagenes.length - 1;
            }
        } else if (tgt.closest('#nextBtn')) {
            contador++;
            if (contador == imagenes.length) {
                contador = 0;
            }
        }
        img.src = imagenes[contador];

        miniaturas.forEach((miniatura, index) => {
            if (index === contador) {
                miniatura.classList.add('seleccionada');
            } else {
                miniatura.classList.remove('seleccionada');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    let contenedor = document.querySelector('.comprar-peugeot');
    carrousel(contenedor);
});


//1°: agregamos las imagenes en una variable de arreglo
//2°: creamos la variable contador que nos va a ir controlando en que imagen vamos
//3°: agregamos el evento click al contenedor
//4°: img es donde se van a guardar las imagenes 
//5°: el target es el elemento para el evento click. 
////  Con esto se identifica el elemento exacto del elevnto