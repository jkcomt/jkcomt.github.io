sap.ui.define([
	"./BaseController",
	"sap/ui/model/json/JSONModel"

], function(
	BaseController,
	JSONModel
) {
	"use strict";

	return BaseController.extend("com.demosapui5.demosapui5.controller.FormView", {

		onInit: function () {
		 let defaultProduct = {
				"ProductId": "",			
				"Category": "",			
				"MainCategory": "Computer Components",			
				"TaxTarifCode": "1",		
				"SupplierName": "Technocom",		
				"WeightMeasure": 0.2,			
				"WeightUnit": "KG",			
				"Description": "",			
				"Name": "",		
				"DateOfSale": "2017-05-17",			
				"ProductPicUrl": "",			
				"Status": "Available",			
				"Quantity": 0,			
				"UoM": "PC",			
				"CurrencyCode": "EUR",		
				"Price": 0,			
				"Width": 32,			
				"Depth": 22,			
				"Height": 3,			
				"DimUnit": "cm"
			
			}
			let newProduct = new JSONModel(defaultProduct);
			this.getView().setModel(newProduct, "NewProduct");
		},
		onSubmit: function(){
			this.validador();
			let oProduct = this.getView().getModel("NewProduct").getData();
			let productCollection = this.getView().getModel("myLocalModel").getData().ProductCollection;
			productCollection.unshift(oProduct);
			console.log(productCollection[0]); 
		},
		onReset: function(){
			let oProduct = this.getView().getModel("NewProduct").getData();
			oProduct["ProductId"] = "";
			oProduct["Name"] = "";
			oProduct["Category"] = "";
			oProduct["Description"] = "";
			oProduct["Quantity"] = 0;
			oProduct["Price"] = 0;
			this.getView().getModel("NewProduct").refresh(true);
		},
		validador:function(){
			let oProduct = this.getView().getModel("NewProduct").getData();
			if(oProduct["ProductId"] == ""){
				this.getView().byId("productid").setValueState("Error");
			}else{
				this.getView().byId("productid").setValueState("None");
			}
			if(oProduct["Name"] == ""){
				this.getView().byId("nameid").setValueState("Error");
			}else{
				this.getView().byId("nameid").setValueState("None");
			}
			if(oProduct["Category"] == ""){
				this.getView().byId("categoryid").setValueState("Error");
			}else{
				this.getView().byId("categoryid").setValueState("None");
			}
			if(oProduct["Description"] == ""){
				this.getView().byId("descriptionid").setValueState("Error");
			}else{
				this.getView().byId("descriptionid").setValueState("None");
			}
			if(oProduct["Quantity"] == 0){
				this.getView().byId("quantityid").setValueState("Error");
			}else{
				this.getView().byId("quantityid").setValueState("None");
			}
			if(oProduct["Price"] == 0){
				this.getView().byId("priceid").setValueState("Error");
			}else{
				this.getView().byId("priceid").setValueState("None");
			}
		}
	});

	
});