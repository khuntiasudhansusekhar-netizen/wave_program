let random=Math.random()
let a = prompt("Enter the first number ")
let c = prompt("Enter operation")
let b = prompt("Enter the second number")
 
  let obj = {
    "+":"-",
    "*":"/",
    "-":"+",
    "/":"*",
  }

  
  if (random > 0.1){
    // perform incorrect calculation 
    console.log('the result is '${a} ${c} ${b} '}')
    alert('the result is $(eval('${a} ${c} ${b} '}')

  }
  else{
    // perform correct calculation
    c = obj[c]
  }