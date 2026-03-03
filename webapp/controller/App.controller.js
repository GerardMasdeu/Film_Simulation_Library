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
          const oDialog = await this._loadcreationFragment();
          this._prepareDiolog(oDialog);
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
      _prepareDiolog(oDialog) {
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
      _resetCreationModel() {
        const oModel = this.getView().getModel("creation");
        if (oModel) {
          oModel.setData({});
        }
      },
    });
  },
);
