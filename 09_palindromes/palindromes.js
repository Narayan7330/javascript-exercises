const palindromes = function (string) {

  let originalString = string;
  let withoutPuncutuaionOriginalString = originalString.replace(/[^a-z0-9]/gi, "")
  const reversedString = withoutPuncutuaionOriginalString.split('').reverse().join('');

if(withoutPuncutuaionOriginalString.toUpperCase() === reversedString.toUpperCase()){
  return true;
} 
else{
return false;
}
};

// Do not edit below this line
module.exports = palindromes;
