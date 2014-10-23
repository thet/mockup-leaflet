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
    },
    shim: {
      'leaflet-providers': { deps: ['leaflet'], },
      'leaflet-fullscreen': { deps: ['leaflet'], },
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
