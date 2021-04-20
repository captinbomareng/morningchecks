import React from 'react'
import { lighten, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import clsx from 'clsx';
import { Button } from '@material-ui/core';

const useToolbarStyles = makeStyles((theme) => ({
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
    },
    highlight:
      theme.palette.type === 'light'
        ? {
            color: theme.palette.secondary.main,
            backgroundColor: lighten(theme.palette.secondary.light, 0.85),
          }
        : {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.secondary.dark,
          },
    title: {
      flex: '1 1 100%',
    },
  }));
  
function EnhancedTableToolbar2(props) {
    const classes = useToolbarStyles();
    const { numSelected,faultsName,deleteFaultEnh,faultsEnh,faultsToDelete } = props;
    return (
        <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
          {numSelected} selected
        </Typography>
        
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
          {faultsName}
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title={numSelected>1?("Delete Faults"):('Delete Fault')}>
          <IconButton aria-label={numSelected>1?("Delete Faults"):('Delete Fault')} onClick={()=>deleteFaultEnh(faultsEnh,faultsToDelete)} >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Add Fault">
          <IconButton aria-label="Add Fault" onClick={()=>console.log('addasdf')} >
            <AddBoxIcon />   
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
    

}
    
export default EnhancedTableToolbar2;
