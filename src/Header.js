import { AppBar, Typography,Toolbar, Grid, Button } from '@material-ui/core'
import React from 'react'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import  {getThemeProps, makeStyles} from '@material-ui/styles'
import { BorderAll, BorderStyle } from '@material-ui/icons';
import Faults from './Faults/AllFaults';

const useStyles = makeStyles(()=>({
 ButtonStyle: {
    color: 'white',
},
}));


function Header({setShwoing}) {
    
    const classes= useStyles();
    return (                    
                <AppBar  style={{background:'#0091ea'}} >
                     <Toolbar >            
                        <Typography> MorningChecks  </Typography>                            
                        <NotificationsNoneIcon/>
                        <Grid item xs={12}/>
                        <Grid item xs={1}>
                            <Button className={classes.ButtonStyle} onClick={()=>setShwoing(Faults.FaultsN,'צפון')} >צפון</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button  className={classes.ButtonStyle} onClick={()=>setShwoing(Faults.FaultsS,'דרום')} >דרום</Button>
                        </Grid>
                        <Grid item xs={1}>
                            <Button className={classes.ButtonStyle} onClick={()=>setShwoing(Faults.FaultsE,'מרכז')}>מרכז</Button>
                        </Grid>
                        <Grid item xs={1} >
                            <Button className={classes.ButtonStyle} onClick={()=>setShwoing(Faults.FaultsW,'מטכל')}>מטכל</Button>
                        </Grid>
                    
                </Toolbar>
            </AppBar>                     
    )
}

export default Header
