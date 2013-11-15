requirejs.config({
    paths: {
        'text': 'js/lib/require/text',
        'durandal':'js/lib/durandal/js',
        'plugins' : 'js/lib/durandal/js/plugins',
        'transitions' : 'js/lib/durandal/js/transitions',
        'knockout': 'js/lib/knockout/knockout-3.0.0',
        'bootstrap': 'js/lib/bootstrap/js/bootstrap',
        'jquery': 'js/lib/jquery/js/jquery-1.10.2.min',
        'jquery-ui': 'js/lib/jquery/js/jquery-ui-1.10.3.custom.min',
        //custom
        'yahooproxy':'js/yahooFinanceProxyClient'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true);
    system.debug(true);
    //>>excludeEnd("build");

    app.title = 'YahooFinance-App inside Durandal main.js';

    console.log("inside druandal main.js");

    app.configurePlugins({
        router:true,
        dialog: true,
        widget: true
    });

    app.start().then(function() {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        //Show the app by setting the root view model for our application with a transition.
        app.setRoot('viewmodels/shell', 'entrance');
    });
});