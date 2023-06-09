const express = require("express");
const router = express.Router();

//const ROLES = require("../../data/roles.constants.json");

const postController = require("../../controllers/post.controller")

const postValidators = require("../../validators/post.validators");
const runValidations = require("../../validators/index.middleware");


// FIND ALL POST's

router.get("/", postController.findAllPosts);

// CREATE POST

router.post("/createPost",
    postValidators.createPostValidator,
    runValidations,
    postController.createPost);

// FIND POST BY CATEGORY

//router.get("/category/:identifier", postController.findPostsByCategory);

// FIND POST BY ID

/*router.get("/:identifier",
    postValidators.findPostByIdValidator,
    runValidations,
    postController.findPostById);*/

// DELETE POST BY ID

/*router.delete("/deletePost/:identifier",
    postValidators.findPostByIdValidator,
    runValidations,
    postController.findPostById);*/


module.exports = router;