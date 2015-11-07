'use strict';
/* global define */
define(['knockout',

  // components
  'components/default/default',
], function(
  ko,
  DefaultComponent
) {

  ko.components.register('cart-icon', DefaultComponent);

  ko.applyBindings({});
});
