/* Second Maximum Ended
Description

You are given three numbers stored in the variables with the following names,a,b,c

You have to find the second largest number out ofa,b,c

For example, consider the value stored ina = 3, b = 7, c = 5, then the required output will bec = 5


Input
The first and the only line of the input contains the values stored ina,b,c


Output
Find the second largest value out ofa,b,c


Sample Input 1 

3 7 5
Sample Output 1

5
Hint

In the sample test case, the value stored ina = 3, b = 7, c = 5

Since, 5 is the second largest element, therefore, the output is 5  */

function secondMaximum(a, b, c) {
    // write code here
    
    if((a>b&&b>c)||(c>b&&b>a)){
        console.log(b);
    }else if((a>c&&c>b)||(b>c&&c>a)){
        console.log(c);
    }else{
        console.log(a);
    }
    
  }

  secondMaximum(2,9,7)
  