const fibonacci = function(n) {
if(n < 0) return "OOPS";
if(n==0) return 0;
if(n ==1 || n == 2) return 1;


let previousNumberOne = 1;
let previousNumberTwo = 1;
for(let i = 3;i<= n;i++){

  let currentNumber = previousNumberOne + previousNumberTwo ;

  previousNumberOne = previousNumberTwo;
  previousNumberTwo = currentNumber;
  
}

return previousNumberTwo;
};

// Do not edit below this line
module.exports = fibonacci;
