sap.ui.define([
    "sap/ui/core/UIComponent"
], function (UIComponent) {
    "use strict";

    return UIComponent.extend("my.filmSimulation.library.Component", {
        metadata: {
            manifest: "json"
        },
        init: function () {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
            // enable routing if you set it up in manifest
            this.getRouter().initialize();
        }
    });
});