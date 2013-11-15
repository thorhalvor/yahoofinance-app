 requirejs.config({
    "baseUrl": "javascripts",
    "paths": {
      "app": "../",
      "jquery": "lib/jquery-1.10.2.min",
      "jqueryui": "lib/jquery-ui-1.10.3.custom.min",      
      "knockout": "lib/knockout-3.0.0",
      "yahooproxy":"yahooFinanceProxyClient"
    }
});

// Load the main app module to start the app
requirejs(["main"]);