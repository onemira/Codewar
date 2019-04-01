function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  //numbers in array are integers
  //you can get the averate by adding all number in intergers and dividing by the langth of array
function getSum(total, num) {
return total + num
}
let sum = marks.reduce(getSum, 0);
return Math.floor(sum / marks.length);
}
