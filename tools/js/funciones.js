/*Arcchivo Javascript para la pagina servicios*/

//Creacion de un arreglo con las imagenes
let services = new Array();
   
    services[0]='tools/images/serviciosManufactura.jpg';
    services[1]='tools/images/serviciosComercio.jpg';
    services[2]='tools/images/serviciosTI.jpg';
    
//Cambiar el texto al texto del servicio de manufactura 
    function changeManufactura() {

        imagen.src = services[0]; //Cambiar la imagen

        document.getElementById('titleM').innerHTML = 'Manufactura';

        document.getElementById('parr1').innerHTML = 'En las empresas de manufactura, SPE le puede ayudar a identificar su';
    
        document.getElementById('parr2').innerHTML =   'cadena productiva de valor, analizar sus líneas de producción y mejorar';
    
        document.getElementById('parr3').innerHTML =   'sus sistemas de calidad. Contamos con consultores capacitados en';
    
        document.getElementById('parr4').innerHTML =   'diversos estándares de la industria, como ISO 9000, ISO 14000,';
    
        document.getElementById('parr5').innerHTML =   'Lean Manufacturing, Kanban, etc. Conocemos y aplicamos las mejores';
    
        document.getElementById('parr6').innerHTML =   'prácticas con respecto a manejo de inventarios, producción,';
    
        document.getElementById('parr7').innerHTML =   'proveeduría y procesos de distribución.';

        document.getElementById('parr8').innerHTML =   '';  
        
    }

    //Cambiar el texto al texto del servicio de comercio
    function changeComercio() {
    
        imagen.src = services[1]; //Cambiar la imagen

        document.getElementById('titleM').innerHTML =  'Comercio';

        document.getElementById('parr1').innerHTML =   'Si su organización se dedica al comercio, podemos ayudarle. Nuestros' ;
       
        document.getElementById('parr2').innerHTML =   'expertos conocen sobre redes de distribución, análisis de ventas,';

        document.getElementById('parr3').innerHTML =   'tendencias del mercado, campañas de mercadotecnia y revisión del';

        document.getElementById('parr4').innerHTML =   'servicio al cliente. Sabemos cómo crear la campaña de marketing que';

        document.getElementById('parr5').innerHTML =   'su organización necesita. Además, tenemos consultores y asesores que';
    
        document.getElementById('parr6').innerHTML =   'dominan el mundo de la logística y el transporte de materiales,  así ';

        document.getElementById('parr7').innerHTML =   'como las cuestiones fiscales y regulatorias para cualquier punto de ';  
        
        document.getElementById('parr8').innerHTML =   'venta.';  
    }

    //Cambiar el texto al texto del servicio de tecnologías de la información
    function changeTI() {

        imagen.src = services[2]; //Cambiar la imagen

        document.getElementById('titleM').innerHTML =  'Tecnologías de la información';

        document.getElementById('parr1').innerHTML =   'En el giro de las tecnologías de la información, SPE le puede apoyar' ;
       
        document.getElementById('parr2').innerHTML =   'en aplicar la estrategia tecnológica más conveniente, así como guiar';

        document.getElementById('parr3').innerHTML =   'implementaciones de sistemas informáticos, ERP y otras herramientas ';

        document.getElementById('parr4').innerHTML =   'que le permitan aprovechar al máximo los recursos organizacionales. ';

        document.getElementById('parr5').innerHTML =   'Contamos también con expertos en el diseño de infraestructura  ';
    
        document.getElementById('parr6').innerHTML =   'tecnológica y de telecomunicaciones, para sugerirle la opción que ';

        document.getElementById('parr7').innerHTML =   'mejor se adapte a sus necesidades.';  
        
        document.getElementById('parr8').innerHTML =   '';  
        
    }

    //Seleccionar una opción dependiendo cual es seleccionada se ejecutara una función
    function changeImg(which){
    
        /* imagen.src = services[document.formServices.selectbox.selectedIndex]; //Cambiar la imagen */

        console.log(document.formServices.selectbox.selectedIndex);

        if ( document.formServices.selectbox.selectedIndex == 0 ) {
            changeManufactura();
        }
         
        if ( document.formServices.selectbox.selectedIndex == 1 ) {
            changeComercio();
        }

        if ( document.formServices.selectbox.selectedIndex == 2 ) {
             changeTI();
        }
     
        }