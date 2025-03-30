const sumAll = function(n1,n2) {

if(n1<0||n2<0||!Number.isInteger(n1) || !Number.isInteger(n2)||isNaN(n1)
||isNaN(n2) )
{
  return "ERROR";
}
else if(n1<n2)
{let sum = 0;
for(let i=n1;i<n2+1;i++){
  sum = sum + i;
}
return sum;} 
else if(n2<n1){
  let sum = 0;
  for(let i=n2;i<n1+1;i++){
    sum = sum + i;
  }
  return sum;

}

};

// Do not edit below this line
module.exports = sumAll;
