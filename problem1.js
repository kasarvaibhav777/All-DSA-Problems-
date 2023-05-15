//Identify the number is prime or not

function identifyPrime(num) {
    // Write code here
    let x=0;
    for(let i=2;i<num;i++)
    {
     if(num%i===0){
         x++;
     }
    }
    if(x>0){
        console.log("No");
    }else{
        console.log("Yes");
    }
}
identifyPrime(11);  //Yes
