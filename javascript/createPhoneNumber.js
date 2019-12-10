function createPhoneNumber(numbers){
numbers = numbers.join('');
return '('+numbers.substring(0, 3)+') '+numbers.substring(3, 6)+'-'+numbers.substring(6)
}

function createPhoneNumber(numbers){
const localNumber= '('+numbers[0]+numbers[1]+numbers[2]+')'
const middleNumber=numbers[3].toString()+numbers[4].toString()+numbers[5].toString()
const lastNumber=numbers[6].toString()+numbers[7].toString()+numbers[8].toString()+numbers[9].toString()
return localNumber+' '+middleNumber+'-'+lastNumber
}
