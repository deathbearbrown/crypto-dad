
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
  var betIndex = bet.indexOf(a);

  if (positive){
    var indexsum = betIndex + n;
    if (indexsum > bet.length){
      return bet[indexsum - bet.length];
    }else{
      return bet[indexsum];
    }
  } else {
    var indexsum = betIndex - n;
    if (indexsum < 0){
      return bet[bet.length + indexsum];
    }else{
      return bet[indexsum];
    }
  }

}

function caesar(n, text, positive){
  var alphaL = bet.length;
  var textMultiArray = text.split('');
  var answer = [];
  textMultiArray.forEach(function(ele, i, newPhrase) {
  	var newletter = ele;
    if (!ele.match(/[^A-Za-z0-9_]/g,'')){
			newletter = lookup(n,ele.toLowerCase(),positive);
    }
    answer.push(newletter);
  });
  return answer.join('');
}

var nonsense = process.argv[2];
var magicNumber = parseFloat(process.argv[3]);
var direction = (process.argv[4] === "true");

console.log(caesar(magicNumber, nonsense, direction));

