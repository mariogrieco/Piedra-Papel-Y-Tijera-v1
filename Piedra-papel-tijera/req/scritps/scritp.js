var $piedra 		= document.getElementById("piedra");
var $papel 			= document.getElementById("papel");
var $tijera 		= document.getElementById("tijera");
var $result 		= document.getElementById("result");
var $cont_player 	= document.getElementById("player_count");
var $Round 			= document.getElementById("Round");
var $selecto 		= document.getElementById("selecto");
var $cont_ordenador = document.getElementById("ordenador_count");
var player 	  		= {name:"",winCount:0,option:["piedra","papel","tijera"]};
var ordenador 		= {name:"",winCount:0,option:["piedra","papel","tijera"]};
var round     		= 0;
var option;
var pc;

$piedra.onclick = function(){
	option = 0;
	$selecto.textContent = "tu opcion es " + player.option[option];
	random_Pc();
}
$papel.onclick = function(){
	option = 1;
	$selecto.textContent = "tu opcion es " + player.option[option];
	random_Pc();
}
$tijera.onclick = function(){
	option = 2;
	$selecto.textContent = "tu opcion es " + player.option[option];
	random_Pc();
}
function Read(){
	$Round.textContent = round;
	$cont_player.textContent = player.winCount;
	$cont_ordenador.textContent = ordenador.winCount;
	if( round == 3 ){
		alert("Game Over! " + "Ordenador: "+ ordenador.winCount + "Player :" + player.winCount );
	}
}
function gamePlay(player_Option,ordenador_Option){
	Read();
	if( round < 3 ){
		if( player_Option == ordenador_Option )
			{
				console.log("NoN Winner Restar Game");
				alert("Empate, Partida anulada");
				Read();
			}
		else if( ordenador_Option == "piedra" && player_Option == "papel" ){
			player.winCount += 1;
			++round;
			Read();
		}
		else if( ordenador_Option == "papel" && player_Option == "piedra"){
			ordenador.winCount += 1;
			++round;
			Read();
		}
		else if( ordenador_Option == "papel" && player_Option == "tijera"){
			player.winCount += 1;
			++round;
			Read();
		}
		else if( ordenador_Option == "tijera" && player_Option == "papel" ){
			ordenador.winCount += 1;
			++round;
			Read();
		}
		else if( ordenador_Option == "piedra" && player_Option == "tijera"){
			ordenador.winCount += 1;
			++round;
			Read();
		}
		else if( ordenador_Option == "tijera" && player_Option == "piedra"){
			player.winCount += 1;
			++round;
			Read();
		}
		Read();
	}
	else if( ordenador.winCount > player.winCount ){
		Read();
		 alert("Ordenador WIN");
	}
	else if( ordenador.winCount == player.winCount ){
		--round;
		Read();
		alert("Dead Match");
	}
	else{
		Read();
		console.log("Player WIN");
		alert('player WIN');
	}
}
function random_Pc(){
	pc = Math.floor((Math.random() * 3) + 1);
		if( pc == 3){
			pc = 0;
			result.textContent = "BOT : " + ordenador.option[parseInt(pc)];
			Read();
		}
		else if (parseInt(pc) == 1) {
			result.textContent = "BOT : " + ordenador.option[parseInt(pc)];
			Read();
		}
		else if(parseInt(pc) == 2){
			result.textContent = "BOT : " + ordenador.option[parseInt(pc)];
			Read();
		}
		else{
			result.textContent = "BOT : " + ordenador.option[parseInt(pc)];
			Read();
		}
		gamePlay(player.option[option],ordenador.option[parseInt(pc)]);
}