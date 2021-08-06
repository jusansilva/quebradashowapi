const express = require('express');
const AdminRouter = express.Router();
const { AdminController } = require("../Controllers");


AdminRouter.get("/", async (req, res) => {
    await AdminController.alive(req, res);
})

module.exports = AdminRouter;