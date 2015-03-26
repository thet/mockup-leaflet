 /* globals module:true */

(function() {
  'use strict';

  var requirejsOptions = {
    baseUrl: './',
    optimize: 'none',
    paths: {
      // LEAFLET
      'leaflet': 'bower_components/leaflet/dist/leaflet-src',
      // LEAFLET GEOSEARCH
      'leaflet-geosearch': 'bower_components/L.GeoSearch/l.control.geosearch',
      'leaflet-geosearch-bing': 'bower_components/L.GeoSearch/l.geosearch.provider.bing',
      'leaflet-geosearch-esri': 'bower_components/L.GeoSearch/l.geosearch.provider.esri',
      'leaflet-geosearch-google': 'bower_components/L.GeoSearch/l.geosearch.provider.google',
      'leaflet-geosearch-nokia': 'bower_components/L.GeoSearch/l.geosearch.provider.nokia',
      'leaflet-geosearch-openstreetmap': 'bower_components/L.GeoSearch/l.geosearch.provider.openstreetmap',
      // LEAFLET PROVIDERS
      'leaflet-providers': 'bower_components/leaflet-providers/leaflet-providers',
      // LEAFLET FULLSCREEN
      'leaflet-fullscreen': 'bower_components/Leaflet.fullscreen/dist/Leaflet.fullscreen',
      // PATTERN LEAFLET
      'mockup-patterns-leaflet': 'patterns/leaflet/pattern',
      // mockup-core dependencies
      'mockup-patterns-base': 'bower_components/mockup-core/js/pattern',
      'mockup-registry': 'bower_components/mockup-core/js/registry',
      'mockup-bundles-leaflet': 'js/bundles/leaflet',
      'mockup-bundles-docs': 'js/bundles/docs',
      'mockup-docs': 'bower_components/mockup-core/js/docs/app',
      'mockup-docs-navigation': 'bower_components/mockup-core/js/docs/navigation',
      'mockup-docs-page': 'bower_components/mockup-core/js/docs/page',
      'mockup-docs-pattern': 'bower_components/mockup-core/js/docs/pattern',
      'mockup-docs-view': 'bower_components/mockup-core/js/docs/view',
      'mockup-fakeserver': 'bower_components/mockup/tests/fakeserver',
      'JSXTransformer': 'bower_components/react/JSXTransformer',
      'backbone': 'bower_components/backbone/backbone',
      'bootstrap-collapse': 'bower_components/bootstrap/js/collapse',
      'bootstrap-transition': 'bower_components/bootstrap/js/transition',
      'expect': 'bower_components/expect/index',
      'jquery': 'bower_components/jquery/dist/jquery',
      'marked': 'bower_components/marked/lib/marked',
      'react': 'bower_components/react/react',
      'sinon': 'bower_components/sinonjs/sinon',
      'text': 'bower_components/requirejs-text/text',
      'underscore': 'bower_components/lodash/dist/lodash.underscore'
    },
    shim: {
      'leaflet-providers': { deps: ['leaflet'], },
      'leaflet-fullscreen': { deps: ['leaflet'], },
      'leaflet-geosearch': { deps: ['leaflet'], },
      'leaflet-geosearch-bing': { deps: ['leaflet-geosearch'], },
      'leaflet-geosearch-esri': { deps: ['leaflet-geosearch'], },
      'leaflet-geosearch-google': { deps: ['leaflet-geosearch'], },
      'leaflet-geosearch-nokia': { deps: ['leaflet-geosearch'], },
      'leaflet-geosearch-openstreetmap': { deps: ['leaflet-geosearch'], },
      // mockup-core shims
      'backbone': {exports: 'window.Backbone', deps: ['underscore', 'jquery']},
      'bootstrap-collapse': {exports: 'window.jQuery.fn.collapse.Constructor', deps: ['jquery']},
      'bootstrap-transition': {exports: 'window.jQuery.support.transition', deps: ['jquery']},
      'expect': {exports: 'window.expect'},
      'sinon': {exports: 'window.sinon'},
      'underscore': {exports: 'window._'}
    },
    wrapShim: true
  };

  if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
    module.exports = requirejsOptions;
  }
  if (typeof requirejs !== 'undefined' && requirejs.config) {
    requirejs.config(requirejsOptions);
  }

}());
