// Take the input from user and check it shoulde be a number not string or something
var num1 = prompt("Please enter passing marks");
var pmark = parseInt(num1);// for converting string to number
if (isNaN(pmark)) {
    alert(`Please enter valid number Not < ${num} >`)
} else {// if user enter number then our code run otherwise not

    var data = { // create a object and enter some mix data 
        'fname': "Mohd",// but keys must be an string and key values anything as you want
        'mname': "Shah",
        'lname': "MukitAlam",
        'age': 23,
        'class': "B.tech",
        'students': [ // create a students array inside the data object and give them name and marksd
            { 'name': "Mukit", 'marks': 89 },
            { 'name': "Ali", 'marks': 50 },
            { 'name': "Sameer", 'marks': 40 },
            { 'name': "Ankit", 'marks': 35 },
            { 'name': "Alam", 'marks': 30 },
            { 'name': "Sonu", 'marks': 32 },
            { 'name': "khan", 'marks': 76 },
            { 'name': "Shakti", 'marks': 0 },
            { 'name': "Jeetu", 'marks': 43 },
            { 'name': "Neha", 'marks': 25 }
        ]

    }
    var counter = 0; // declare a counter variable for count passing students
    var limit = data.students.length; // to find how many students are there
    var num = data.students; 
    for (i = 0; i < limit; i++) {// for loop to check every students marks and compare with passing marks
        score = (num[i].marks)
        if (score >= pmark) {
            console.log(num[i].name)
            console.log(num[i].marks)
            counter += 1;
            
        }
    }// and at last print the output
    console.log(`There are ${counter}  Students who score above or equal to the  ${pmark} Marks`);
    alert(`There are ${counter}  Students who score above or equal to the  ${pmark} Marks`);

   //31 Jan Assignment by Mohd Shah Mukit Alam


}