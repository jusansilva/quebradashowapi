const express = require('express');
const AuthRouter = express.Router();
const { AuthController } = require("../Controllers");


AuthRouter.post("/login", async (req, res) => {
    await AuthController.login(req, res);
})

module.exports = AuthRouter;