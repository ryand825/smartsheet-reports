import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
}));

function DataTable({ columns, rows }) {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column}>{column.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowKey) => (
            <TableRow key={rowKey}>
              {row.map(cell => (
                <TableCell>{cell.value}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default DataTable;
