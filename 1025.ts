// write a function that determins if first player will win the game
// start with N number
// a player takes turn to choose a number x such that 0 < x < N and N % x === 0
// when a player choose a number, replace N with N - x
// return true if player 1 wins

// idea: if a player always choose one. every even number will always lead to first player win. so all we have to do is retrun true if N is even.

const divisorGame = (N: number): boolean => {
  return N % 2 === 0
}