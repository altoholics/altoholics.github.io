/* globals requirejs */
requirejs.config({
  baseUrl: '.',
  paths: {
    "jquery": "//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"
  }
});

requirejs(["app"]);