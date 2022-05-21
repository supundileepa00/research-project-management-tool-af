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

//import { useEffect, useState } from "react";

function TopicRegister() {
  const [name, setName] = useState("");
  const [regNo, setRegNo] = useState("");
  const [groupID, setGroupID] = useState("");
  const [topic, setTopic] = useState("");
  const [faculty, setFaculty] = useState("");
  const [department, setDepartment] = useState("");
  const [field, setField] = useState("");

  const handleFaculty = (event) => {
    setFaculty(event.target.value);
  };

  const handleDepartment = (event) => {
    setDepartment(event.target.value);
  };

  const handleField = (event) => {
    setField(event.target.value);
  };

  function sendData(e) {
    e.preventDefault();
    alert("Insert");

    const newTopic = {
      name,
      regNo,
      groupID,
      faculty,
      department,
      field,
      topic,
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
      <form onSubmit={sendData}>
        <div className="App">
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "52ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="name"
              label="Name"
              variant="outlined"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
              id="regNo"
              label="Register Number"
              variant="outlined"
              onChange={(e) => {
                setRegNo(e.target.event);
              }}
            />
            <TextField
              id="groupID"
              label="Group ID"
              variant="outlined"
              onChange={(e) => {
                setGroupID(e.target.value);
              }}
            />
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
                label="selectFaculty"
                onChange={handleFaculty}
              >
                <MenuItem value={"Faculty of Computing"}>
                  Faculty of Computing
                </MenuItem>
                <MenuItem value={"Faculty of Business"}>
                  Faculty of Business
                </MenuItem>
                <MenuItem value={"Faculty of Engineering"}>
                  Faculty of Engineering
                </MenuItem>
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="department-select-label">Department</InputLabel>
              <Select
                labelId="department-select-label"
                id="department-select"
                value={department}
                label="selectDepartment"
                onChange={handleDepartment}
              >
                <MenuItem value={"IT/SE/CSNE/ISE/CS"}>
                  IT/SE/CSNE/ISE/CS
                </MenuItem>
                <MenuItem value={"Business Management (SLIIT)"}>
                  Business Management (SLIIT)
                </MenuItem>
                <MenuItem value={"Business Management (LJMU)"}>
                  Business Management (LJMU)
                </MenuItem>
                <MenuItem value={"Business Management (QU)"}>
                  Business Management (QU)
                </MenuItem>
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
                id="filed-select"
                value={field}
                label="selectField"
                onChange={handleField}
              >
                <MenuItem value={"Computer Science"}>Computer Science</MenuItem>
                <MenuItem value={"Computer History"}>Computer History</MenuItem>
                <MenuItem value={"Business Opportunities"}>
                  Business Opportunities
                </MenuItem>
                <MenuItem value={"Mechanical Engineering"}>
                  Mechanical Engineering
                </MenuItem>
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
            <TextField
              id="topic"
              label="Topic"
              variant="outlined"
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </Box>
        </div>

        <center>
          <Button variant="contained">Submit</Button>
        </center>
      </form>
    </div>
  );
}

export default TopicRegister;
