function triqui(board) {
  let answers = ['', '', '', '', '', '', '', ''];
  const check = ['OOO', 'XXX'];

  const ok = arr => {
    for (let v of arr) {
      if (check.includes(v)) return true;
    };
    return false;
  };

  board.forEach((v, i) => {
    const line = v.join('');
    answers[i] = line;
    answers[3] += line[0];
    answers[4] += line[1];
    answers[5] += line[2];
    answers[6] += line[i];
    answers[7] += line[2-i];
  });

  return ok(answers);
}

// cases tests
const b1 = [
  ["X", "O", "-"],
  ["O", "O", "X"],
  ["-", "O", "X"]
]
console.log(triqui(b1)) // true
