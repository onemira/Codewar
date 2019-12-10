var isSquare = function(n){
  // if the value of Math.sqrt interger, return true
  // not false
  var sqrtNum =  Math.sqrt(n)
 return (Math.ceil(sqrtNum) == sqrtNum && n >= 0 ? true : false);
}
