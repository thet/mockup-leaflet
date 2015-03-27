/* Leaflet pattern.
 *
 * Options:
 *    errorClass(string): dummy
 *
 * Documentation:
 *   # General
 *
 *   This is an Leaflet integration pattern.
 *
 *   # Example
 *
 *   {{ example-1 }}
 *
 * Example: example-1
 *    <div class="pat-leaflet"></div>
 *
 *
 */

define([
  'mockup-patterns-base',
  'leaflet',
  'leaflet-providers',
  'leaflet-fullscreen',
  'leaflet-geosearch-esri'
], function (Base, L) {
  'use strict';

  var Leaflet = Base.extend({
    name: 'leaflet',
    trigger: '.pat-leaflet',
    defaults: {
      errorClass: 'error'
    },
    init: function () {
      var self = this,
          $el = self.$el,
          map,
          baseLayers,
          editable;
          //markers,
          //bounds,
          //update_inputs,
          //geosearch;

      editable = false;
      //editable = ($('div.geolocation_wrapper.edit').length && true) || false;

      L = window.L; // have to use window.L - leaflet registers anonymous amd module and does not return global L...?

      debugger;

      map = new L.Map($el[0], {
        fullscreenControl: true
      });

      // Layers
      baseLayers = {
        'Map': L.tileLayer.provider('OpenStreetMap.HOT'),
        'Satellite': L.tileLayer.provider('Esri.WorldImagery'),
        'Outdoors': L.tileLayer.provider('Thunderforest.Outdoors'),
        'Toner': L.tileLayer.provider('Stamen.Toner'),
      };
      baseLayers['Map'].addTo(map);
      L.control.layers(baseLayers).addTo(map);

      /*
      // ADD MARKERS
      markers = new L.MarkerClusterGroup();
      $('div.geolocation').each(function() {
          var geo, marker;
          geo = $(this).data();
          marker = new L.Marker([geo.latitude, geo.longitude], {
              draggable: editable
          });
          marker.bindPopup(geo.description);
          if (editable) {
              marker.on('dragend', function(e) {
                  var coords = e.target.getLatLng();
                  update_inputs(coords.lat, coords.lng);
              });
          }
          markers.addLayer(marker);
      });
      map.addLayer(markers);

      // autozoom
      bounds = markers.getBounds();
      map.fitBounds(bounds);

      if (editable) {
          update_inputs = function(lat, lng) {
              var map_wrap = $('#map').closest('div.geolocation_wrapper.edit');
              map_wrap.find('input.latitude').attr('value', lat);
              map_wrap.find('input.longitude').attr('value', lng);
          };
          map.on('geosearch_showlocation', function(e) {
              var coords = e.Location;
              update_inputs(coords.Y, coords.X);
          });

          // GEOSEARCH
          geosearch = new L.Control.GeoSearch({
              draggable: editable,
              provider: new L.GeoSearch.Provider.Google()
              //provider: new L.GeoSearch.Provider.OpenStreetMap()
          });
          geosearch.addTo(map);
      }
      */


    },

  });

  return Leaflet;
});
