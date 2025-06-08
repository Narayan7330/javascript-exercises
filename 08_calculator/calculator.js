const add = function(a,b) {
  
  return a+b;
  

};

const subtract = function(a,b) {
	
  return a-b;
};

const sum = function(array) {
	
return array.reduce((prev,next) => prev + next , 0);


};

const multiply = function(array) {

  return array.reduce((prev,next) => prev * next,1);

};

const power = function(a,b) {
  return a ** b;
};

const factorial = function(n) {
  if (n>=1){
let result = 1;
  for (let i=1;i<=n;i++){
    result *= i;
  }
  return result;
  }
  else{
    return 1;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
