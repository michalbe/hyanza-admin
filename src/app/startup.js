'use strict';
/* global define */
define(['knockout',

  // components
  'components/navigation-bar/navigation-bar'
  
], function(
  ko,
  NavigationBar
) {

  ko.components.register('navigation-bar', NavigationBar);

  ko.applyBindings({
    pageTitle: ko.observable('Hyanza Admin')
  });
});
