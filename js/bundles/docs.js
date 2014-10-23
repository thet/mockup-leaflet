require([
  'mockup-docs',
  'bootstrap-collapse',
  'mockup-fakeserver'
], function(Docs) {
  'use strict';

  var docs = new Docs({
    pages: [
      { id: 'index',
        title: 'Mockup',
        description: 'A collection of client side patterns for faster and easier ' +
                     'web  development',
        text: '[See it in action!](#pattern)',
        autotoc: false
      },
      { id: 'pattern',
        title: 'Patterns',
        description: 'All the patterns you\'ll ever need',
        autotoc: false,
        patterns: [
          { id: 'leaflet',
            title: 'Leaflet',
            description: 'Beautiful Maps',
            url: 'patterns/leaflet/pattern.js'
          }
        ]
      }
    ]

  });

  return docs;
});
