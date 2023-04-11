function countALoops(word, loops) {
    let repeatedWord = word.repeat(loops);
    let count = 0;
    for (let i = 0; i < repeatedWord.length; i++) {
      if (repeatedWord[i] === "a") {
        count++;
      }
    }
    return count;
  }
  console.log(countALoops("aha", 3));
