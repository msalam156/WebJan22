var arr = []
function show(n) {
    var data =  document.getElementById('show');
     data.classList.remove('none');
     data.classList.add('dialog');
    document.getElementById('name').innerText = document.getElementById(`item${n}`).innerText;
    if(n<3){
        document.getElementById('processor').innerText = 'i'+(n*4+1);
    }
    else{

        document.getElementById('processor').innerText ="i"+n;
    }
    if(n<3){
        document.getElementById('ram').innerText = (n*4+1)+"GB";
    }
    else{

        document.getElementById('ram').innerText = n+"GB";
    }
}
function hidePopup() {
    document.getElementById('show').classList.remove('dialog');
    document.getElementById('show').classList.add('none');
    console.log('hid');

}