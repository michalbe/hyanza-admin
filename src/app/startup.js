'use strict';
/* global define */
define(['knockout',

  // components
  'components/default/default',
], function(
  ko,
  DefaultComponent
) {

  ko.components.register('default', DefaultComponent);

  ko.applyBindings({});
});
