// -----------------------DECLARACIÓN DE VARIABLES

const botonMenu = document.getElementById('toggle-menu'); //DIV BOTON DE ICONO
const menuInicial = document.getElementById('opciones');// UL LISTA DESORDENADA
let menuHamburguesa = document.getElementById('menu-hamburguesa');// IMG IMAGEN ETIQUETA
let isMenuOpen = false;





// NO DAÑAR ESTE CODIGO QUE SIRVE PERFECTAMENTE SOLO QUE HAY QUE MODIFICARLO Y YA

function desplegarMenu(){
  menuInicial.classList.toggle('opciones__mostrar');
}
  botonMenu.addEventListener('click', desplegarMenu);


  menuHamburguesa.addEventListener('click', () => {
      let src = menuHamburguesa.getAttribute('src');

      if(src === 'img/menu-hamburguesa.png'){
        menuHamburguesa.setAttribute('src', 'img/salir-menu-hamburguesa.png');
      }else if(src === 'img/salir-menu-hamburguesa.png'){
        menuHamburguesa.setAttribute('src', 'img/menu-hamburguesa.png');
      }
  })
