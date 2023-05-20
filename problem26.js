/* Two Array One Sum Ended
Description

You are given two arraysAandB, both of the same sizeN

You have to find the sum of all elements in both the arrayAandB


Input
The first line of the input containsT, the number of test cases.

The first line of the test case, containsNthe size of the two arrays.

The next line containsNspace separated integers denoting the elements of the arrayA

The last line of each test case containsNspace separated integers, denoting the elements of the arrayB

1 <=T<= 10

1 <=N<= 100

1 <=A[i], B[i]<= 100


Output
For each test case, print a single integer denoting the sum of all the elements in both the arrays, on a new line.


Sample Input 1 

1
5
1 2 3 4 5
6 7 8 9 10 
Sample Output 1

55
Hint

The sum of all the elements in the two arrays, is1+2+3+4+5+6+7+8+9+10 = 55, which is the required answer.
*/

let A=[5,5,5,5,5];
let B=[4,4,4,4,4];

function twoArraysOneSum(N, A, B) {
    //write code here
       sum1=0;
       sum2=0;
      for(let i=0;i<N;i++){
          sum1=sum1+A[i];
          sum2=sum2+B[i];
      }
      console.log(sum1+sum2);
  }

  twoArraysOneSum(5,A,B);
  