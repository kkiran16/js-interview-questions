/* Create a function calculator that should take one initial value. 
Chain calulations like add, subtract on it. 
It shoudl return the calculated value on invocation of val function at the end of the chain.

var output = cal(2).add(5).sub(4).val();
Output should be: 3 (2 + 5 - 4) */

function cal(val1){

    function Calculator(initialVal){
      this.initialVal = initialVal
    }
    Calculator.prototype.add = function(val2){
      this.initialVal = this.initialVal + val2
  
      return this
    }
  
    Calculator.prototype.sub = function(val2){
      this.initialVal = this.initialVal - val2
  
      return this
    }
  
    Calculator.prototype.val = function(val2){
      return this.initialVal
    }
  
    return new Calculator(val1) 
  }
  
  var output = cal(2).add(5).sub(4).val();
  console.log(output)