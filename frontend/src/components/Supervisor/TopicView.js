import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
     
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Register No-
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Group ID - 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Faculty - 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Department - 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Reasearch Field -
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Topic -
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" color="success">Accept</Button>
        <Button size="small"variant="contained" color="error">Reject</Button>
      </CardActions>
    </Card>
  );
}
