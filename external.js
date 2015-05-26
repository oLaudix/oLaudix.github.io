setInterval(

function()
{
	//alert("test")
},
3000
);

var mouse = {x: 0, y: 0};

document.addEventListener('mousemove', function(e){ 
    mouse.x = e.clientX || e.pageX; 
    mouse.y = e.clientY || e.pageY 
	console.log(mouse.x + ", " + mouse.y)
}, false);




function click(x,y){
    var ev = document.createEvent("MouseEvent");
    var el = document.elementFromPoint(x,y);
    ev.initMouseEvent(
        "click",
        true /* bubble */, true /* cancelable */,
        window, null,
        x, y, 0, 0, /* coordinates */
        false, false, false, false, /* modifier keys */
        0 /*left*/, null
    );
    el.dispatchEvent(ev);
}



/*

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://olaudix.github.io/external.js';
document.getElementsByTagName('head')[0].appendChild(script);

*/