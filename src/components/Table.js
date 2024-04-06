import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {findCollection, addToCollection} from "./mongoDB";

const rows = await findCollection();

export default function AccessibleTable() {
  return (
    <TableContainer component={Paper} 
    //style={{ backgroundColor: '#50727B' }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow style={{ backgroundColor: '#496989' }}>
            <TableCell>Descripcion</TableCell>
            <TableCell align="right">Monto</TableCell>
            <TableCell align="right">Fecha</TableCell>
            <TableCell align="right">Donde</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.descripcion}>
              <TableCell component="th" scope="row">
                {row.descripcion}
              </TableCell>
              <TableCell align="right">{`$${row.monto}`}</TableCell>
              <TableCell align="right">{row.fecha}</TableCell>
              <TableCell align="right">{row.donde}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}