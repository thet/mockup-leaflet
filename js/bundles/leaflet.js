define([
  'jquery',
  'mockup-registry',
  'mockup-patterns-leaflet'
], function($, Registry) {
  'use strict';

  $(document).ready(function() {
    var $registry = $('.pat-leaflet');
    Registry.scan($registry);
  });

});
