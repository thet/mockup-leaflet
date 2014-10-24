/* globals module:true */
module.exports = function(grunt) {
  'use strict';

  var deepExtend = function(destination, source) {
    // deep object merging
    // from: http://andrewdupont.net/2009/08/28/deep-extending-objects-in-javascript/
    //
    // cannot use jquery here, since it's somehow initializing and complains
    // about bundle-docs not found:
    // var jquery = require('./' + requirejsOptionsCore.paths.jquery);
    // var requirejsOptions = jquery.extend(true, {}, requirejsOptionsCore, require('./js/config'));
    //
    for (var property in source) {
      if (source[property] && source[property].constructor && source[property].constructor === Object) {
        destination[property] = destination[property] || {};
        destination[property] = deepExtend(destination[property], source[property]);
      } else {
        destination[property] = source[property];
      }
    }
    return destination;
  };

  var MockupGrunt = require('./bower_components/mockup-core/js/grunt');
  //var requirejsOptionsCore = require('./bower_components/mockup-core/js/config');
  //var requirejsOptions = deepExtend(deepExtend({}, requirejsOptionsCore), require('./js/config'));

  var requirejsOptions = require('./js/config');

  console.log(requirejsOptions);
  var mockup = new MockupGrunt(requirejsOptions);
  var docsExtraIncludes = [];


  console.log(mockup.patterns);
  for (var i = 0; i < mockup.patterns.length; i = i + 1) {
    if (mockup.patterns[i].indexOf('-url') === -1) {
      docsExtraIncludes.push(mockup.patterns[i]);
      docsExtraIncludes.push('text!' + requirejsOptions.paths[mockup.patterns[i]] + '.js');
    }
  }
  console.log(docsExtraIncludes);

  mockup.registerBundle('docs',
    {less: {options: {modifyVars: {bowerPath: '"bower_components/"' }}}},
    {extraInclude: docsExtraIncludes},
    ['less',]
  );
  mockup.registerBundle('leaflet');
  mockup.initGrunt(grunt);
};
