function sumRange(number) { //Initialization
//Base case is the condition that will stop the recursive function
//Condition: think of If & Else statements
//Arrays: think of For Loops

  if (number ==1) { //Equivelant of a Condition in the For Loop, This when the Recursive Function stops
    return 1
  }
  return number + sumRange(number-1)

}
console.log(sumRange(4))

//Recipe          Ingredients
function factorial(number) {
  if (number ==1) {
    return 1
  }
  return number * factorial(number-1)
}
console.log(factorial(3))