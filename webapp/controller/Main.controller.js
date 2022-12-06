sap.ui.define([
    "./BaseController",
    "sap/ui/core/Core"



],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (
        BaseController,
        Core
        ) {
        "use strict";

        return BaseController.extend("com.demosapui5.demosapui5.controller.Main", {
            onInit: function () {
                
                this._initTheme();  

            },            
            onPressTile: function (oEvent) {
                //  console.log("Tile pulsado");
                let bindingObject = oEvent.getSource().getBindingContext("myLocalModel").getObject();
                // console.log(`${bindingObject.Title} ${bindingObject.Description}`);
                // console.log("Tile pulsado");
                let oRouter = this.getRouter();
                oRouter.navTo(bindingObject.Title);
            },
            texti18n: function (strText) {
                return this.getView().getModel("i18n").getResourceBundle().getText(strText);
            }
           
           
        });
    });
