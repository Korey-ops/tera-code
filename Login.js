ej.base.enableRipple(true);

//To change the Button type.
var button = new ej.buttons.Button({cssClass: 'e-link'});
button.appendTo('#element');

button.element.onclick  = function () {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    location.href = 'home.html'
}