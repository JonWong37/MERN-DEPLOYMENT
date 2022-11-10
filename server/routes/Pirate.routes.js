const PirateController = require("../controllers/Pirate.controller")

module.exports = app => {
    //create
    app.post("/api/new/pirate", PirateController.createPirate)
    // read all
    app.get("/api/pirates", PirateController.allPirates)
    // read one
    app.get("/api/pirate/:pirate_id", PirateController.onePirate)
    //update
    app.put("/api/pirates/:pirate_id", PirateController.updatePirate)
    //delete
    app.delete("/api/pirates/:pirate_id", PirateController.deletePirate)
}