const express = require("express");
const ongController = require("./controllers/ongController");
const incidentController = require("./controllers/incidentController");
const profileController = require("./controllers/profileController");
const sessionController = require("./controllers/sessionController");

const updateController = require("./controllers/updateController");

const routes = express.Router();
const multer = require("multer");
const multerConfig = require("../src/config/multer");
// this is a router for login
routes.post("/sessions", sessionController.create);
// this is a router for login
routes.get("/ongs", ongController.index);
routes.post("/ongs", ongController.create);
routes.get("/profile", profileController.index);
routes.get("/incidents", incidentController.index);
routes.post("/incidents", incidentController.create);
routes.delete("/incidents/:id", incidentController.delete);

routes.post(
  "/post",
  multer(multerConfig).single("file"),
  updateController.create
);
routes.get(
  "/post",
  multer(multerConfig).single("file"),
  updateController.index
);
module.exports = routes;
