import {
  Button,
  Card,
  CardActions,
  CardContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  title: {
    fontSize: 40,
    fontFamily: "montserrat",
  },
  cover:{
      backgroundImage:`url(https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=max&w=1080&q=80)`,
      backgroundPosition:"center",
      padding:"35px 25px",
  },

});

function FeaturedPost() {
  const classes = useStyles();
  return (
    <Card className={classes.cover}>
      <CardContent className={classes.textContainer}>
        <Typography className={classes.title} gutterbottem>
          Some Long Deep Random Title Here
        </Typography>
        <Typography variant="h5">
          some long long long never ending subtitle defining that deep title
          that above this subtitle
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.btn}>Read More...</Button>
      </CardActions>
    </Card>
  );
}

export default FeaturedPost;



