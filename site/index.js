const bobaOptions = Boba.getDefaultOptions();

// Vertex configs
bobaOptions.numVertices = Math.ceil(0.02 * window.innerWidth);
bobaOptions.drawVertices = true;
bobaOptions.vertexMinSize = 8;
bobaOptions.vertexMaxSize = 16;
bobaOptions.vertexMinSpeed = 0.0001  * window.innerHeight;
bobaOptions.vertexMaxSpeed = 0.001 * window.innerHeight;
bobaOptions.vertexColors = [
  {
    r: 255,
    g: 157,
    b: 30,
    a: 0.06,
  },
];

// Edge configs
bobaOptions.numNeighbors = 2;
bobaOptions.drawEdges = true;
bobaOptions.edgeColors = [
  {
    r: 255,
    g: 157,
    b: 30,
    a: 0.06,
  },
];

// Shape configs
bobaOptions.drawShapes = false;
bobaOptions.shapeColors = [
  {
    r: 255,
    g: 157,
    b: 30,
    a: 0.005,
  },
];

// Start the animation
Boba.start(bobaOptions);
