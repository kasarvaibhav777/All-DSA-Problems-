/* Smaller than largest element Ended
Description

You are given an array A of size N.

You need to change all elements smaller than the largest element in the array to -1, and print array


Input
First line contains T, no of test cases.

First line of each test case contains N, size of array

Second line of each test case contains N spaced integers of array A.

Constraints

1 <= T <= 10

1 <= N <= 100

1 <= A[i] <= 1000


Output
Print the array in new line for each test case


Sample Input 1 

2
3
1 3 2
5
3 3 2 1 1
Sample Output 1

-1 3 -1 
3 3 -1 -1 -1
Hint

For test case 1.

Maximum element is 3.

All elements less than 3 are converted to -1.           */
let arr = [2, 4, 6, 8];

function change(N, arr) {
  //write your code here

  let largest = -1;
  for (let i = 0; i < N; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
    for (let i = 0; i < N; i++) {
      if (arr[i] < largest) {
        arr[i] = -1;
      }
    }
  }
  let bag = "";
  for (let i = 0; i < N - 1; i++) {
    bag = bag + arr[i] + " ";
  }
  console.log(bag);
  // let bag=" ";
  // for(let i=0;i<N;i++){
  //   bag=bag+arr[i]+" ";
  // }
  // console.log(bag);
}

change(4, arr);
