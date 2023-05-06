const express = require("express");
const router = express.Router();

// AUN EN PROCESO...

const ROLES = require("../../data/roles.constants.json");

// TO DO : AUN NO CREADO EL CONTROLLER 

const rutineController = require("../../controllers/rutine.controller");


// TO DO : CONFIGURAR EL VALIDATOR 

const rutineValidators = require("../../validators/rutine.validators");
const runValidations = require("../../validators/index.middleware");

// TO DO : CREAR LAS RUTAS EN EL RUTINE CONTROLLER 


/*

router.get("/", postController.findAll);
router.get("/own", authentication, postController.findOwn);
router.get("/saved", authentication, postController.getOwnSavedPosts);
router.get("/user/:identifier",
    postValidators.findPostByIdValidator,
    runValidations,
    postController.findPostsByUser
);
router.get("/:identifier",
    postValidators.findPostByIdValidator,
    runValidations,
    postController.findOneById
);

*/

module.exports = router;