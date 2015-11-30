
var _ = require('lodash');
var bet = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
    ];


function lookup(n,a, positive){

 var betIndex = bet.indexOf(a) - n;

  if (betIndex < 0 ){
    betIndex += bet.length;
  }
  
  return bet[betIndex % bet.length];
}

function decodeSecret(magicWord,secret) {
	var n = secret.length;
	var secretUncoded = []
  for (var i=0;i<n;i++) {
    var magicNumber = magicWord[i%magicWord.length];
    var newletter =lookup(magicNumber, secret[i].toLowerCase(), false);
    secretUncoded.push(newletter);
  }
  return secretUncoded;
}

function magicWordtoNumbers(magicWord){
	var letterArray = magicWord.replace(/ /g,'').split('');
	var numberArray = [];
	for (var i = 0; i < letterArray.length; i++){
		numberArray.push(bet.indexOf(letterArray[i].toLowerCase()));
	}
	return numberArray;
}

function reinsertPunctuation(original, decoded){
	var originalArray = original.split('');
	var modDecoded = decoded;
	for (var i = 0; i <  originalArray.length; i++){
		if (originalArray[i].match(/[^A-Za-z0-9_]/g,'')){
			modDecoded.splice(i, 0, originalArray[i]);
		}
	}
	return modDecoded;
}

function vigenere(magicWord, text){
  var alphaL = bet.length;
  var get
  var secretArray = text.replace(/[^A-Za-z0-9_]/g,'').split('');
  var magicNumberArray = magicWordtoNumbers(magicWord);
  var decoded = decodeSecret(magicNumberArray, secretArray);
  var answer = reinsertPunctuation(text, decoded);
  return answer.join('');
};

var secretPhrase = process.argv[2];
var magicWord = process.argv[3];

console.log(vigenere(magicWord, secretPhrase));

