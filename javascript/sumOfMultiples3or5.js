function solution(number){
  var sum = 0;
  for (var n=3 ; n< number ; n++) {
    if (n % 3 == 0 || n % 5 == 0) {
    sum += n
    }
 }
  return sum;
}
