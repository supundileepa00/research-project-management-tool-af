import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//import { useEffect, useState } from "react";

function TopicRegister() {
  const [name, setName] = React.useState("");
  const [registerId, setRegisterId] = React.useState("");
  const [groupId, setGroupId] = React.useState("");
  const [faculty, setFaculty] = React.useState("");
  const [department, setDepartment] = React.useState("");
  const [topic, setTopic] = React.useState("");

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

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
          <input
            type="text"
            class="App"
            id="name"
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
            id="registerNumber"
            label="Register Number"
            variant="outlined"
          />
          <input
            type="text"
            class="App"
            id="registerNumber"
            onChange={(e) => {
              setRegisterId(e.target.value);
            }}
          />

          <TextField id="groupId" label="Group Id" variant="outlined" />
          <input
            type="text"
            class="App"
            id="groupId"
            onChange={(e) => {
              setGroupId(e.target.value);
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
          <TextField id="faculty" label="Faculty" variant="outlined" />
          <input
            type="text"
            class="App"
            id="faculty"
            onChange={(e) => {
              setFaculty(e.target.value);
            }}
          />
          <TextField id="department" label="Department" variant="outlined" />
          <input
            type="text"
            class="App"
            id="department"
            onChange={(e) => {
              setDepartment(e.target.value);
            }}
          />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 2, width: "52ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Research Field
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
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
          <TextField id="topic" label="Topic" variant="outlined" />
        </Box>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Stack spacing={2} direction="column">
            <Button variant="contained">Submit</Button>
          </Stack>
        </Box>
      </div>
    </div>
  );
}
export default TopicRegister;
