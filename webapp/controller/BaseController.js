sap.ui.define([
	"sap/ui/core/mvc/Controller",
    "sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"sap/ui/core/Fragment",
	'sap/m/MessageToast',
	"sap/ui/core/Core"

], function(
	Controller,
	UIComponent,
	History,
	Fragment,
	MessageToast,
	Core
	
) {
	"use strict";

	return Controller.extend("com.demosapui5.demosapui5.controller.BaseController", {
		_initTheme: function(){
			if(localStorage.getItem("tipoTema")){
				Core.applyTheme(localStorage.getItem("tipoTema"));
			}
		},
        onNavBack: function () {
			// console.log("go Back button clicked");
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				// let oRouter = this.getRouter();
				let oRouter = UIComponent.getRouterFor(this);
				oRouter.navTo("Main");
			}
		},
		getRouter: function(){
			 return UIComponent.getRouterFor(this)
		},
		onOpenDialog: function () {
			let inp = this.getView().byId("nameInput").getValue();
			if(!inp){
				MessageToast.show("Ingrese un valor");
				this.getView().byId("nameInput").setValueState("Error")
				return 
			}
			this.getView().byId("nameInput").setValueState("None")
			if (!this.pDialog) {
				this.pDialog = this.loadFragment({
					name: "com.demosapui5.demosapui5.view.Dialog"
				});
			}
			let view = this.getView();
			this.pDialog.then(function (oDialog) {
				view.byId("idInput").setText(inp);
				oDialog.open();
				view.byId("nameInput").setValue("");
			});
		},
		onCloseDialog: function(){
			this.byId("idDialog").close();
		},
		onTheme: function(oEvent){
			let theme = oEvent.getSource().data("tipoTema");
			if(theme=="L"){
				Core.applyTheme("sap_horizon");
				localStorage.setItem("tipoTema", "sap_horizon");
			}else{
				Core.applyTheme("sap_horizon_dark")
				localStorage.setItem("tipoTema", "sap_horizon_dark");
			}
		}
	});
});