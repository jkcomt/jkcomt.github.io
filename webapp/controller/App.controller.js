sap.ui.define(
    [
      "./BaseController",
    ],
    function(BaseController) {
      "use strict";
  
      return BaseController.extend("com.demosapui5.demosapui5.controller.App", {
        onInit() {
          this._initTheme();
        }
      });
    }
  );
  