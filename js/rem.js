function setRem() {
    var clientWidht = document.clientWidht || document.body.clientWidht;

    clientWidht = clientWidht > 520 ? 520 : clientWidht;
    clientWidht = clientWidht < 124 ? 124 : clientWidht;

    var rem = clientWidht / 17;
    var html = document.getElementsByTagName('html')[0];
    html.style.fontSize = rem + 'px';
}
window.onload  = setRem;
window.onresize = setRem;