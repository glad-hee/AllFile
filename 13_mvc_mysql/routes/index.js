const express = require("express");
const controller = require("../controller/Cvisitor");
const router = express.Router();

// GET / => localhost:PORT/
router.get("/", controller.main);

// GET /visitor => localhost:PORT/visitor
router.get("/visitor", controller.getVisitors); // ALL CHECK

// POST /visitor/write
router.post("/visitor/write", controller.postVisitor); // ADD

// GET /visitor/get
router.get("/visitor/get", controller.getVisitor); // CHECK

// PATCH /visitor/edit
router.patch("/visitor/edit", controller.patchVisitor); // EDIT

// DELETE /visitor/delete
router.delete("/visitor/delete", controller.deleteVisitor); // DELETE

module.exports = router;
