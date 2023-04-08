alert("Hey Hiii");

let mybutton = document.getElementById("mybtn");

window.onscroll = function()
    {scrollfunction()};

function scrollfunction(){
    if (document.body.scrollTop > 20 == document.documentElement.scrollTop > 20 ){
        mybutton.style.display = "none";
    }
    else {
        mybutton.style.display = "block";
    }
}

function topfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
