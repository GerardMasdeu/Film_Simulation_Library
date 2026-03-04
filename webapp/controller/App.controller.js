sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/m/MessageToast", "sap/ui/core/Fragment"],
  (Controller, MessageToast, Fragment) => {
    "use strict";
    return Controller.extend("my.Film_Simulation_Library.controller.App", {
      // Event handler for the "Create" button in the creation dialog
      async onCreatePress() {
        await this._openCreationDialog();
      },

      //This does the the loading and opening of the Creation fragment
      async _openCreationDialog() {
        try {
          let oDialog = this.byId("createSimulationDialog");
          // If the dialog is not already loaded, load it and prepare it
          if (!oDialog) {
            oDialog = await this._loadcreationFragment();
            this._prepareDialog(oDialog);
          }
          oDialog.open();
        } catch (error) {
          console.error("Error loading fragment:", error);
        }
      },

      //Loads the specific fragment for film simulation creation
      _loadcreationFragment() {
        return this.loadFragment({
          name: "my.filmSimulation.library.view.Creation",
        });
      },
      //Prepares the dialog by adding it as a dependent to the view
      _prepareDialog(oDialog) {
        this.getView().addDependent(oDialog);
      },
      //Event handler for the Cancel button in the creation dialog.
      onCancelCreate() {
        this._closeCreationDialog();
      },
      _closeCreationDialog() {
        const oDialog = this.byId("createSimulationDialog");
        if (oDialog) {
          this._resetCreationModel();
          oDialog.close();
        }
      },
      // Resets the creation model to clear any data entered in the dialog
      _resetCreationModel() {
        const oModel = this.getView().getModel("creation");
        if (oModel) {
          oModel.setData({});
        }
      },

      // Changing Theme of the application
      onThemeSwitch(oEvent) {
        const isDarkThemeActive = oEvent.getParameter("pressed");
        this._applyTheme(isDarkThemeActive);
      },

      // Logic to set and determine the theme of the application
      _applyTheme(isDarkThemeActive) {
        const sTheme = isDarkThemeActive ? "sap_horizon_dark" : "sap_horizon";
        sap.ui.getCore().applyTheme(sTheme);
      },
    });
  },
);
