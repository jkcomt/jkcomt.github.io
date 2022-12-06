sap.ui.define([
	"./BaseController",
	'sap/m/MessageToast',
	"sap/ui/model/json/JSONModel"


], function (
	BaseController,
	MessageToast,
	JSONModel
) {
	"use strict";

	return BaseController.extend("com.demosapui5.demosapui5.controller.Detail", {
		onInit: function () {
			let oRouter = this.getRouter()
			oRouter.getRoute("ViewDatail").attachMatched(this._onObjectMatched, this);
		},
		_onObjectMatched: function (oEvent) {

			let sProductId = oEvent.getParameter("arguments").ProductId;
			if(!sProductId){
				sProductId="HT-1002";
			}
			let aProducts = this.getView().getModel("myLocalModel").getData().ProductCollection; 
			let oObect = aProducts.find(item => item.ProductId === sProductId);
			let mProduct = new JSONModel(oObect);
			this.getView().setModel(mProduct, "Product");
			this.getView().getModel("Product").refresh(true);

			//(function(item){return item.ProductId === sProducId})
		},
		onPressPrice: function(oEvent) {

			let datoPrice = this.getView().getModel("Product").getData();
			MessageToast.show(`${datoPrice.CurrencyCode} ${datoPrice.Price}`);
			
		}

	});
});