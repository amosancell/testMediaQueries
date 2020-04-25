pl = document.getElementById('pageList');
topnav = document.getElementById('topnav');
function makeBlock() {
    console.log('block');
    let nodelist = document.getElementsByClassName('mover');
    for(let i=0; i < nodelist.length; i++) {
        nodelist.item(i).style.display = 'block';
    }
}
function makeInline() {
    console.log('inline');
    let nodelist = document.getElementsByClassName('mover');
    for(let i=0; i < nodelist.length; i++) {
        nodelist.item(i).style.display = 'inline';
    }
}
function makeNone() {
    console.log('none');
    let nodelist = document.getElementsByClassName('mover');
    for(let i=0; i < nodelist.length; i++) {
        nodelist.item(i).style.display = 'none';
    }
}
// Credit to stack overflow Amjad Masad for the first half of this function
function onMouseOut(event) {
    var e = event.toElement ||event.relatedTarget;
    if(e.parentNode == this || e == this) {
        return;
    }
    makeNone();
}
function pagesList(mq) {
    if(mq.matches) {
        console.log('matched');
        pl.parentNode.replaceChild(pl.cloneNode(true),pl); // remove previous event listeners
        pl = document.getElementById('pageList');
        pl.addEventListener('mouseover',makeBlock);
        topnav.addEventListener('mouseout',onMouseOut,true);
    }
    else {
        console.log('else');
        pl.parentNode.replaceChild(pl.cloneNode(true),pl); // remove previous event listeners
        pl = document.getElementById('pageList');
        pl.addEventListener('mouseover',makeInline);
        topnav.addEventListener('mouseout',onMouseOut,true);
    }
}
var smallScreen = window.matchMedia('screen and (min-width:400px) and (max-width:900px)');
pagesList(smallScreen);
smallScreen.addListener(pagesList);
