/* Two Primes Ended
Description

You are given two numbers, stored in variables with the following namesa, b

If both the numbers are prime, printTrue, else printFalse


Input
The first and the only line of input contains the value stored ina, brespectively


Output
Print the output as explained in the problem statement


Sample Input 1 

11 17
Sample Output 1

True
Hint

In the sample test case, the value stored ina = 11, and the value stored inb = 17. Since, both the numbers are prime, we printTrue
 */
function twoPrimes(a,b) {
    //write code here
     let factor1=0;
     let factor2=0;
     for(let i=2;i<a;i++){
         if(a%i==0){
             factor1++;
         }
     }
     for(let i=2;i<b;i++){
         if(b%i==0){
             factor2++;
         }
    }if(factor1==0&&factor2==0){
        console.log("True");
    }else{
        console.log("False");
    }
}

twoPrimes(7,8);