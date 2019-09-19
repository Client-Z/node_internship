/* Queues */

function Queue () {
  // collection will hold the queue
  const collection = [];

  // this method prints queue elements
  this.print = () => console.log(collection);

  // this method will push element to queue
  this.enqueue = (el) => collection.push(el);

  // this method will remove element from queue
  this.dequeue = () => collection.shift();

  // this method will return the first element in queue
  this.front = () => collection[0];

  // this method will return the size of the queue
  this.size = () => collection.length;

  // this method will return true value if queue has no elements
  this.isEmpty = () => !collection.length;
}

const q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');

q.print(); // [ 'a', 'b', 'c' ]
q.dequeue();

console.log(q.front()); // b

q.print(); // [ 'b', 'c' ]
console.log(q.size());
console.log(q.isEmpty());