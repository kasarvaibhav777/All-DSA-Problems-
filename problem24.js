/* Detect Palindrome Ended
Description

You are given an integernum.

You need to printYesif that integer is a palindrome or else printNo.

A palindrome is a word, number, phrase, or other sequence of characters that reads the same backward as forward,such asmadamorracecar.


Input
Input Format

First line containsnum, a integer.

Constraints

1 <= num <= 1000000


Output
PrintYesorNodepending upon the integer.


Sample Input 1 

1221
Sample Output 1

Yes
Hint

Sample 1 Explanation

We printYesas1221`is a palindrome.    */

function detectPalindrome(num){
    //write code here
    
        let rev=0;
        let temp=num;
        
        while(num!==0)
        {
            rem=num%10;
            rev=rev*10+rem;
            num=Math.floor(num/10);
        }
        if(temp==rev)
        {
            console.log("Yes");
        }else
        {
            console.log("No");
        }
        
    }
    
    detectPalindrome(12321);