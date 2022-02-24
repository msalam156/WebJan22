
//input from user 
var string=prompt("enter any Word");
// check weather is a number or string
if(isNaN(string)){
    var str=string.split('');
    // we convert  the string into the arrya
    var counter =0
     // take counter variable to count the vowels
     //and initializing it to zero

     //take a for loop for comparing each letter to the "aAeEoOiIoO"
    for(i=0;i<str.length;i++){

        switch(str[i]){
                   case 'a':
                   case 'A':
                        counter +=1;
                        break;
                    case 'e':
                    case 'E':      
                        counter +=1;
                        break;
                    case 'i':
                    case 'I':
                        counter+=1;
                        break;
                    case 'o':
                    case 'O':
                        counter+=1;
                        break;
                    case 'u':
                    case 'U':
                        counter+=1;
                        break;
               }
            }
            console.log("the vowels in {"+string+"} are: "+counter)
            alert("the vowels in {"+string+"} are: "+counter)
     }
    
    else{ //if user enter number than show alert
          alert("Please enter the String not :-"+string)
      }

