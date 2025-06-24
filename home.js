ej.base.enableRipple(true);

var button = new ej.buttons.Button({cssClass: 'e-link'});
button.appendTo('#store');

button.element.onclick  = function () {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    location.href = 'store.html'
}