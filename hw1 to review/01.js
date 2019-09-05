// must be 'hay amy' in console

function greet(person) {
	if (JSON.stringify(person) === JSON.stringify({ name: 'amy' })) {
	  return 'hey amy';
	} else {
	  return 'hey arnold';
	}
  }
  
console.log(greet({ name: 'amy' }));