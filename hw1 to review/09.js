// real life task

// we have: array of colors, 2 arrays of titles and values
// titles are unique for arr1 and arr2 but may cross between arr1 and arr2
// number of elements in arr1 and arr2 is always 5

// as a result we need to get 2 arrays (ex. finalArr1, finalArr2)
// finalArr1 must include objects { title: 'title', color: 'color' } with titles from arr1
// finalArr2 must include objects { title: 'title', color: 'color' } with titles from arr2
// the order of elements in finalArr1 must be as in arr1 by title
// in finalArr2 elements with the same titles as in finalArr1 must have the same number in array as in finalArr1

// output
// const finalArr1 = [
//   { title: 'title1', color: 'color1' },
//   { title: 'title2', color: 'color2' },
//   { title: 'title3', color: 'color3' },
//   { title: 'title4', color: 'color4' },
//   { title: 'title5', color: 'color5' }
// ];
//
// const finalArr2 = [
//   { title: 'title1', color: 'color1' },
//   { title: 'title8', color: 'color8' },
//   { title: 'title3', color: 'color3' },
//   { title: 'title7', color: 'color7' },
//   { title: 'title6', color: 'color6' }
// ];

// arr1 and arr2 has crossed titles - title1, title3
// so in final arrays title1 and title3 elements must #1 and #3 in array (as in first array)
// other elements positions in finalArr2 (with title6, title7, title8) are not important

const colors = ['color1', 'color2', 'color3', 'color4', 'color5', 'color6', 'color7', 'color8', 'color9', 'color10'];
const colors16 = [
	'1111100000000000', '0000011111100000', '0000000000011111', 
	'0000000000000000', '1111111111111111', '1111111111100000', 
	'1111100000011111', '0000011111111111', '0000011111111000'
];

const arr1 = [
  { title: 'title1', value: 'value1' },
  { title: 'title2', value: 'value2' },
  { title: 'title3', value: 'value3' },
  { title: 'title4', value: 'value4' },
  { title: 'title5', value: 'value5' }
];

const arr2 = [
  { title: 'title1', value: 'value1' },
  { title: 'title3', value: 'value3' },
  { title: 'title6', value: 'value6' },
  { title: 'title7', value: 'value7' },
  { title: 'title8', value: 'value8' }
];

// it can be in one line, but it would be too long line
const titles2Colors = (titles, colors) => {
	return titles.map(el => ({title: el.title, color: colors[el.title.slice(-1)-1]}));
}

const createFinalArr2 = (arr1, arr2) => {
	// intersection search
	let intersectionEls = [];
	arr2.forEach(el2 => {
		arr1.forEach((el1, index) => {
			if(el1.title === el2.title) {
				let intersectionEl = {};
				intersectionEl.index = index;
				intersectionEl.obj = el2;
				intersectionEls.push(intersectionEl);
			}
		});
	});
	// array changing
	let index = arr2.length-1;
	while(index >= 0) {
		intersectionEls.forEach(elem => {
			if(arr2[index].title === elem.obj.title) {
				arr2.splice(index, 1);	// deleting elem of original position
				arr2.splice(elem.index, 0, elem.obj);	// insertion to new position
			}
		}); index--;
	}
	return arr2;
}

console.group()
console.log(titles2Colors(arr1, colors)); // returns finalArr1
console.log(createFinalArr2(arr1, titles2Colors(arr2, colors))); // returns finalArr2
console.groupEnd()
console.log(titles2Colors(arr1, colors16)); // returns finalArr1
console.log(createFinalArr2(arr1, titles2Colors(arr2, colors16))); // returns finalArr2
