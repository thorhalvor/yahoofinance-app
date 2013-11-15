define(['jquery', 'plugins/router','durandal/app', 'jquery-ui','yahooproxy'], 
    function ($, router,app,jqueryui,yahooproxy) {
    var viewModel = {
        router: router,
        activate: function () {
            router.map([
                { route: '', title: 'Search', moduleId: 'viewmodels/search', nav: true }
            ]).buildNavigationModel();
            
            return router.activate();
        },
        attached: function(view) {          
           
        }
    };

    return viewModel;
});