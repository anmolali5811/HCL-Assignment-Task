import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    Title: {
        type: String,
    },
    Technologies: {
        type: String,
    },
    Technical_Skillset_Frontend: {
        type: String,
    },
    Technical_Skillset_Backend: {
        type: String,
    },
    Technical_Skillset_Infrastructre: {
        type: String,
    },
    Other_Information_Availability: {
        type: String,
    },
    "plot_embedding": {
        type: Array,
        select: false
    }
});

const projectModel = new mongoose.model("Project", projectSchema);

export default projectModel;
