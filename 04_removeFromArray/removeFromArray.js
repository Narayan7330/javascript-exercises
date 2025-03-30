const removeFromArray = function(arr1,...arr2) {

  return arr1.filter(function(item){
   return !arr2.includes(item);
  })
};

// Do not edit below this line
module.exports = removeFromArray;
