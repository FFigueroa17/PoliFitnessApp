
// IMPORTAR EL MODELO DE RUTINAS

const Rutine = require("../models/Rutine.model");

const debug = require("debug")("app:rutine-controller");

const controller = {};

// CREATE RUTINES - TO DO "AUN FALTA"

controller.create = async (req, res) => {
    try {
        const { title, description, image, category } = req.body;
        const { _id: userId } = req.user;

        const post = new Post({
            title: title,
            description: description,
            image: image,
            category: category,
            user: userId
        });

        const newPost = await post.save();

        if (!newPost) {
            return res.status(409).json({ error: "Ocurrio un error al crear la notica" });
        }

        return res.status(201).json(newPost);
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}

// FIND ALL RUTINES

controller.findAll = async (req, res) => {
    try {
        const rutine =
            await Rutine
                .find({ hidden: false })

        return res.status(200).json({ rutine });
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}


// FIND RUTINE BY CATEGORY   - TO  DO "AUN FALTA"

controller.findPostsByCategory = async (req, res) => {
    try {
        const { identifier } = req.params;

        const posts = await Post.find({ category: identifier, hidden: false });

        return res.status(200).json({ posts });
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}

// FIND RUTINE BY ID  -  TO  DO "AUN FALTA"

controller.findOneById = async (req, res) => {
    try {
        const { identifier } = req.params;

        const post = await Post
            .findOne({ _id: identifier, hidden: false })

        if (!post) {
            return res.status(404).json({ error: "Post no encontrado" });
        }

        return res.status(200).json(post);
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}

// DELETE RUTINE BY ID 

controller.deleteRutineById = async (req, res) => {
    try {
        const { identifier } = req.params;

        const rutine = await Rutine
            .deleteOne({ _id: identifier})

        if (!rutine) {
            return res.status(404).json({ error: "Rutina no encontrada" });
        }

        return res.status(200).json({ Done: "Rutina eleminada correctamente!" });
    } catch (error) {
        debug({ error });
        return res.status(500).json({ error: "Error interno de servidor" });
    }
}

// GET RUTINE BY TAGS


controller.getRutineByTags = async (req, res) => {
    try {
        // Obtener las etiquetas desde los parámetros de la solicitud
        const { tags } = req.params;

        // Buscar las rutinas que contengan las etiquetas proporcionadas
        const routines = await Routine
            .find({ tags: { $in: tags } });

        // Responder con las rutinas encontradas
        res.status(200).json(routines);
    } catch (error) {
        // Manejo de errores
        res.status(500).json({ error: 'Ha ocurrido un error al obtener las rutinas por etiquetas.' });
    }
}

module.exports = controller;