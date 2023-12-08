import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../style/Inventory.css";

function createData(id: number, oggetto: string, quantita: number, nArmadio: number, note: string) {
  return { id, oggetto, quantita, nArmadio, note };
}

const rows = [
  createData(1, "Lettore DVD",1 , 1, ""),
  createData(2, "UPS",1 , 1, ""),
  createData(3, "Switch di rete",1 , 1, "dato a mntcrl"),
  createData(4, "Alimentatore",1 , 1, ""),
  createData(5, "Ciabbatta schuko da 6",1 , 1, "sostituita con Ciabatta shuko da 5"),
  createData(6, "Lettore DVD",1 , 1, ""),
  createData(7, "UPS",1 , 1, ""),
  createData(8, "Switch di rete",1 , 1, "dato a mntcrl"),
  createData(9, "Alimentatore",1 , 1, ""),
  createData(10, "Ciabbatta schuko da 6",1 , 1, "sostituita con Ciabatta shuko da 5"),
];

function Inventory() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Oggetto</TableCell>
              <TableCell align="right">Quantità</TableCell>
              <TableCell align="right">Armadio n° </TableCell>
              <TableCell align="right">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell className="cell" component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell className="cell" align="right">{row.oggetto}</TableCell>
                <TableCell className="cell" align="right">{row.quantita}</TableCell>
                <TableCell className="cell" align="right">{row.nArmadio}</TableCell>
                <TableCell className="cell" align="right">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Inventory;
