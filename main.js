// HACER APARECER EL MODAL HACIENDO CLICK EN EL MENU HAMBURGUESA

const hamburguesa = document.querySelector(".header__hamburguer");
const modalHamburguesa = document.querySelector(".header__background");
const close = document.querySelector(".header__close");


hamburguesa.addEventListener("click", ()=>{
    modalHamburguesa.classList.toggle("active"); 
});

close.addEventListener("click", ()=>{
    modalHamburguesa.classList.toggle("active");
});


// INCREMENTAR EL NÜMERO DE ARTICULOS SELECCIONADOS
const menos = document.querySelector(".second__section-menos");
let numeroContador = document.querySelector(".second__section-contador2");
const mas = document.querySelector(".second__section-mas");

let contador = 0;

menos.addEventListener("click", ()=>{
    contador--;
    if(contador>=0){
        contador == 0;
        numeroContador.innerText = contador;
        console.log(contador)
    }
    
});

mas.addEventListener("click", ()=>{
    contador++;
    numeroContador.innerText = contador;
    console.log(contador)
});


// AGREGAR EL NÚMERO CUANDO SE HACE CLICK EN EL BOTON

const boton = document.querySelector(".btn");
let numeroCarrito = document.querySelector(".header__carrito-numero");
let actualizarPreciosModal = document.querySelector(".modal__carrito-parrafo2");
let ultimoValor = parseInt(numeroCarrito.innerText);

boton.addEventListener("click",()=>{
    ultimoValor = ultimoValor + contador;
    
    numeroCarrito.innerText = ultimoValor;
    numeroCarrito.style.display = "block";
    actualizarPreciosModal.innerHTML= `
    <p class="modal__carrito-parrafo2">$125.00 x ${ultimoValor} <span class="span-modal">$${125*ultimoValor}</span></p>
    `
});





// ABRIR EL MODAL DEL CARRITO
const modalCarrito = document.querySelector(".modal__carrito");
const carrito = document.querySelector(".header__carrito");
const papelera = document.querySelector(".modal__carrito-papelera");
const precios = document.querySelector(".modal__carrito-div");


carrito.addEventListener("click",()=>{
    modalCarrito.classList.toggle("active");
    
});


papelera.addEventListener("click", ()=>{
    modalCarrito.style.height= "235px";
    precios.innerHTML = `<p class="info-empty">Your cart is empty</p>`;
    numeroCarrito.innerText= 0;
    
});


// CAMBIAR LAS IMAGENES EN MODO CARRUSEL AL DAR CLICK A LOS BOTONES.
let imageBackground = document.querySelector(".first__section-background");
const btnAtras = document.querySelector(".first__section-mas");
const btnDelante = document.querySelector(".first__section-menos");
let indexImage = 1;


btnDelante.addEventListener("click", ()=>{
   delanteBtn(imageBackground);
});

btnAtras.addEventListener("click", ()=>{
    atrasBtn(imageBackground);
    console.log("click")
});


// MOSTRAR EL MODAL DE LAS IMAGENES EN EL FORMATO DESKTOP AL HACER CLICK EN LA IMAGEN.
const modalImages = document.querySelector(".modal__imagenes");
let modalImg = document.querySelector(".modal__imagenes-background");
const closeModal = document.querySelector(".modal__imagenes-img");
const modalAtras = document.querySelector(".modal__imagenes-mas");
const modalDelante = document.querySelector(".modal__imagenes-menos");

imageBackground.addEventListener("click", ()=>{
    modalImages.style.display = "flex";
    
});

closeModal.addEventListener("click", ()=>{
    modalImages.style.display = "none";
});


modalDelante.addEventListener("click", ()=>{
    atrasBtn(modalImg);
 });
 
 modalAtras.addEventListener("click", ()=>{
     
     delanteBtn(modalImg);
 });


 // CAMBIAR LAS IMAGENES DE LOS THUMBAILS AL HACER CLICK EN ELLOS.
 let thumbails = document.querySelectorAll(".first__section-tumbails");
 let modalThumbails = document.querySelectorAll(".modal__imagenes-tumbails");
 thumbails = [...thumbails];
 
 thumbails.forEach(thumbail =>{
    thumbail.addEventListener("click", (event)=>{
        imageBackground.style.backgroundImage = `url(./images/image-product-${event.target.id}.jpg)`;
    });
 });

 
 modalThumbails = [...modalThumbails];
 modalThumbails.forEach(modalThumbail =>{
    modalThumbail.addEventListener("click", event =>{
        modalImg.style.backgroundImage = `url(./images/image-product-${event.target.id.slice(-1)}.jpg)`;
    })
 });




// FUNCIONES

function delanteBtn(imageBackground){
    indexImage ++;
    if(indexImage === 4){
        indexImage = 1;
    }
    imageBackground.style.backgroundImage = `url(./images/image-product-${indexImage}.jpg)`;
}

function atrasBtn(imageBackground){
    indexImage --;
    if(indexImage === 1){
        indexImage = 4;
    }
    imageBackground.style.backgroundImage = `url(./images/image-product-${indexImage}.jpg)`;
}
