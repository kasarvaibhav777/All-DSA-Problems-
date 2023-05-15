// Pattern of N Ended
// Description

// You are given a number stored in a variable with the nameN

// You have to print all the numbers in the range from1 to N*N, such that there are exactlyNnumbers on each line

// For example, if the value stored inN = 3, then all the numbers in the range, from [1,9] need to be printed, such that there are 3 numbers on each line. Therefore, the required output is

// 1 2 3
// 4 5 6
// 7 8 9

// Input
// The first and the only line of the input contains the value stored in the variableN


// Output
// Print all the numbers in the range from [1, N*N], as shown in the problem statement, such that there areNnumbers on each line

function patternOfN(N) {
    // Write code here
    let count=1;
    for(a=1;a<=N;a++){
        let bag="";
        for(b=1;b<=N;b++){
            bag=bag+count+" ";
            count++;
        }console.log(bag);
    }
}

patternOfN(2);