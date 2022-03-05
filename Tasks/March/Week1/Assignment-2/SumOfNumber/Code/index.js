function Add() {
    var input1 = document.getElementById("take1").value;
    var input2 = document.getElementById("take2").value;
    if(isNaN(input1,input2)){
        document.getElementById('h1').innerText=(`soryy I can't perform '${input1}' and '${input2}'`);
    }
    else {
        let data1 = parseInt(input1)
        let data2 = parseInt(input2)
        let sum = data1 + data2
        document.getElementById('h1').innerText=sum;
    }
    
}

// function add() {
//     var input1 = document.getElementById("take1").value;
//     var input2 = document.getElementById("take2").value;
//     if(isNaN(input1,input2)){
//         document.getElementById('h1').innerHTML=(`soryy I can't perform '${input1}' and '${input2}'`);
//     }
//     else {
//         var data1,data2      
//          data1 = parseInt(input1);
//          data2 = parseInt(input2);
//         let sum = data1 + data2
//         document.getElementById('h1').innerHTML=sum;
//     }
// }