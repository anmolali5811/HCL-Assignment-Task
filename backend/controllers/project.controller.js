import { ErrorHandler } from "../helpers/error.js";
import Project from "../models/project.model.js"
import getEmbedding from "../helpers/getEmbedding.js"

const getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        return res.status(200).json(projects);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while retrieving project(s)."});
    }
};

const getProjectById = async (req, res) => {
    try {
        const {id} = req.params;
        if(!id) return req.json({message: "Please Enter Project ID"});
        const project = await Project.findById(id);
        return res.status(200).json(project);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Could not find a note with id " + req.params.id});
    }
};

const createProjectsInBulk = async (req, res) => {
    try {
        const data = req.body;
        // this option prevents additional documents from being inserted if one fails
        const options = { ordered: true };
        const result = await Project.insertMany(data, options);
        console.log(`${result.insertedCount} documents were inserted`);
        return res.status(200).json(result);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while creating project(s)."});
    }
};

const getProjectsByQuery = async (req, res) => {
    try {
        const queryText = req.query.q;
        const embedding = await getEmbedding(queryText);
        const projects = await Project.aggregate([
            {"$search": {
              "index": "hclIndexPlot",
              "knnBeta": {
                "vector": embedding,
                "path": "plot_embedding",
                "k": 15
              }
            }}
        ]);

        return res.status(200).json(projects);
    } catch (err) {
        console.log(err);
        res.status(500).send({message: "Some error occurred while retrieving project(s)."});
    }
}

export {getAllProjects, createProjectsInBulk, getProjectById, getProjectsByQuery};
