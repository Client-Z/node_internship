// must be 'fido says woof' in console

function Dog (name) {
  this.name = name
}

// can we do it another way?
Dog.prototype.bark = function () {
  console.log(this.name + ' says woof')
};

const fido = new Dog('fido');

fido.bark();