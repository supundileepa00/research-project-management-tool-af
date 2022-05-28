import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffects, useState } from "react";
import { container } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

function viewTopics() {
  const navigate = useNavigate();

  const [topics, setTopics] = useState([]);

  React.useEffect(() => {
    function getTopics() {
      axios
        .get("http://localhost:5000/rpmt/topics/")
        .then((res) => {
          setTopics(res.data);
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getTopics();
  }, []);
  return (
    <div>
      {topics.map((topic, key) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {topic.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
export default viewTopics;
