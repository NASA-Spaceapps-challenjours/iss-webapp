function addPlaceMarker() {
  let placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
  placemarkAttributes.imageOffset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION,
    0.3,
    WorldWind.OFFSET_FRACTION,
    0.0
  );

  placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
  placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
    WorldWind.OFFSET_FRACTION,
    0.5,
    WorldWind.OFFSET_FRACTION,
    1.0
  );

  let placemark = new WorldWind.Placemark(position, false, placemarkAttributes);
  placemark.alwaysOnTop = true;
  placemark.attributes = placemarkAttributes;
  placemarkLayer.addRenderable(placemark);

  return placemark;
}

// Create a WorldWindow for the canvas.
var wwd = new WorldWind.WorldWindow("canvasOne");
var highlightController = new WorldWind.HighlightController(wwd);

// Add some image layers to the WorldWindow's globe.
wwd.addLayer(new WorldWind.BMNGOneImageLayer());
wwd.addLayer(new WorldWind.BMNGLandsatLayer());
// wwd.addLayer(new WorldWind.BingAerialWithLabelsLayer(null));

// Add a COLLADA model of the ISS that orbits the Earth
var modelLayer = new WorldWind.RenderableLayer();
wwd.addLayer(modelLayer);

// Add Atmosphere
var atmosphereLayer = new WorldWind.AtmosphereLayer();
wwd.addLayer(atmosphereLayer);

// Add Stars
var starFieldLayer = new WorldWind.StarFieldLayer();
wwd.addLayer(starFieldLayer);

// Add ISS
var issLayer = new WorldWind.RenderableLayer();
wwd.addLayer(issLayer);

// Add Placemark
var placemarkLayer = new WorldWind.RenderableLayer("Placemark");
wwd.addLayer(placemarkLayer);

var pinLibrary =
  WorldWind.configuration.baseUrl + "images/pushpins/plain-black.png"; // location of the image files
placemark,
  (placemarkAttributes = new WorldWind.PlacemarkAttributes(null)),
  (latitude = 37.6872),
  (longitude = -97.3301);

// Set up the common placemark attributes.
placemarkAttributes.imageScale = 1;
placemarkAttributes.imageOffset = new WorldWind.Offset(
  WorldWind.OFFSET_FRACTION,
  0.3,
  WorldWind.OFFSET_FRACTION,
  0.0
);
placemarkAttributes.imageColor = WorldWind.Color.WHITE;
placemarkAttributes.labelAttributes.offset = new WorldWind.Offset(
  WorldWind.OFFSET_FRACTION,
  0.5,
  WorldWind.OFFSET_FRACTION,
  1.0
);
placemarkAttributes.labelAttributes.color = WorldWind.Color.YELLOW;
placemarkAttributes.drawLeaderLine = true;
placemarkAttributes.leaderLineAttributes.outlineColor = WorldWind.Color.RED;

// For each placemark image, create a placemark with a label.
// Create the placemark and its label.
placemark = new WorldWind.Placemark(
  new WorldWind.Position(latitude, longitude, 1e2),
  true,
  null
);
placemark.label =
  "Placemark for Wichita" +
  "Lat " +
  placemark.position.latitude.toPrecision(4).toString() +
  "\n" +
  "Lon " +
  placemark.position.longitude.toPrecision(5).toString();
placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

// Create the placemark attributes for this placemark. Note that the attributes differ only by their
// image URL.
placemarkAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
placemarkAttributes.imageSource = pinLibrary;
placemark.attributes = placemarkAttributes;

// Create the highlight attributes for this placemark. Note that the normal attributes are specified as
// the default highlight attributes so that all properties are identical except the image scale. You could
// instead vary the color, image, or other property to control the highlight representation.
highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
highlightAttributes.imageScale = 1.2;
placemark.highlightAttributes = highlightAttributes;

// Add the placemark to the layer.
placemarkLayer.addRenderable(placemark);

// ISS Position values
var lat = 10.0;
var lon = -125.0;
var alt = 800000.0;
// // --- started working on line for space station ---
// fetch("https://iss-go-backend-z6hx3vadea-uc.a.run.app/getIssLocation")
//   .then((res) => res.json())
//   .then((data) => {
//     const { latitude, longitude, altitude } = data;
//     wwd.navigator.lookAtLocation.latitude = latitude;
//     wwd.navigator.lookAtLocation.longitude = longitude;
//   })
//   .catch((err) => console.log("ewwow"));

// var pathPositions = [];

// // Create and assign the path's attributes.
// var pathAttributes = new WorldWind.ShapeAttributes(null);
// pathAttributes.outlineColor = WorldWind.Color.YELLOW;
// pathAttributes.drawVerticals = true;
// pathAttributes.altitudeMode = WorldWind.RELATIVE_TO_GROUND
// pathAttributes.interiorColor = new WorldWind.Color(0, 1, 1, 0.5);

// // Create the path.
// var path = new WorldWind.Path(pathPositions, pathAttributes);
// path.highlighted = true;
// path.followTerrain = true;
// path.extrude = true; // Make it a curtain.
// path.useSurfaceShapeFor2D = true; // Use a surface shape in 2D mode.

// // Create and assign the path's highlight attributes.
// var highlightAttributes = new WorldWind.ShapeAttributes(pathAttributes);
// highlightAttributes.outlineColor = WorldWind.Color.RED;
// highlightAttributes.interiorColor = new WorldWind.Color(1, 1, 1, 0.5);
// path.highlightAttributes = highlightAttributes;

// // Add the path to a layer and the layer to the WorldWindow's layer list.
// var pathsLayer = new WorldWind.RenderableLayer();
// pathsLayer.displayName = "Paths";
// pathsLayer.addRenderable(path);
// wwd.addLayer(pathsLayer);

// fetch("https://iss-go-backend-z6hx3vadea-uc.a.run.app/getPastFuturePresentIssLocation")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(pathPositions)
//   })
//   .catch((err) => console.log("ewwow"));
// // --- end work on line for space station ---

var position = new WorldWind.Position(lat, lon, alt);
var config = { dirPath: "/models/" };

var placemark = addPlaceMarker();

var colladaLoader = new WorldWind.ColladaLoader(position, config);
var oneCycle = true;

colladaLoader.load("ISSComplete1.dae", function (colladaModel) {
  colladaModel.scale = 500000;
  modelLayer.addRenderable(colladaModel);
  modelLayer.addRenderable(placemark);
  window.setInterval(function () {
    fetch("https://iss-go-backend-z6hx3vadea-uc.a.run.app/getIssLocation")
      .then((res) => res.json())
      .then((data) => {
        const { latitude, longitude, altitude } = data;
        lat = latitude;
        lon = longitude;
        alt = altitude;
      })
      .catch((err) => console.log("ewwow"));

    position = new WorldWind.Position(lat, lon, alt);

    // Placemark label recording
    placemark.label =
      "ISS Space Station \n" +
      "Lat " +
      modelLayer.renderables[0].position.latitude.toPrecision(4).toString() +
      "\n" +
      "Lon " +
      modelLayer.renderables[0].position.longitude.toPrecision(5).toString();
    // ISS Model position updating
    modelLayer.renderables[0].position = position;
    modelLayer.renderables[1].position = position;
    wwd.redraw();
  }, 1000);
});
