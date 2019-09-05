// create function which will make deep copy of object

function deepestObjCopyEver(obj) {
	isObj = obj => obj && typeof obj === 'object' ? true : false;
	if(!isObj(obj)) return obj;
	let copyObj = {};
	for(let prop in obj) {
		copyObj[prop] = isObj(obj[prop]) ? deepestObjCopyEver(obj[prop]) : obj[prop];
	}
	return copyObj;
}

const wow = {
	'a': {
		0: 0,
		1: 1,
		2: {
			'qwerty': function() {
				return 0;
			}
		}
	}
}

// console.log(deepestObjCopyEver(wow));
let newObj = deepestObjCopyEver(wow);
// let's check out if it's really copied
wow.a[0] = 10; // difference
console.log('wow: ', wow);
console.log('newObj: ', newObj)