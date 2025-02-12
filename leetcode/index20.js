// 412. Fizz Buzz

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.
 

// Example 1:

// Input: n = 3
// Output: ["1","2","Fizz"]
// Example 2:

// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]
// Example 3:

// Input: n = 15
// Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]


function fizzBuzz(n){
  let b =[]
  for(let i=1;i<=n;i++){
    if(i % 5 == 0 && i % 3 ==0){
      b.push('FizzBuzz')
    }else if(i % 5 == 0){
        b.push('Buzz')
    }else if (i % 3 ==0){
        b.push('Fizz')
    }else{
        let c = i.toString()
        b.push(c)
    }
  }
  return b
}
var n = 15
console.log(fizzBuzz(n))