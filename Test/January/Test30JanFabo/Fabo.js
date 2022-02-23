 // declaring variables for set limit of fabo series.
 var temp = prompt("Enter the Limit of Fabonacci series");
 // Convert input string to Integer.
         var limit = parseInt(temp);
 //Assigning 1st 2nd and 3rd number as well as        
         var first = 0;
         var second = 1;
         var sum = second + first;
 //print first three numbers 
         console.log(first);
         console.log(second);
         console.log(sum)
 // print above the three numbers which is equal to the set limit
         for (i = 4; i <= limit; i++) {
 
             first = second;
             second = sum;
             sum = second + first
             console.log(sum)
         }
 // End of the coding part6