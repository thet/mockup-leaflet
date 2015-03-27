// Grunt software build task definitions.
/* global module:true */
module.exports = function(grunt) {
  'use strict';

  var MockupGrunt = require('./bower_components/mockup-core/js/grunt'),
      requirejsOptions = require('./js/config'),
      mockup = new MockupGrunt(requirejsOptions);

  var dest_path = 'build/',
      bundle_name = 'leaflet',
      res_path = '++resource++mockup-leaflet/';

  mockup.registerBundle(
    'leaflet', {
      copy: {
        leaflet: {  // copy must have an entry with name of the bundle
          files: [
            {
              expand: true,
              cwd: 'bower_components/leaflet/dist/images/',
              src: '*',
              dest: dest_path,
              rename: function(dest, src) { return dest + bundle_name + '-' + src; }
            },
            {
              expand: true,
              cwd: 'bower_components/Leaflet.fullscreen/dist/',
              src: '*.png',
              dest: dest_path,
              rename: function(dest, src) { return dest + bundle_name + '-' + src; }
            }
          ]
        }
      },
      sed: {  // sed tasks must begin with name of bundle
        'leaflet-1': {
          path: dest_path,
          recursive: true,
          pattern: 'images/layers-2x.png',
          replacement: res_path + bundle_name + '-layers-2x.png'
        },
        'leaflet-2': {
          path: dest_path,
          recursive: true,
          pattern: 'images/layers.png',
          replacement: res_path + bundle_name + '-layers.png'
        },
        'leaflet-3': {
          path: dest_path,
          recursive: true,
          pattern: 'images/marker-icon-2x.png',
          replacement: res_path + bundle_name + '-marker-icon-2x.png'
        },
        'leaflet-4': {
          path: dest_path,
          recursive: true,
          pattern: 'images/marker-icon.png',
          replacement: res_path + bundle_name + '-marker-icon.png'
        },
        'leaflet-5': {
          path: dest_path,
          recursive: true,
          pattern: 'images/marker-shadow.png',
          replacement: res_path + bundle_name + '-marker-shadow.png'
        },
        'leaflet-fullscreen-1': {
          path: dest_path,
          recursive: true,
          pattern: 'fullscreen.png',
          replacement: res_path + bundle_name + '-fullscreen.png'
        },
        'leaflet-fullscreen-2': {
          path: dest_path,
          recursive: true,
          pattern: 'fullscreen@2x.png',
          replacement: res_path + bundle_name + '-fullscreen@2x.png'
        },
      }
    },
    {
      path: dest_path,
      url: res_path + bundle_name
    }
  );
  mockup.initGrunt(grunt);
};
