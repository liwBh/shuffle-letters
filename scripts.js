
let texto = $("#texto");

// crea la inimacion en el texto al carga pagina
window.onload = () => {
  texto.shuffleLetters();
}

// crear animacion con el texto ingresado en un input
let textoInput = $("#textoInput");//input

let container = $("#contendorTexto");//contendor


//el evento de keypress devuelve el codigo de la tecla presionada
textoInput.on("keypress", (e) => { 
  //console.log(e.keyCode);

  if(e.keyCode === 13){// codigo 13 es igual a tecla enter
    container.shuffleLetters({
      "text": textoInput.val()
    });
  }
});


//carrousel de texto
const mensaje = ["Bienvenido a mi pagina.","Esperamos poder ayudarte.","Gracias por tu preferencia."];
let indice = 0;
let carrousel = $("#carrousel");
// funcion que se ejecuta por intervalos de tiempo
setInterval(() => {

  indice++;

  //reseteo del indice
  if(indice === mensaje.length){
    indice = 0;
  }

  carrousel.shuffleLetters({
    "text": mensaje[indice]
  });

}, 3000);