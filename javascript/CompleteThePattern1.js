function pattern(n) {
  var output = ''

  // print from 1 to n
  for (let i = 1; i <= n; i++) {
    // printing number is n ex 1=1, 3=333
    if (i === n) {
      output += `${String(i).repeat(i)}`
      continue
    }
    output += `${String(i).repeat(i)}\n`
  }
  // Happy Coding ^_^
  return output
}
