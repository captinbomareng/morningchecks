import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { FeaturedPlayListSharp } from '@material-ui/icons';
import { makeStyles } from '@material-ui/styles';
import React from 'react'

const useStyle =makeStyles({
    table: {
      minWidth: 650,
    },
  });

const MyTable = (faults) =>
{
  
  const classes =useStyle();
    return(
      
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align='right' >מספר אבנח</TableCell>
              <TableCell align='right'>תאריך</TableCell>
              <TableCell align='right'>תקלה</TableCell>
              <TableCell align='right'>שם אתר</TableCell>
              <TableCell align='right'>מספר אתר</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>      
              <TableRow  component='th' scope='row' style={{backgroundColor: '#d6ffa6'}}>
                <TableCell align='right'>adsfjldfa</TableCell>
                <TableCell align='right'>adfadf</TableCell>
                <TableCell align='right'>asdfasd</TableCell>
                <TableCell align='right'>asdfas</TableCell>
                <TableCell align='right'>asdfadf</TableCell>
            </TableRow>
            <TableRow  component='th' scope='row' style={{backgroundColor: '#d6ffa6'}}>
                <TableCell align='right'>adsfjldfa</TableCell>
                <TableCell align='right'>adfadf</TableCell>
                <TableCell align='right'>asdfasd</TableCell>
                <TableCell align='right'>asdfas</TableCell>
                <TableCell align='right'>asdfadf</TableCell>
            </TableRow>
            <TableRow  component='th' scope='row' style={{backgroundColor: '#b26059'}}>
                <TableCell align='right'>adsfjldfa</TableCell>
                <TableCell align='right'>adfadf</TableCell>
                <TableCell align='right'>asdfasd</TableCell>
                <TableCell align='right'>asdfas</TableCell>
                <TableCell align='right'>asdfadf</TableCell>
            </TableRow>
          </TableBody>
        </Table>
    )
}

export default MyTable;