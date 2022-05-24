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

import { useEffect, useState } from "react";

function TopicRegister() {
const [name, setName] = React.useState("");
 const [registerId, setRegisterId] = React.useState("");
 const [groupId, setGroupId] = React.useState("");
 const [faculty, setFaculty] = React.useState("");
 const [department, setDepartment] = React.useState("");
 const [topic, setTopic] = React.useState("");

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
          <TextField id="faculty" label="Faculty" variant="outlined" />
          
          <TextField id="department" label="Department" variant="outlined" />
         
        </Box>

        <center>
          <Button variant="contained">Submit</Button>
        </center>
      </form>
    </div>
  );
}

export default TopicRegister;
