// Your First Pattern Ended
// Description

// You are given a number stored in a variable with the namen

// You have to printnlines, and on each line you have to printnstars

// For example, consider the value stored inn = 4. Then, the required output will be

// * * * *
// * * * *
// * * * *
// * * * *

// Input
// The first and the only line of the input contains the value stored in the variablen

// Output
// Print the pattern as shown in the problem statement

function yourFirstPattern(n) {
  // Write code here

  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = 0; j < n; j++) {
      bag = bag + "*" + " ";
    }
    console.log(bag);
  }
}
yourFirstPattern(4) ;

