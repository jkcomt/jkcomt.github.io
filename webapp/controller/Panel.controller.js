sap.ui.define([
	"./BaseController"
	
], function (
	BaseController,

) {
	"use strict";

	return BaseController.extend("com.demosapui5.demosapui5.controller.Panel", {

		onInit: function () {
			let oRouter = this.getRouter()
			oRouter.getRoute("ViewFragment").attachMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {
			
		}
		
	});
});