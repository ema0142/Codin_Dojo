const ManagerController = require("../controllers/manager.controllers");

module.exports = (app) => {
    app.get("/api/manager", ManagerController.findAllManager);
    app.post("/api/manager", ManagerController.createNewManager);
    app.get("/api/manager/:id", ManagerController.findOneManager);
    app.patch("/api/manager/:id", ManagerController.updateExistingManager);
    app.delete("/api/manager/:id", ManagerController.deleteOneManager);
};
