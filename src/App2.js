import { Button, Container, Grid, makeStyles, Paper} from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import Faults from './Faults/AllFaults';
import Header from './Header';
import MyTable from './MyTable';
import MaterialTable from './MaterialTable';
import './App2.css';

const App2 = () =>{   

    const [showingFaults,setShowingFaults]=useState(Faults.FaultsW);
    const [faultsName,setFaultsName] = useState('מטכל');

    const changeShowingFaultsHandeler =(faults,faultsName) => {
        setShowingFaults(faults);
        setFaultsName(faultsName);
    }
    const deleteFaultHanfeler = (faults,faultsDelete) =>{
         const faultsCopy=[...faults];
         for (let i = 0; i < faultsDelete.length; i++) {
             for (let j = 0; j < faults.length; j++) {
                if (faults[j].faultID===faultsDelete[i])
                    faultsCopy.splice(j,1);
             }
         }
         setShowingFaults(faultsCopy);        
    }

    return(             
        <Container fixed>
            <Grid container direction='column' >
                <Grid item xs={12}>
                    <Header setShwoing={changeShowingFaultsHandeler} />             
                </Grid>
                <Grid item container style={{paddingTop: '100px'}} >
                    <Grid item xs={false} sm={2}/>
                    <Grid item xs={12} sm={8}>
                        <MaterialTable faults={showingFaults} nameFautls={faultsName} deleteFault={deleteFaultHanfeler} />
                    </Grid> 
                    <Grid item xs={false} sm={2}/>
                </Grid>
        </Grid>
        \</Container>

    )
}
export default App2;