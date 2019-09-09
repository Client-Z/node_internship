// must be '0, 1, 2, 3' in console

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}
