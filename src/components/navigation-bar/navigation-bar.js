'use strict';
/* global define, $ */

define(['knockout', 'text!./navigation-bar.html'], function(ko, template) {

  function NavigationBar(params) {
    $('navigation-bar .button-collapse').sideNav();

    var menuItems = ko.observable([
      {
        name: 'Catalog',
        icon: 'shopping_cart'
      },
      {
        name: 'Notifications',
        icon: 'sms'
      },
      {
        name: 'Settings',
        icon: 'settings'
      },
      {
        name: 'Log Out',
        icon: 'account_circle'
      }
      ]);

    return {
      menuItems: menuItems
    };
  }

  return { viewModel: NavigationBar, template: template };
});
