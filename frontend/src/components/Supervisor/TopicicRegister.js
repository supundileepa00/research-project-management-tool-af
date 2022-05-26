import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
//import TopicView from /components/Supervisor/TopicView';

function TopicRegister() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  //const [registerId, setRegisterId] = useState("");
  const [groupID, setGroupID] = useState("");

  const [faculty, setFaculty] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [field, setField] = React.useState("");
  const [topic, setTopic] = useState("");

  const handleFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleField = (event) => {
    setField(event.target.value);
  };

  function submitButton(e) {
    e.preventDefault();
    alert("Insert");

    const newTopic = {
      name,
      regNo,
      groupID,
      faculty,
      department,
      field,
    };
    axios
      .post("http://localhost:5000/rpmt/topics/registerTopic, newTopic")
      .then(() => {
        alert("Topic Submitted");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      <h1>Topic Register</h1>

      <div className="App">
        <form>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "52ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="name" label="Name" variant="outlined" />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="registerNumber"
              label="Register Number"
              variant="outlined"
            />

            <TextField id="groupId" label="Group Id" variant="outlined" />
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl fullWidth>
              <InputLabel id="faculty-select-label">Faculty</InputLabel>
              <Select
                labelId="faculty-select-label"
                id="faculty-select"
                value={faculty}
                label="Faculty"
                onChange={handleFaculty}
              >
                <MenuItem value={"Faculty Of Computing"}>Faculty Of Computing</MenuItem>
                <MenuItem value={"Faculty Of Business"}>Faculty Of Business</MenuItem>
                <MenuItem value={"Faculty Of Engineering"}>Faculty Of Engineering</MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="department-select-label">Department</InputLabel>
              <Select
                labelId="department-select-label"
                id="department-select"
                value={department}
                label="Department"
                onChange={handleDepartment}
              >
                <MenuItem value={"Information Technology (SLIIT)- SE/ IT / ISE / CS / CSNE"}>Information Technology (SLIIT)- SE/ IT / ISE / CS / CSNE</MenuItem>
                <MenuItem value={"Business MAnagement (SLIIT)"}>Business MAnagement (SLIIT)</MenuItem>
                <MenuItem value={"Business Management (LJMU)"}>Business Management (LJMU)</MenuItem>
                <MenuItem value={"Engineering (SLIIT)"}>Engineering (SLIIT)</MenuItem>

              </Select>
            </FormControl>
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "52ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <FormControl fullWidth>
              <InputLabel id="field-select-label">Research Field</InputLabel>
              <Select
                labelId="field-select-label"
                id="field-select"
                value={field}
                label="Field"
                onChange={handleField}
              >
                <MenuItem value={"Front-End Develop"}>Front-End Develop</MenuItem>
                <MenuItem value={"Back-End Develop"}>Back-End Develop</MenuItem>
                <MenuItem value={"Full-Stack Develop"}>Full-Stack Develop</MenuItem>
                <MenuItem value={"Mechanical Engineering"}>Mechanical Engineering</MenuItem>
                <MenuItem value={"Business Achievements"}>Business Achievements</MenuItem>
                <MenuItem value={"Entrepreneur"}>Entrepreneur</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 2, width: "52ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="topic" label="Topic" variant="outlined" />
          </Box>
          <center>
            <Button variant="contained">Submit</Button>
          </center>
        </form>
      </div>
    </div>
  );
}

export default TopicRegister;
