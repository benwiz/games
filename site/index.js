const options = Boba.getDefaultOptions();
console.log(options);

var color1 = { r: 248, g: 186, b: 10, a: 0.2 };
options.vertexColors = [color1];
options.edgeColors = [color1];

var color2 = { ...color1, a: 0.05 };
options.shapeColors = [color2];
options.drawShapes = false;

options.vertexMaxSpeed = 1.0;
options.vertexMinSpeed = 0.2;

Boba.start(options);


// Lol, for Marg
if (window.location.host == 'games.benwiz.io') {
    const powerhour = document.querySelector('#power-hour');
    powerhour.style.display = 'none';
}
