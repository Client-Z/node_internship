// must be '0, 1, 2, 3' in console

for (var i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}

// I am not sure I fully understand why 'let' works here instead of 'var'.
for (let i = 0; i < 4; i++) {
  setTimeout(() => console.log(i), 0)
}