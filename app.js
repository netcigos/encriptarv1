let textoTextareaED;
let arregloAccionEncriptar=[];
let arregloResulatadoEncriptar=[];



//Copia al portatapapeles
function copiarPortapapel()
{ 
    let elementoPresultado=document.getElementById('mensajeResultado');
    let mensajeResultado=elementoPresultado.innerText;
    console.log(mensajeResultado);
    navigator.clipboard.writeText(mensajeResultado)
    .then(() => {
      console.log('Texto copiado al portapapeles')
    })
    .catch(err => {
      console.error('Error al copiar al portapapeles:', err)
    })
  
}

 // Filtrar caracteres no permitidos durante la entrada
 function filterInput(event) {
    // Permitir solo letras minúsculas, espacio, "ñ", retroceso y borrar
    const allowedKeys = /^[a-zñ ]$/;
    const key = event.key;
    
    // Permitir las teclas "Backspace" y "Delete"
    if (key === "Backspace" || key === "Delete") {
      return true;
    }

    // Prevenir entrada si la tecla no está permitida
    if (!allowedKeys.test(key)) {
      event.preventDefault();
      return false;
    }
  }

  // Validar y corregir el contenido después de la entrada
  function validateInput(event) {
    const input = event.target.value;
    // Remover todos los caracteres que no sean permitidos
    const validInput = input.replace(/[^a-zñ ]/g, '');
    if (input !== validInput) {
      event.target.value = validInput;
    }
  }


function encriptarTexto()
{  
    //copiar al arreglo global
    
    textoTextareaED=document.getElementById('textareaED').value;
    console.log(textoTextareaED);

    arregloAccionEncriptar=Array.from(textoTextareaED);
    arregloResulatadoEncriptar=[];

    console.log(arregloAccionEncriptar);

    //Si el textarea se ingreso caracteres y no existen ningun caracter invalido se realisa la encriptacion
   
    if(textoTextareaED!='')
    {
       console.log('paso condicional');
       
       for(i=0 ; i<arregloAccionEncriptar.length; i++ )
       {
          
         arregloResulatadoEncriptar.push(matchReglaEncriptar(arregloAccionEncriptar[i]));


       }
        
        console.log(arregloResulatadoEncriptar);
        AsignarTextoElemento('mensajeTitulo',"! Mensaje Encriptado ¡");
        let textAsignar=arregloResulatadoEncriptar.join("");
        AsignarTextoElemento('mensajeResultado',textAsignar);
      
        document.getElementById('container_right__parrafoDescriptado').style.display='none';
        
    }else
    {
        document.getElementById('container_right__parrafoDescriptado').style.display='initial';
        AsignarTextoElemento('mensajeTitulo',"Ningun Mensaje Fue Encontrado");
        AsignarTextoElemento('mensajeResultado',"Ingrese un Texto para Encriptar o Desencriptar");

    }
          



}



//Funcion que machea una vocal con su correspondiente palabra secreta
function matchReglaEncriptar(item)
{ 
    let letraMatch=item;

    switch(letraMatch)
    {
       case 'a':
            letraMatch='ai';
            break;
        case 'e':
            letraMatch='enter';
            break;
        case 'i':
            letraMatch='imes';
            break;
        case 'o':
            letraMatch='ober'
            break;
        case 'u':
             letraMatch='ufat';
             break;

    }
    
    return letraMatch;

}

function desencriptarTexto()
{

   var textoResultadoDesencriptado;


    var textoTextareaED=document.getElementById('textareaED').value;
    

       
    if(textoTextareaED!='')
    {
     console.log('paso condicional');
    
     textoResultadoDesencriptado=desencriptar(textoTextareaED);       
    

     AsignarTextoElemento('mensajeTitulo',"! Mensaje Desencriptado ¡");

     var textAsignar=textoResultadoDesencriptado;

     AsignarTextoElemento('mensajeResultado',textAsignar);

     console.log(textAsignar);

     document.getElementById('container_right__parrafoDescriptado').style.display='none';


    }
    else
    {
        document.getElementById('container_right__parrafoDescriptado').style.display='initial';
        AsignarTextoElemento('mensajeTitulo',"Ningun Mensaje Fue Encontrado");
        AsignarTextoElemento('mensajeResultado',"Ingrese un Texto para Encriptar o Desencriptar");

    }
          
}


function desencriptar(texto)
{
   var textoDesencriptar=texto;
   
   let resultadoA=textoDesencriptar.replace(/ai/g,"a");
   let resultadoE=resultadoA.replace(/enter/g,"e");
   let resultadoI=resultadoE.replace(/imes/g,"i");
   let resultadoO=resultadoI.replace(/ober/g,"o");
   let resultadoU=resultadoO.replace(/ufat/g,"u");
   let resultado=resultadoU;
 
   return resultado;


}


function AsignarTextoElemento(ID,texto)
{
  let ElementoHml=document.getElementById(ID);
  ElementoHml.innerHTML=texto;


}