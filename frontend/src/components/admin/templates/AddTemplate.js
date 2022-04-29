import { Button, Container, Grid, Paper, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import ResponsiveAppBar from "../ResponsiveAppBar";

function AddTemplate() {
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [documentName, setDocumentName] = useState("");

  const handleSubmit = (e) => {
    setLoading(true);
    const formData = new FormData();
    var form = document.getElementById("form");

    formData.append("templateDocument", documentName);
    formData.append("type", type);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("postedDate", Date.now());

    console.log(formData);
    e.preventDefault();

    axios
      .post("http://localhost:5000/rpmt/templates/add/", formData)
      .then((res) => {
        console.log(res);
        console.log("Template Added!!");

        setType("");
        setTitle("");
        setDescription("");
        setDocumentName("");
        form.reset();
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    if (documentName.type === "application/msword") {
      setType("word");
    } else if (documentName.type === "application/pdf") {
      setType("pdf");
    } else if (
      documentName.type ===
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    )
      setType("presentation");
    else setType("default");
  }, [documentName]);

  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        <Paper elevation={7}>
          <Box sx={{ m: 5 }}>
            <br></br>
            <h2>Add Documents/Templates </h2>

            <Grid>
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                id="form"
              >
                <Grid item md={6}>
                  {/* <TextField
                    id="outlined-basic"
                    label="Type"
                    variant="outlined"
                    value={type}
                    required
                    fullWidth
                    onChange={(e) => {
                      setType(e.target.value);
                    }}
                  /> */}
                  <br />
                  <br />
                </Grid>
                <TextField
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                  value={title}
                  required
                  fullWidth
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
                <br />
                <br />
                <TextField
                  multiline
                  variant="outlined"
                  label="Description"
                  value={description}
                  required
                  fullWidth
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                />
                <br />
                <br />
                <input
                  id="raised-button-file"
                  type="file"
                  onChange={(e) => {
                    setDocumentName(e.target.files[0]);
                  }}
                />
                <br />
                <br />

                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                >
                  Add Template/Document
                </Button>
                {loading ? <Loader /> : null}
                <br />
                <br />
              </form>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default AddTemplate;
