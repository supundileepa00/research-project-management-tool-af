import ResponsiveAppBar from "./ResponsiveAppBar";
import Container from "@mui/material/Container";
import { Button, Grid, Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function AdminHome() {
  const navigate = useNavigate();
  const manageUsers = () => {
    navigate("/addTemplate");
  };

  const addTemplates = () => {};
  return (
    <div>
      <ResponsiveAppBar />
      <Container>
        <h1>Admin Home</h1>
        <Grid container spacing={5}>
          <Grid item>
            <Button variant="contained" onClick={manageUsers}>
              User Management
            </Button>
          </Grid>

          <Grid item>
            <Button variant="contained" onClick={addTemplates}>
              Add Templates/Documents for Students
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default AdminHome;
