//take input form user 
var num1 = prompt("Enter the limit of Prime Number")
//parse string to number
var num = parseInt(num1);
//if give type Speciel Charactor or Alphabet. we give alert as output
if (isNaN(num)) {
    alert("please enter number not {" + num1 + " }")
} else {
           
    var prime=[];
    for (j = 2; j <= num; j++) {
        
        var isprime=true;  //deaclare is prime is true
        for (i = 2; i < j; i++) { //start a for loop 2 to j
            if (j % i === 0 && j!==i) {     //check num how many times devide
               isprime=false;   // if its devisible the change  value of isprime to false
            }
        }
        if (isprime===true) { //if isprime value is prime
            prime.push(j);    // push j into prime Array
        }
    }
    console.log("Your prime num is 1 to "+num+", is:  "+prime)        // Show the prime number

}