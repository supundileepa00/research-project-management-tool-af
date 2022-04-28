const router = require("express").Router();

let Research = require("./../../models/studentModels/Research.js");

// add research details
router.route("/addResearch").post((req, res) => {
    const name = req.body.name;
    const topic = req.body.topic;
    const groupID = req.body.groupID;
    const faculty = req.body.faculty;
    const document = req.body.document;
    
    const newResearch = new Research({
        name,
        topic,
        groupID,
        faculty,
        document,
    });
    
    newResearch
        .save()
        .then(() => {
        res.json("Research Added Successfully!!");
        })
        .catch((err) => {
        console.log(err);
        });
});

//get all research details
router.route("/").get((req, res) => {
    Research.find()
        .then((research) => {
        res.json(research);
        })
        .catch((err) => {
        console.log(err);
        });
});

//update research details
router.route("/update/:id").put(async (req, res) => {
    let researchId = req.params.id;

    const { name, topic, groupID, faculty, document } = req.body;

    const updateResearch = {
        name,
        topic,
        groupID,
        faculty,
        document,
    };

    await Research.findByIdAndUpdate(researchId, updateResearch)
        .then(() => {
            res.status(200).send({ status: "Research Details Updated" });
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error while updating Data" });
        });
});

//delete research
router.route("/delete/:id").delete(async (req, res) => {
    let researchId = req.params.id;

    await Research.findByIdAndDelete(researchId)
        .then(() => {
            res.status(200).send({ status: "Research Deleted" });
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error while deleting Data" });
        });
});

//get one research details by group id
router.route("/getOne/:id").get((req, res) => {
    let researchId = req.params.id;

    Research.find({ groupID: researchId })
        .then((research) => {
        res.status(200).send({ status: "Research fetched", research });
        })
        .catch((err) => {
        console.log(err);
        res.status(500).send({ status: "Error with get research", error: err.message });
        });
});

module.exports = router;