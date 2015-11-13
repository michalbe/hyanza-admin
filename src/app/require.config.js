// require.js looks for the following global when initializing
var require = {
  baseUrl: ".",
  paths: {
    "knockout": "bower_modules/knockout/dist/knockout",
    "text":     "bower_modules/requirejs-text/text"
  },

  urlArgs: "bust=" + (new Date()).getTime()
};
