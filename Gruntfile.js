/* globals module:true */
module.exports = function(grunt) {
  'use strict';

  var MockupGrunt = require('./bower_components/mockup-core/js/grunt');
  var requirejsOptions = require('./js/config');

  var mockup = new MockupGrunt(requirejsOptions);
  var docsExtraIncludes = [];

  for (var i = 0; i < mockup.patterns.length; i = i + 1) {
    if (mockup.patterns[i].indexOf('-url') === -1) {
      docsExtraIncludes.push(mockup.patterns[i]);
      docsExtraIncludes.push('text!' + requirejsOptions.paths[mockup.patterns[i]] + '.js');
    }
  }

  mockup.registerBundle('docs',
    {less: {options: {modifyVars: {bowerPath: '"bower_components/"' }}}},
    {extraInclude: docsExtraIncludes},
    ['less',]
  );
  mockup.registerBundle('leaflet');
  mockup.initGrunt(grunt);
};
