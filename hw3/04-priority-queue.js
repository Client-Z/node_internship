function PriorityQueue () {
	// collection will hold the queue
	const collection = [];
	
	this.isValid = (val) => val === undefined || Number.isNaN(val) || val === null ? false : true;

	// this method prints queue elements
	this.print = () => console.log(collection);

	// this method will push element to queue
	this.enqueue = (el) => {
		if(this.isValid(el)) {
			if(this.isEmpty()) collection.push(el);
			else {
				for(let i = 0; i < collection.length; i++) {
					if(collection[i][1] < el[1]) {
						collection.splice(i, 0, el);
						break;
					} else if(i === collection.length - 1) {
						collection.push(el);
						break;
					}
				}
			}
		} else console.error(`You can't add any indefinite value!`);
	};

	// this method will remove element from queue
	this.dequeue = () => collection.shift();

	// this method will return the first element in queue
	this.front = () => collection[0];

	// this method will return the size of the queue
	this.size = () => collection.length;

	// this method will return true value if queue has no elements
	this.isEmpty = () => !collection.length;
}

const pq = new PriorityQueue();
pq.enqueue(['Intern 1', 2]);
pq.enqueue(['Intern 2', 3]);
pq.enqueue(['Intern 3', 1]);
pq.enqueue(['Intern 4', 2]);
pq.enqueue(['Intern 5', 3]);

pq.print(); // [ [ 'Intern 2', 3 ], [ 'Intern 1', 2 ], [ 'Intern 4', 2 ], [ 'Intern 3', 1 ] ]

pq.dequeue();
pq.enqueue(['Intern 0', 3]);
console.log(pq.front()); // [ 'Intern 5', 3 ]
pq.print(); // [ [ 'Intern 5', 3 ], [ 'Intern 0', 3 ], [ 'Intern 1', 2 ], ['Intern 4', 2 ], [ 'Intern 3', 1 ] ]

// priorities: 3 - highest, 1 - lowest