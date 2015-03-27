define([
  'jquery',
  'pat-registry',
  'mockup-patterns-base',
  'mockup-patterns-leaflet'
], function($, registry, Base) {
  'use strict';

  var BundleLeaflet = Base.extend({
    name: 'bundle-leaflet',
    init: function() {
      var self = this;
    }
  });

  // initialize only if we are in top frame
  if (window.parent === window) {
    $(document).ready(function() {
      $('body').addClass('pat-leaflet');
      if (!registry.initialized) {
        registry.init();
      }
    });
  }
  return BundleLeaflet;
});
