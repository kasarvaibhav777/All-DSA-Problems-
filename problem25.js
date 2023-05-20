/* Substring under condition Ended
Description

You are given a strings, you have to find thecountof all such substrings which start and ends with the same character.


Input
Input Format :

First and the only line contains a strings

Constraints:

1 <= Length of s <= 1000


Output
Print the count of total number of such substrings starting and ending with same characters.


Sample Input 1 

abcab
Sample Output 1

7
Hint

Substrings ofabcabwhich start and end with same characters, area,abca,b,bcab,c,a,b.

So total count is 7. Hence we print 7.           */


let s="vaibhav"

function subStrUnderCond(s) {
  //write code here
  let n = s.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = i; j < n; j++) {
      bag = bag + s[j];
        
      //console.log(bag)
      
      if (bag[0] == bag[bag.length - 1]) {
        count++;
      }
    }
  }
  console.log(count);
}


subStrUnderCond(s);
