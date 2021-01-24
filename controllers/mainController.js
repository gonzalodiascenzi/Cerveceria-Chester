const readJson = require("../helpers/readJson");
const writeJson = require("../helpers/writeJson");
const generateId = require("../helpers/generateId");

const controller = {
    //Root - Inicio
    index: async (req, res) => {
        const allProducts = readJson();
        console.log(allProducts);
        res.render('index', {
            allProducts : allProducts
        });
    }
};
module.exports = controller;