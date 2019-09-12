// must be 'hay amy' in console

function greet(person) {
	if (person.name === 'amy') {
	  return 'hey amy';
	} else {
	  return 'hey arnold';
	}
  }
  
console.log(greet({ name: 'amy' }));