import Todolist from "./components/Todolist";
import Header from "./components/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "./style/App.css";

function App() {
  return (
    <>
      <Box className="appContainer">
        <Header />
        <Box className="gridContainer">
          <Grid
            container
            spacing={2}
            className="gridBox"
            direction="row"
            sx={{ height: "calc(100vh - 82.39px)" }}
          >
            <Grid item xs={6}>
              <Paper sx={{ height: "calc(100vh - 97.39px)" }} className="scrollPadding">
                <div className="paper"><Todolist /></div>
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper sx={{ height: "calc(100vh - 97.39px)" }} className="paper">
                prova
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default App;
