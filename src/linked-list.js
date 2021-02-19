function LinkedNode(data){
    this.data = data
    this.next = null
}
function LinkedList(){
    this.head = null
    this.length = 0
}

LinkedList.prototype.push = function(data){// If an arrow function is written then the 'this' will be undefined.
    if(!data){
        return
    }
    const node = new LinkedNode(data)
    const count = 0
    if(!this.head){
        this.head = node
    }else {
        let currentNode = this.head
        while(currentNode.next !== null){
            currentNode = currentNode.next
        }
        currentNode.next = node
    }
    this.len += 1 
}

LinkedList.prototype.head = function() {
    return this.head;
}

LinkedList.prototype.length = function() {
    return this.len;
}

let list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)

console.log('Linked List Is :')
let currentNode = list.head
while(currentNode !== null) {
  console.log(currentNode.data);
  currentNode = currentNode.next;
}

  
