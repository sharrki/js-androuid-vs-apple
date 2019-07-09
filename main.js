//javascripot commands

function android(){
    document.getElementById('iron').src= "images/Android-Logo.jpg";
    document.getElementById('link').innerHTML= "Android Home";
    document.getElementById('link').style.backgroundColor= "#a4c93b"
    document.getElementById('link').href= "https://www.android.com/";
    document.querySelector('body').style.backgroundColor='#a4c93b';
}

function apple(){
    document.getElementById('iron').src= "images/apple-Logo.jpg";
    document.getElementById('link').innerHTML= "Apple Home";
    document.getElementById('link').style.backgroundColor= "#b6bcca";
    document.getElementById('link').href= "https://www.apple.com/";
    document.querySelector('body').style.backgroundColor=' #b6bcca';
}

document.getElementById("an").addEventListener('click', android);
document.getElementById("app").addEventListener('click',apple);