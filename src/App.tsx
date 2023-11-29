import Todolist from "./components/Todolist";
import Header from "./components/Header";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import './style/App.css';

function App() {
  return (
    <>
      <Box className="container">
      <Header />
      <Box className="gridContainer">
        <Grid container spacing={2} className="paper" direction="row" sx={{ height: 'calc(100vh - 82.39px)' }}>
          <Grid item xs={6}>
            <Paper sx={{ height: 'calc(100vh - 97.39px)' }}>
              <Todolist/>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper sx={{ height: 'calc(100vh - 97.39px)' }}>prova</Paper>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </>
  );
}

export default App;
