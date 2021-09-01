import {
  makeStyles,
  Container,
  createTheme,
  Grid,
  ThemeProvider,
} from "@material-ui/core";
import "./App.css";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import PostCard from "./components/PostCard";
import Sidebar from "./components/Sidebar";
import { featuredPosts, sidebar } from "./Data/Data";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });
  const classes = useStyles();

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard post={post} key={post.title} />
          ))}
        </Grid>
        <Grid container spacing={4} className={classes.mainGrid}>
          <Main title="Deep thoughts inside mind" />
          <Sidebar
            title={sidebar.title}
            discription={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
        title="Blog Footer"
        description="Yes, this footer has a purpose to serve"
      />
    </ThemeProvider>
  );
}

export default App;
