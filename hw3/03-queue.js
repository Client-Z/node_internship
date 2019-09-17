/* Queues */

function Queue () {
  // collection will hold the queue
  const collection = [];

  // this method prints queue elements
  this.print = function() {
    console.log(collection);
  };

  // this method will push element to queue
  this.enqueue = function(element) {};

  // this method will remove element from queue
  this.dequeue = function() {};

  // this method will return the first element in queue
  this.front = function() {};

  // this method will return the size of the queue
  this.size = function() {};

  // this method will return true value if queue has no elements
  this.isEmpty = function() {};
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

q.print(); // [ 'a', 'b', 'c' ]
q.dequeue();

console.log(q.front()); // b

q.print(); // [ 'b', 'c' ]