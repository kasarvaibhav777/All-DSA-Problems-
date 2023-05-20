/* Beach Fun [NOTE : ATTEMPT ANY ONE QUESTION BETWEEN 501 and 502] Ended
Description

You are on a vacation in Goa, and you want to visit a beach. Now you have two options, you can either go to "RK Beach", or "RU Beach". You are short on time, so you can visit only one beach. You are given the position of the two beaches, RK Beach is located at coordinate 1, and RU Beach is located at coordinate 49. You are given your current position X, find the beach which is closer to you. If both the beaches are at same distance from your position, print "Go Anywhere!".



NOTE : ATTEMPT ANY ONE QUESTION BETWEEN 501 and 502


Input
The first and the only line of the input contains X, your current position.



Constraints

1 <= X <= 49


Output
Print the name of the beach which is closer to the current position, if both the beaches are equidistant to your current position, then print "Go Anywhere!".


Sample Input 1 

23
Sample Output 1

RK Beach
Sample Input 2 

29
Sample Output 2

RU Beach
Hint

In the first sample test case, the position X is 23, therefore the distance from RK Beach is 23 - 1 = 22, and the distance from RU Beach is 49 - 23 = 26. Therefore, the beach closer to you is RK Beach.

In the second sample test case, the position X is 29, therefore the distance from RK Beach is 29 - 1 = 28, and the distance from RU Beach is 49 - 29 = 20. Therefore, the beach closer to you is RU Beach.
*/


function beachFun(N){
	//write your code here
	
	if((N-1)>(49-N)){
	    console.log("RU Beach");
	}else if((N-1)<(49-N)){
	    console.log("RK Beach");
	}else{
	    console.log("Go Anywhere!");
	}
	
}
