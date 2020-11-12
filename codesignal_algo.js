// return an array of score string, ordered in the highest percentage.
function codingScoreReportPercent(scores) {
  let result = []
  let gradeH = {
      Poor: 0,
      Fair: 1,
      Good: 2,
      Execllent: 3,
      Elite: 4,
  }
  let grade = [
      ['Poor', 0],
      ['Fair', 0],
      ['Good', 0],
      ['Execllent', 0],
      ['Elite', 0]
  ]
  
  for (let e of scores) {
      if (e >= 300 && e <= 599) grade[0][1]++;
      if (e >= 600 && e <= 699) grade[1][1]++;
      if (e >= 700 && e <= 749) grade[2][1]++;
      if (e >= 750 && e <= 799) grade[3][1]++;
      if (e >= 800) grade[4][1]++;
  }
  // grade.sort((a, b) => {
  //     if (b[1] > a[1]) return -1;
  //     if (b[1] < a[1]) return 1;
  //     if (b[1] === a[1]) {
          
  //     }
  // })
  
  grade.sort((a,b) => (b[1] - a[1]))
  grade.sort((a, b) => {
      if (a[1] === b[1]) return gradeH[b[0]] - gradeH[a[0]]
  })
  
  for (let e of grade) {
      if (e[1]) result.push(`${e[0]}: ${((e[1]/scores.length)*100).toFixed(2)}%`)
  }
  console.log(result)
  return result;
}
