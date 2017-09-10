try {
    console.log("App.Initializing");

    var onJQueryInit = function($, FastClick) {
        $(document).bind("mobileinit", function () {
            $.mobile.defaultHomeScroll = 0;
            $.event.special.swipe.scrollSupressionThreshold = 100;
        });

        FastClick.attach(document.body);
    };

    var onJQueryMobileInit = function($) {
    };

    var initializeAppComponents = function($) {
        require([
            "app/Router",
            "app/swiper"
        ], function(Router) {
            var router = Router.createRouter();
            console.log("app initialized");
        });
    };

    require.config({
        baseUrl: 'js',
        paths: {
            jquery: 'vendor/jquery-2.1.1.min',
            fastclick: "vendor/fastclick",
            backbone: "vendor/backbone",
            iscroll: "vendor/iscroll-zoom",
            underscore: "vendor/underscore",
            swiper: "vendor/idangerous.swiper"
        },

        shim: {
            'underscore': {
                exports: '_'
            },
            "backbone": {
                "deps": [ "underscore", "jquery" ],
                "exports": "Backbone"  //attaches "Backbone" to the window object
            },
           "swiper": {
                exports: "Swiper"
            },
            "iscroll": {
                exports: "IScroll"
            }
        }
    });

    require([
        "jquery",
        "fastclick"
        ], function($, FastClick) {

        console.log("jquery initialized");
        onJQueryInit($, FastClick);

        initializeAppComponents($);

        /*
        require(["jquerymobile"], function() {
            console.log("juerymobile initialized");
            onJQueryMobileInit($);

            setTimeout(function() {
            }, 0);
        });
        */

    } );


} catch (exception) {
    console.log(exception);
}
