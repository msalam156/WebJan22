function matchPass() {
    var take1 = document.getElementById('pass');
    var get1 = take1.value;
    var take2 = document.getElementById('cpass');
    var get2 = take2.value;
    if(get1 === get2) {
        document.getElementById('show').innerText="Your Password Match🤠";
    }
    else {
        alert("Password is not match😏");
    }

}

