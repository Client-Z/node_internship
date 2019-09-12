// create function which will make deep copy of object

function deepestObjCopyEver(obj) {
	const isObj = obj => obj && typeof obj === 'object';
	if(!isObj(obj)) return obj;
	let copyObj = {};
	for(let prop in obj) {
		// maybe it's not what you have expected but I suppose it's better then nothing 
		if(obj[prop] instanceof Date) {
			copyObj[prop] = new Date(obj[prop]); 
		} else if(obj[prop] instanceof RegExp) {
			copyObj[prop] = new RegExp(obj[prop]);
		} else {
			copyObj[prop] = isObj(obj[prop]) ? deepestObjCopyEver(obj[prop]) : obj[prop];
		}
	}
	return copyObj;
}

const firstObj = {
	'a': {
		0: 0,
		1: 1,
		2: {
			'qwerty': function() {
				return 0;
			}
		},
		3: new Date(),
		4: new RegExp()
	}
}

// console.log(deepestObjCopyEver(firstObj));
let newObj = deepestObjCopyEver(firstObj);
// let's check out if it's really copied
firstObj.a[0] = 10; // difference
console.log('firstObj: ', firstObj);
console.log('newObj: ', newObj)