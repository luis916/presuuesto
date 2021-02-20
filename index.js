var body = document.getElementById('body');
var cambioFondo = document.getElementById('cambioFondo');
document.body.style.backgroundImage = 'url(fondo.jpg)';

function inervalo(v,seg){
    setInterval(function(){
        return body.style.backgroundImage = `url(${v})`;
    },seg);
}

inervalo('fondo2.jpg',10000);
inervalo('fondo.jpg',20000);

cambioFondo.addEventListener('click',()=>{
    if(cambioFondo.value == 1){body.style.backgroundImage = `url(fondoLindo.jfif)`;}else
    if(cambioFondo.value == 0){body.style.backgroundImage = `url(fondo.jpg)`;}
});
