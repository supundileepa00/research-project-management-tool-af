const router = require("express").Router();

let Student = require("./../../models/adminModels/Student.js");

//Student Registration
router.route("/registerStudent").post((req, res) => {
  const name = req.body.name;
  const idNumber = req.body.idNumber;
  const degree = req.body.degree;
  const specialization = req.body.specialization;
  const username = req.body.username;
  const password = req.body.password;
  const role = req.body.role;

  const newStudent = new Student({
    name,
    idNumber,
    degree,
    specialization,
    username,
    password,
    role,
  });

  newStudent
    .save()
    .then(() => {
      res.json("Student Registration Successfull!!");
    })
    .catch((err) => {
      console.log(err);
    });
});

//get all students
router.route("/").get((req, res) => {
  Student.find()
    .then((students) => {
      res.json(students);
    })
    .catch((err) => {
      console.log(err);
    });
});

//update student details
router.route("/update/:id").put(async (req, res) => {
  let studentId = req.params.id;

  const { name, idNumber, degree, specialization, username, password, role } =
    req.body;

  const updateStudent = {
    name,
    idNumber,
    degree,
    specialization,
    username,
    password,
    role,
  };

  const update = await Student.findByIdAndUpdate(studentId, updateStudent)
    .then(() => {
      res.status(200).send({ status: "Student Details Updated" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ status: "Error while updating Data" });
    });
});

//delete student
router.route("/delete/:id").delete(async (req, res) => {
  let studentID = req.params.id;

  await Student.remove({ idNumber: studentID })
    .then(() => {
      res.status(200).send({ status: "Student Deleted" });
    })
    .catch((err) => {
      res
        .status(500)
        .send({ status: "Error with delete Student", error: err.message });
    });
});

//get one student by name
router.route("/get/:id").get(async (req, res) => {
  let studentId = req.params.id;

  const user = await Student.find({ idNumber: studentId })
    .then((student) => {
      res.status(200).send({ status: "User fetched", student });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error with get user", error: err.message });
    });
});

module.exports = router;
