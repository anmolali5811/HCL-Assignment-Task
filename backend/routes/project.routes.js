import { Router } from "express";
import {
  getAllProjects, createProjectsInBulk, getProjectById, getProjectsByQuery
} from "../controllers/project.controller.js";

const router = Router();

router.route("/").get(getAllProjects);
router.route("/search").get(getProjectsByQuery);
router.route("/:id").get(getProjectById);
router.route("/createProjectsInBulk").post(createProjectsInBulk);

export default router;