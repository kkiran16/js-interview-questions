// A stack follows the LIFO (Last In First Out) principle.

function Stack(){
    this.items = []
}

Stack.prototype.push = function(item){
    this.items.push(item)
}

Stack.prototype.pop = function(){
    return this.items.pop()
}

Stack.prototype.top = function(){
    return this.items[this.items.length - 1]
}

Stack.prototype.isEmpty = function(){
    return this.items.length === 0
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);

console.info('Stack is: ', );
while(!stack.isEmpty()) {
  console.info(stack.pop());
}