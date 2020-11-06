const bobaOptions = Boba.getDefaultOptions();

// Vertex configs
bobaOptions.numVertices = 40;
bobaOptions.drawVertices = true;
bobaOptions.vertexMinSize = 8;
bobaOptions.vertexMaxSize = 16;
bobaOptions.vertexMinSpeed = 0.2;
bobaOptions.vertexMaxSpeed = 1.5;
bobaOptions.vertexColors = [
  {
    r: 255,
    g: 157,
    b: 30,
    a: 0.18,
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
    a: 0.18,
  },
];

// Shape configs
bobaOptions.drawShapes = false;
bobaOptions.shapeColors = [
  {
    r: 255,
    g: 157,
    b: 30,
    a: 0.06,
  },
];

// Start the animation
Boba.start(bobaOptions);
