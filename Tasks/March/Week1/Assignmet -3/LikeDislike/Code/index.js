var counter = [0,0,0,0,0,0,0,0]
function like(n) {
    counter[n] += 1;
    document.getElementById(`disp${n}`).innerText=counter[n];
    console.log(n);
}
function dislike(n) {
    counter[n] -= 1;
    document.getElementById('disp').innerText=counter;
}