var counter = 0;
function like() {
    counter += 1;
    document.getElementById('disp').innerText=counter;
}
function dislike() {
    counter -= 1;
    document.getElementById('disp').innerText=counter;
}