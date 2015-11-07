'use strict';
/* global define */

define(['knockout', 'text!./default.html'], function(ko, template) {

  function Default(params) {
    var qty = params && params.qty || ko.observable(0);

    if (qty() < 0) {
      qty(0);
    }

    var changeQty = function(value) {
      var newQty = parseInt(qty(), 10) + value;
      if (newQty >= 0) {
        qty(newQty);
      }
    };

    var increment = function() {
      changeQty(+1);
    };

    var decrement = function() {
      changeQty(-1);
    };

    return {
      qty: qty,
      increment: increment,
      decrement: decrement
    };
  }

  return { viewModel: Default, template: template };
});
