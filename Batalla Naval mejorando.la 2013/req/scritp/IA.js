var $name = $('#name');
var optionToMine;
var cuadranteUL = $('ul');
var life = 0;
var freeSpace = 0;
var mineCamp = [ [0,0,0],
                 [0,0,0],
                 [0,0,0] ];


function RandomCamp(min,max){
  optionToMine = Math.floor( Math.random() * (max - min + 1) ) + min
}

function MineCamp(){
  for (var i = 0; i < mineCamp.length; ++i) {
      for (var x = 0; x < mineCamp[i].length; ++x) {
        RandomCamp(0,1);
        mineCamp[i][x] = optionToMine;
        if (optionToMine == 1) {
          ++life;
        }
        else if ( optionToMine == 0 ) {
          ++freeSpace;
        }
      }
   }
   alert("MineCamp have " + life);
}

function BOOM(p){
  --life;
  var element =  $("."+p)
  element.css('background-color','green');
  alert('BOM!');
  if ( life == 0) {
    alert("YOU LOSE!");
    freeSpace = -1;
  }
  console.log(life);
}
function AGUA(k){
  --freeSpace;
    var element =  $("."+k)
    element.css('background-color','blue');
  alert('YOU WIN!');
  if ( freeSpace == 0) {
    alert("YOU WIN THE GAME!");
    life = -1;
  }
}

function calback_li(){
  MineCamp();
  for (var w = 0; w < mineCamp.length; ++w) {
    for (var is = 0; is < mineCamp[w].length; ++is){
        cuadranteUL[w].children[is].setAttribute('class',w+'de'+is);
         num = mineCamp[w][is];
         if (num == 1){
          cuadranteUL[w].children[is].setAttribute('onclick', 'BOOM("'+cuadranteUL[w].children[is].className.toString()+'")');
         }
         else if ( num == 0){
          cuadranteUL[w].children[is].setAttribute('onclick', 'AGUA("'+cuadranteUL[w].children[is].className.toString()+'")');
         }
    }
  }
  console.log('ALL DONE!');
}

$('document').ready(function(){
  if ( window.sessionStorage.Nombre_De_Jugador == undefined || window.sessionStorage.Nombre_De_Jugador == "") {
    location.href= 'index.html';

  }
  else{
  calback_li();
  $name[0].textContent = window.sessionStorage.Nombre_De_Jugador + " " + life;
  }
});
