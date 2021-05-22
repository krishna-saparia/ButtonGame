import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@material-ui/core";
import { Button, Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const ButtonTable = () => {
  const [flag1, setFlag1] = useState(true);
  const [flag2, setFlag2] = useState(true);
  const [flag3, setFlag3] = useState(true);
  const [flag4, setFlag4] = useState(true);

  const handleClick_1 = () => {
    setFlag1(!flag1);
  };
  const handleClick_2 = () => {
    setFlag2(!flag2);
  };
  const handleClick_3 = () => {
    setFlag3(!flag3);
  };
  const handleClick_4 = () => {
    setFlag4(!flag4);
  };
  const classes = useStyles();
  return (
    <>
      <Container>
        <Navbar
          expand="lg"
          variant="light"
          bg="light"
          className="d-flex justify-content-center"
        >
          <Navbar.Brand>
            <h1>Game</h1>
          </Navbar.Brand>
        </Navbar>
      </Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableBody>
            <TableRow>
              <TableCell align="center">
                <Button
                  onClick={handleClick_1}
                  variant={flag1 ? "secondary" : "primary"}
                >
                  Button 1
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={handleClick_2}
                  variant={flag2 ? "secondary" : "success"}
                >
                  Button 2
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={handleClick_3}
                  variant={flag3 ? "secondary" : "warning"}
                >
                  Button 3
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  onClick={handleClick_4}
                  variant={flag4 ? "secondary" : "danger"}
                >
                  Button 4
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ButtonTable;
