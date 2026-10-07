function squareSum(numbers){
    let sum = 0;
 for(let i=0; i<numbers.length; i++){
 let squere = numbers[i]**2;
 sum+= squere;
 }
  return sum

}
console.log(squareSum([1,2,3]))