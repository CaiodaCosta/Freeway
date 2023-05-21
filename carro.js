

// códigos do carro
let yCarros = [45,96,150, 210, 270, 318]
let velocidadeCarros = [2, 2.5, 3.2, 2.2, 3.5, 4];
let xCarros = [600, 600, 600, 600, 600, 600]
let comprimentoCarro = 40;
let alturaCarro = 40;


function mostraCarro(){
  for (let i = 0; i < imagemCarros.length;i++){
    image(imagemCarros[i],xCarros[i], yCarros[i],comprimentoCarro, alturaCarro);}
    
  //image(imagemDoCarro1, xCarros[], 45,45, 35);
  //image(imagemDoCarro1, xCarros[], 45,45, 35);
}

function movimentaCarro(){
  for(let i = 0; i < imagemCarros.length; i++)
  
 xCarros[i] -= velocidadeCarros[i];


}

function voltaPosicaoInicialCarro(){
  for (let i = 0; i< imagemCarros.length; i++)
  if (passouTodaTela(xCarros[i]))
    xCarros[i] = 600
 
  }
function passouTodaTela(xCarros){
  
  return xCarros < -50
  
}

