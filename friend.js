function wordsToMarks(string) {
  let score = 0;
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < string.length; i++) {
    score += alpha.indexOf(string[i]) + 1;
  };
  return score;
}