function Home(n) {
    if (n == 1) {
        document.getElementById('video').style.display = "none";
        document.getElementById('home').style.display = "initial";
        document.getElementById('search').style.display = "none";
        document.getElementById('likes').style.display = "none";
        document.getElementById('profile').style.display = 'none';

    }
    else if (n == 2) {
        document.getElementById('video').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "initial";
        document.getElementById('likes').style.display = "none";
        document.getElementById('profile').style.display = 'none';

    }
    else if (n == 3) {
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('likes').style.display = "none";
        document.getElementById('profile').style.display = 'none';
        document.getElementById('video').style.display = 'initial';
    }
    else if (n == 4) {
        document.getElementById('video').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('likes').style.display = "initial";
        document.getElementById('profile').style.display = 'none';
    }
    else {
        document.getElementById('video').style.display = "none";
        document.getElementById('home').style.display = "none";
        document.getElementById('search').style.display = "none";
        document.getElementById('likes').style.display = "none";
        document.getElementById('profile').style.display = 'initial';
    }

}
