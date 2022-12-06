sap.ui.define([
	"./BaseController",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function(
	BaseController,
	Device,
	JSONModel
) {
	"use strict";

	return BaseController.extend("com.demosapui5.demosapui5.controller.Carrusel", {
        onInit: function () {
			var oProductsModel = this.getView().getModel("myLocalModel"),
				iPagesCount = 1;

			if (Device.system.desktop) {
				iPagesCount = 4;
			} else if (Device.system.tablet) {
				iPagesCount = 2;
			}

			var oSettingsModel = new JSONModel({ pagesCount: iPagesCount });

			this.getView().setModel(oSettingsModel, "settings");
			this.getView().setModel(oProductsModel, "myLocalModel");
		}
	});
});