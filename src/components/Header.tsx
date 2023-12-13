import logo from "../images/logoscrittanobg.png";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import '../style/Header.css'

function Header() {
  const openNewTab = () => {
    window.open('https://www.uniba.it/it/ricerca/dipartimenti/informatica/laboratori-didattici-1/laboratorio-didattico-di-robotica/laboratorio-didattico-di-robotica', '_blank');
  };
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
            <Button onClick={openNewTab}>
                Informazioni
            </Button>
        </Box>
      </Box>
    </>
  );
}

export default Header;
