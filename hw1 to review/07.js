// create function which will make deep copy of object

function deepestObjCopyEver(obj) {
	const isObj = obj => obj && typeof obj === 'object';
	if(!isObj(obj)) return obj;
	let copyObj = {};
	for(let prop in obj) {
		copyObj[prop] = isObj(obj[prop]) ? deepestObjCopyEver(obj[prop]) : obj[prop];
	}
	return copyObj;
}

let date = new Date(); // the Date objects has a prop with Symbol type. But, Symbolic properties do not participate in for..in loop.
// date instanceof Date

const wow = {
	'a': {
		0: 0,
		1: 1,
		2: {
			'qwerty': function() {
				return 0;
			}
		},
		3: date
	}
}

// console.log(deepestObjCopyEver(wow));
let newObj = deepestObjCopyEver(wow);
// let's check out if it's really copied
wow.a[0] = 10; // difference
console.log('wow: ', wow);
console.log('newObj: ', newObj)