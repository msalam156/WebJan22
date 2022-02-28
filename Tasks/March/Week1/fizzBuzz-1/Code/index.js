function input() {
    let input1 = prompt("enter the limit for FizzBuzz Series");
    let limit = parseInt(input1);
    if (isNaN(limit)) {
        alert(`please enter valid Number not:  ${input1} `)
    }
    else {
        for (let i = 1; i <= limit; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                document.write(`'FizzBuzz', `);
            }
            else if (i % 5 == 0) {
                document.write(`'Buzz', `);
            }
            else if (i % 3 == 0) {
                document.write(`'Fizz', `);
            }
            else {
                document.write(i+", ");
            }
        }
    }
}





// for(let i = 1; i <= 50; i++){
//     if(i % 3 == 0 && i % 5 == 0) {
//         document.write(`<br>fizzbuzz`);
//     }
//     else if(i % 5 == 0) {
//         document.write(`<br>buzz`);
//     }
//     else if(i % 3 == 0) {
//         document.write(`<br>Fizz`);
//     }
//     else {
//         document.write(`<br>`+i);
//     }
// }
