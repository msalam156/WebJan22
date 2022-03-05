function swap(){
    inp1 = document.getElementById('input1').value;
    inp2 = document.getElementById('input2').value;
    take1 = parseInt(inp1);
    take2 = parseInt(inp2);
    if(isNaN(take1,take2)){
        document.getElementById('h2').innerHTML = `Sorry ! I can't perform swaping on <strong style="color: red;">${inp1}</strong> and <strong style="color: red;"> ${inp2}</strong>`;       
    }
    else{
        take1 = take1 + take2;
        take2 = take1 - take2; 
        take1 = take1 - take2;
        document.getElementById('h2').innerHTML = `initial value:${input1.value} and : ${input2.value}`
        document.getElementById('input1').value = take1;
        document.getElementById('input2').value = take2;
        document.getElementById('first').innerText =` Swaped Number: ${take1}` ;
        document.getElementById('scnd').innerText = take2;
    }
}