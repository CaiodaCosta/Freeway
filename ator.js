// Configurações de ator

let xAtor = 110;
let yAtor = 370;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){  
  image(imagemDoAtor,xAtor ,yAtor,30,30 );
}

function movimentaAtor(){

  if (keyIsDown(UP_ARROW)){
    yAtor -=3}
  if (keyIsDown(DOWN_ARROW)){
    if (atorPodeSeMover()){
    yAtor += 3
    }
  }
}

//collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
function verificaColisao(){
    for (let i = 0; i< imagemCarros.length; i++) 
                                                {
 colisao = collideRectCircle(xCarros[i], yCarros[i], comprimentoCarro, alturaCarro, xAtor, yAtor, 15)
  if (colisao) {
    somDaColisao.play();
voltaAtorPosInicial();
 if (pontosMaiorQueZero()){ 
   meusPontos -=1;
         } 
      }
   }
}
    
function voltaAtorPosInicial(){
  yAtor = 370
}
function mostraPontos(){
  fill(color(255,240,0))
  textSize(25)
  text(meusPontos, width / 5, 27)
}
function marcaPonto(){
  if (yAtor < 15){
    meusPontos +=1;
    voltaAtorPosInicial();
    somDosPontos.play();
  }
}
function pontosMaiorQueZero(){
 return meusPontos > 0 ;

}
function atorPodeSeMover(){
return yAtor < 370
}






