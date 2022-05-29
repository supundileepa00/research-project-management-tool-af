import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import { Button, Grid, Paper } from "@mui/material";
import { CardActionArea, CardActions } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import ResponsiveStudentHome from "../appBar/ResponsiveStudentHome";

function StudentHome() {
  return (
    <div>
      <ResponsiveStudentHome />
      <Container>
        <h1>Student</h1>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="flex-start"
          spacing={10}
          sx={{ mt: 3, p: 2 }}
        >
          <Card
            sx={{ minWidth: 345, mr: 3, maxWidth: 345, minHeight: 270 }}
            raised
          >
            <CardActionArea
              onClick={() => {
                navigate("/student/templates");
              }}
            >
              <center>
                <Avatar
                  alt="Item Image"
                  src={require("./images/search.png")}
                  sx={{ width: 150, height: 150 }}
                />
              </center>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  style={{ fontWeight: 500, color: "#A3A3A3" }}
                >
                  View Research
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  View All researches, delete researches and update research
                  details.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Container>
      <br />
      <br />
      <br />
    </div>
  );
}

export default StudentHome;
