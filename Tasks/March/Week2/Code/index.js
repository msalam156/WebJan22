function Home() {
    document.getElementById('video').style.display="none";
    document.getElementById('home').style.display="initial";
    document.getElementById('search').style.display="none";
    document.getElementById('likes').style.display="none";
    document.getElementById('profile').style.display = 'none';
    
}
function Search() {
    document.getElementById('video').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('search').style.display="initial";
    document.getElementById('likes').style.display="none";
    document.getElementById('profile').style.display = 'none';
}
function Video() {
    document.getElementById('home').style.display="none";
    document.getElementById('search').style.display="none";
    document.getElementById('likes').style.display="none";
    document.getElementById('profile').style.display = 'none';
    document.getElementById('video').style.display = 'initial';
}
function Like() {
    document.getElementById('video').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('search').style.display="none";
    document.getElementById('likes').style.display="initial";
    document.getElementById('profile').style.display = 'none';
}
function Profile() {
    document.getElementById('video').style.display="none";
    document.getElementById('home').style.display="none";
    document.getElementById('search').style.display="none";
    document.getElementById('likes').style.display="none";
    document.getElementById('profile').style.display = 'initial';

}