/* Pattern of L Ended
Description

You are given a number stored in a variable with the nameN

Print the pattern as shown below, according to the value stored inN

For example, consider the value stored inN = 5

Then, the required pattern will be as follows, which represents the letterL

*
*
*
*
* * * * *


Input
The first and the only line of the input contains the valueN


Output
Print the pattern as shown in the problem statement


Sample Input 1 

4
Sample Output 1

*
*
*
* * * *
Hint

In the sample test case, the value stored inN = 4. Therefore, the required pattern will be as shown below

*
*
*
* * * *                                           */

function patternOfL(N) {
  // Write code here

  for (let i = 1; i <= N; i++) {
    let bag = "";
    for (let j = 1; j <= N; j++) {
      if (i == N) {
        bag = bag + "*" + " ";
      } else if (j == 1) {
        bag = bag + "*" + " ";
      }
    }
    console.log(bag);
  }
}

patternOfL(5);
