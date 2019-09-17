function PriorityQueue () {
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

const pq = new PriorityQueue();
pq.enqueue(['Intern 1', 2]);
pq.enqueue(['Intern 2', 3]);
pq.enqueue(['Intern 3', 1]);
pq.enqueue(['Intern 4', 2]);

pq.print(); // [ [ 'Intern 3', 1 ], [ 'Intern 1', 2 ], [ 'Intern 4', 2 ], [ 'Intern 2', 3 ] ]

pq.dequeue();

console.log(pq.front()); // [ 'Intern 1', 2 ]
pq.print(); // [ [ 'Intern 1', 2 ], [ 'Intern 4', 2 ], [ 'Intern 2', 3 ] ]

// priorities: 3 - highest, 1 - lowest