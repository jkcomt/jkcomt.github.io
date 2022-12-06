sap.ui.define([
	"./BaseController",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"


], function (
	BaseController,
	Filter,
	FilterOperator,
	
) {
	"use strict";

	return BaseController.extend("com.demosapui5.demosapui5.controller.List", {

		onInit: function () {
			console.log("Este es el onInit");

		},
		onItemPress: function (oEvent) {
			//let bindingObject = oEvent.getSource().getBindingContext("myLocalModel").getObject();
			let productId = oEvent.getSource().getSelectedItem().getBindingContext("myLocalModel").getObject().ProductId;
			let oRouter = this.getRouter();

			oRouter.navTo("ViewDatail", {
				ProductId: productId
			})
			//let bindingObject = oEvent.getParameter("listItem").getBindingContext("myLocalModel").getObject()
			//console.log(`${bindingObject.Name} ${bindingObject.Description} ${bindingObject.ProductId}`);

		},
		onSearch: function (oEvent) {

			let aFilters = [];
			let sSearch = oEvent.getSource().getValue();
			//Filtra por la pro´piedad 'Name' siempre y cuando contenga una conincidencia 
			//con el valor de la variable sSearch -- y añade mi array a filter 
			if (sSearch && sSearch.length > 0) {
				let filter = new Filter("Name", FilterOperator.Contains, sSearch)
			//añade mi filtro al array aFilters
				aFilters.push(filter);
			}
			let oList = this.byId("productList");
			let oBinding = oList.getBinding("items");
			oBinding.filter(aFilters)
		},
		onBeforeRendering : function(){
			console.log("Este es el onBeforeRendering");
		},
		onAfterRendering: function(){
			console.log("Este es el onAfterRendering");
		},

		onPressDestroy: function(){
			this.getView().destroy();

		},
		onExit: function() {
			console.log("Se ejecuta: onExit()");
		}
	});
});
