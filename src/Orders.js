import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./components/Title";

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

const rows = [
  createData(
    0,
    "2022-11-21",
    "SP-PSP",
    "00:31",
    "VISA ⠀•••• 3719",
    312.44
  ),
  createData(
    1,
    "2022-11-21",
    "SP-PSP",
    "02:32",
    "VISA ⠀•••• 2574",
    866.99
  ),
  createData(
    2,
    "2022-11-21",
    "SP-PSP",
    "01:52",
    "MC ⠀•••• 1253",
    100.81
  ),
  createData(
    3,
    "2022-11-21",
    "SP-PSP",
    "00:42",
    "AMEX ⠀•••• 2000",
    654.39
  ),
  createData(
    4,
    "2022-11-21",
    "SP-PSP",
    "00:12",
    "VISA ⠀•••• 5919",
    212.79
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Moje ostatnie loty</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Data</TableCell>
            <TableCell>Samolot</TableCell>
            <TableCell>Czas lotu</TableCell>
            <TableCell align="right">Koszt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell align="right">{`${row.amount} PLN`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Zobacz więcej lotów
      </Link>
    </React.Fragment>
  );
}
