// Screeen broswer sizes
var screenWidthBrowser = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
console.log("Screen Size: " + screenWidthBrowser + "px");

document.getElementsByClassName(".triangle-up").style.borderRight = screenWidthBrowser + "solid transparent";
