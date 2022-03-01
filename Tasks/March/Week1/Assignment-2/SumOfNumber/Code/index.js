function Add() {
    var input1 = document.getElementById("take1").value;
    var input2 = document.getElementById("take2").value;
    if(isNaN(input1,input2)){
        alert(`soryy I can't perform '${input1}' and '${input2}'`);
    }
    else {
        let data1 = parseInt(input1)
        let data2 = parseInt(input2)
        let sum = data1 + data2
        document.getElementById('h1').innerHTML=sum;
    }
    
}