const readJson = require("../helpers/readJson");
const writeJson = require("../helpers/writeJson");
const generateId = require("../helpers/generateId");

const controller = {
    //Fuciones de controllers

    index: (req, res) => {
    return res.render('views/index');
    }
};
module.exports = controller;
