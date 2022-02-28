
let input1 = prompt('enter the first String');
let input2 = prompt('enter the Second String');
var counter = 0;
function anagram(tosort1,tosort2) {
  let  split1 = tosort1.split("");
  let split2 = tosort2.split("");
  let str1 = split1.sort();
  let str2 = split2.sort();
  let len1 = str1.length;
  let len2 = str2.length;  
  for(let i = 0; i < len1; i++){
    if(len1 == len2) {
        if(str1[i] == str2[i]){
            counter++;
        }
    }
    break;
  }
}
anagram(input1,input2);
if(counter == 0){
    document.write(`${input1} and ${input2} is not Anagram`);
}
else {
    document.write(`${input1} and ${input2} is Anagram`);
}
