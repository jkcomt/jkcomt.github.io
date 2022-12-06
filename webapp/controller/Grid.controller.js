sap.ui.define([
	"./BaseController"
], function(
	BaseController
) {
	"use strict";

	return BaseController.extend("com.demosapui5.demosapui5.controller.Grid", {

        onInit: function () {
	
		},
        onSliderMoved: function (oEvent) {
			var fValue = oEvent.getParameter("value");
			this.byId("idGridPanel").setWidth(fValue + "%");
		}
	});
});