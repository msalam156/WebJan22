function cross() {
    document.getElementById('popup').classList.replace('popup' ,'none');
}
function show(n) {
    document.getElementById('popup').classList.replace('none' ,'popup');
    document.getElementById('def_img').src = document.getElementById(`img${n}`).src;

}