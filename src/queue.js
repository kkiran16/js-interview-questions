
    
function Queue() {
    this.items = [];
  }
  
  Queue.prototype.enqueue = function(item) {
    this.items.push(item);
  }
  
  Queue.prototype.dequeue = function() {
    return this.items.shift();
  }
  
  Queue.prototype.top = function() {
    if (this.items.length > 0) {
      return this.items[0];
    }
    return null;
  }
  
  Queue.prototype.isEmpty = function() {
    return this.items.length === 0;
  }
  
  let q = new Queue();
  q.enqueue(1);
  q.enqueue(2);
  q.enqueue(3);
  q.enqueue(4);
  
  console.info('Queue is: ', );
  while(!q.isEmpty()) {
    console.info(q.dequeue());
  }
  
  
    