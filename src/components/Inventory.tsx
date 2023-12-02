import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(id: number, oggetto: string, note: string) {
  return { id, oggetto, note };
}

const rows = [
  createData(1, "Lettore DVD", ""),
  createData(2, "UPS", ""),
  createData(3, "Switch di rete", "dato a mntcrl"),
  createData(4, "Alimentatore", ""),
  createData(5, "Ciabbatta schuko da 6", "sostituita con Ciabatta shuko da 5"),
  createData(6, "Lettore DVD", ""),
  createData(7, "UPS", ""),
  createData(8, "Switch di rete", "dato a mntcrl"),
  createData(9, "Alimentatore", ""),
  createData(10, "Ciabbatta schuko da 6", "sostituita con Ciabatta shuko da 5"),
];

function Inventory() {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="right">Oggetto</TableCell>
              <TableCell align="right">Note</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.oggetto}</TableCell>
                <TableCell align="right">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Inventory;
