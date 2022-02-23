var num=prompt("Enter the number");
var num1=parseInt(num);//convert the string into the number:
if(isNaN(num1)){
    alert("Please enter the Valid Number not : "+num+" :")//check the input that its a number or not
}else{
    var counter=0;
    for(i=2;i<=num1/2;i++){ //start a for loop 2 to num/2
        if(num1%i==0){     //check num how many times devide
            counter+=1;   // if its devisible the increase counter value
        }
    }
    if(counter>=1 ||num==1 ||num==0){ //if counter value equal or greater 1 then not prime number
        console.log(num+" is Not a Prime Number");
    }else{
        console.log(num+" is a Prime Number");
    }
    
}