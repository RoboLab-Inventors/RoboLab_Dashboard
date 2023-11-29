import logo from "../images/logoscrittanobg.png";
import Box from "@mui/material/Box";
import Typography from '@mui/material/Typography';
import '../style/Header.css'

function Header() {
  return (
    <>
      <Box
        sx={{ height: 82.39 }}
        className="headerContainer"
      >
        <Box
            className='headerChildBox'
            sx={{width: 219}}
          >
            <img className="logo" src={logo} alt="ROBOLAB" />
          </Box>
        <Box className='headerChildBox' sx={{width: 219}}>
            <Typography>
                Informazioni
            </Typography>
        </Box>
      </Box>
    </>
  );
}

export default Header;
