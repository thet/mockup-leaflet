 /* globals module:true */

(function() {
  'use strict';

  var requirejsOptions = {
    baseUrl: './',
    optimize: 'none',
    paths: {
      'leaflet': 'bower_components/leaflet/dist/leaflet-src',
      'leaflet-providers': 'bower_components/leaflet-providers/leaflet-providers',
      'leaflet-fullscreen': 'bower_components/leaflet-fullscreen/Control.FullScreen',
      'mockup-patterns-base': 'bower_components/mockup-core/js/pattern',
      'mockup-registry': 'bower_components/mockup-core/js/registry',
      'mockup-patterns-leaflet': 'patterns/leaflet/pattern',
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
