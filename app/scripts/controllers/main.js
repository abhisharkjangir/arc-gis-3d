'use strict';

/**
 * @ngdoc function
 * @name arcGisApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the arcGisApp
 */
angular.module('arcGisApp')
  .controller('MainCtrl',['$scope', function ($scope) {

    var v = this;

    require([
     "esri/Map",
     "esri/views/SceneView",
     "esri/layers/SceneLayer",
     "esri/symbols/MeshSymbol3D",
     "dojo/domReady!"
   ], function(Map, SceneView, SceneLayer,MeshSymbol3D) {

     // Create Map
     var map = new Map({
       basemap: "hybrid",
       ground: "world-elevation"
     });

     // Create the SceneView
     var view = new SceneView({
       container: "arcgis",
       map: map,
       camera: {
         position: [-74.0338, 40.6913, 707],
         tilt: 81,
         heading: 50
       }
     });

     // Create SceneLayer and add to the map
     var sceneLayer = new SceneLayer({
       portalItem: {
         id: "2e0761b9a4274b8db52c4bf34356911e"
       },
       popupEnabled: true
     });
     map.add(sceneLayer);

     // Create MeshSymbol3D for symbolizing SceneLayer
     var symbol = {
       type: "mesh-3d", // autocasts as new MeshSymbol3D()
       symbolLayers: [{
         type: "fill", // autocasts as new FillSymbol3DLayer()
         // If the value of material is not assigned, the default color will be grey
         material: {
           color: [244, 247, 134]
         }
       }]
     };
     // Add the renderer to sceneLayer
     sceneLayer.renderer = {
       type: "simple", // autocasts as new SimpleRenderer()
       symbol: symbol
     };
   });

  }]);
