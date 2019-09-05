// must be 'doggo' in console

const dog = {
  name: 'doggo',
  sayName() {
	console.log(this.name)
  }
};

const sayName = dog.sayName.bind(dog); // Can we do it better?
  
sayName();
  