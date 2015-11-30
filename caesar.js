
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


function lookup(n,a){
  var betIndex = bet.indexOf(a) + n;

  if (betIndex < 0 ){
    betIndex += bet.length;
  }
  
  return bet[betIndex % bet.length];
}

function caesar(n, text){
  var alphaL = bet.length;
  var textMultiArray = text.split('');
  var answer = [];
  textMultiArray.forEach(function(ele, i, newPhrase) {
  	var newletter = ele;
    if (!ele.match(/[^A-Za-z0-9_]/g,'')){
			newletter = lookup(n,ele.toLowerCase());
    }
    answer.push(newletter);
  });
  return answer.join('');
}

var nonsense = process.argv[2];
var magicNumber = parseFloat(process.argv[3]);

console.log(caesar(magicNumber, nonsense));

