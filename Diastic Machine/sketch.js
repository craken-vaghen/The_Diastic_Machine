var seed_phrase;
var key;
var parole;

function preload(){
	seed_phrase = loadStrings("medias/seed.txt");
	key = loadStrings("medias/key.txt");
}

function FIND_A_WORD(character, position, start_index){
	for(start_index; start_index < parole.length; start_index++){
		if(parole[start_index][position] == character){
			return start_index;
		}
	}
}

function setup() {
	noCanvas();
	var segnalibro = 0;
	var parola;
	var poesia = '';
	
	seed_phrase = join(seed_phrase, ' ');
	parole = splitTokens(seed_phrase, " ,.!?;()[]1234567890':");
	key = split(key[0], '');

	for(lettera in key){
		segnalibro = FIND_A_WORD(key[lettera], lettera, segnalibro);
		poesia = poesia + ' ' + parole[segnalibro];
	}
	console.log(poesia);
}
