// must be 'doggo' in console

const dog = {
  name: 'doggo',
  sayName() {
	console.log(this.name)
  }
};

const sayName = () => dog.sayName();
  
sayName();
// or just dog.sayName();
  