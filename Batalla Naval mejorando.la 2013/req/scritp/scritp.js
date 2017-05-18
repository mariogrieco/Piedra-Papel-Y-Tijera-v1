var $named = $('#named');
var $set_gre = $('#set_gre');
var $log_Face = $('#facebook_Log');
var $player_n = $('#player_Name');
var $requere = $('#pla1');

var user_Name;

function see_Name_Ready(){
  if ( user_Name == undefined || user_Name == "" ){
    $set_gre.css( 'color','gray');
    $set_gre.css( 'opacity',"0.3");
    $player_n.css('display','none');
    $requere.css('display','block');
  }
  else
    {
      $set_gre.css( 'color','green');
      $set_gre.css( 'opacity',"1");
      $set_gre.css('border-bottom','1px solid red');
      $requere.css('display','none');
      $player_n.css('display','block');
      $player_n[0].textContent = 'Player name set as: ' + user_Name;
      window.sessionStorage.Nombre_De_Jugador = user_Name;

    }
}
$set_gre.on('click',function(){
  if( $set_gre.css( 'color') == 'gray' ||$set_gre.css( 'color' ) == 'rgb(128, 128, 128)'){
    alert('PLEASY SET A PAYER NAME!!');
  }
  else
    {
      $set_gre[0].setAttribute('href', 'gamePlay.html');
    }
});

$named.on('click',function(){
    user_Name = prompt("Nombre de Usuario?");
    see_Name_Ready();
});

$(document).ready(function(){
  //Carga Completa
  see_Name_Ready();
});