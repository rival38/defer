function embedOffice(t) {
   document.write('<div style="text-align:center;margin:0 auto;width:100%;"><div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;margin:0;"><iframe style="border:0;position:absolute;top:0;left:0;width:100%;height:100%;" data-src="https://drive.google.com/file/d/');
   document.write(t);
   document.write('/preview" allowfullscreen></iframe><div style="width: 600px; height: 380px; position: absolute; opacity:0; right:10px; top: 0px;">&nbsp;</div></div></div>');
}
function init() {
var vidDefer = document.getElementsByTagName('iframe');
for (var i=0; i<vidDefer.length; i++) {
if(vidDefer[i].getAttribute('data-src')) {
vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
} } }
window.onload = init;