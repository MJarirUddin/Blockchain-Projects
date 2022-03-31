import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import icon1 from '../images/Asim.jpg'
import icon2 from '../images/Haseeb1.jpg'
import icon3 from '../images/kumail.jpg'
import icon4 from '../images/Sheheryar.jpg'
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CardContent from '@material-ui/core/CardContent';
const useStyles = makeStyles((theme) => ({
  root: {
  
    flexGrow: 3,
    // width: '0%',
    textAlign:'center',
    margin: 'auto',
    paddingTop:10,
    paddingBottom:5,
    maxWidth: 300,
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div style={{padding:'50px', textAlign:'center'} }>
      <br/>
      
      <Typography variant='h4' style={{paddingBottom:'15px'}}>ABOUT DEVELOPERS</Typography>                   
        
      <Grid container spacing={2} >
      <Grid item  xs={12} sm={6}>
      <Card className={classes.root}>
          <CardContent style={{boxShadow:"0px 3px 5px"}}>
          
          <img src={icon1} className="imageset2" />
                       
                       <Typography  style={{paddingBottom:'5px',paddingTop:"10px"}}><b>Syed Asim Raza Naqvi</b></Typography>
                       <Divider />
                       <Typography  variant="h6"  style={{paddingTop:'5px'}} ><b>Skills</b></Typography>
                    
                       <Typography  style={{paddingTop:'5px'}}><b>Blockchain | ReactJs | React-Native |JamStack</b> </Typography>
                       
          </CardContent>
        </Card>
        </Grid>
        
        <Grid item  xs={12} sm={6}>
        <Card className={classes.root}>
          <CardContent style={{boxShadow:"0px 3px 5px"}}>
          
          <img src={icon2} className="imageset2" />
                       
                       <Typography style={{paddingBottom:'5px',paddingTop:"10px"}} ><b>Haseeb Ahmed</b></Typography>
                       <Divider />
                       <Typography variant="h6"  style={{paddingBottom:'5px'}}><b>Skills</b></Typography>
                       
                       <Typography style={{paddingTop:'5px'}}><b>UI/UX | ReactJs | Graphic Designer | React-Native</b> </Typography>
                       
          </CardContent>
        </Card>
        </Grid>
        <br/>
        
        <Grid item  xs={12} sm={6}>
        <Card className={classes.root}>
          <CardContent style={{boxShadow:"0px 3px 5px"}}>
          
          <img src={icon3} className="imageset2" />
                       
                       <Typography style={{paddingBottom:'5px',paddingTop:"10px"}}><b>Syed Kumail Ali Naqvi</b></Typography>
                       <Divider />
                       <Typography variant="h6"  style={{paddingBottom:'5px'}}><b>Skills</b></Typography>
                       
                       <Typography style={{paddingTop:'5px'}}><b>Blockchain | ReactJs | React-Native | JamStack</b> </Typography>
                       
          </CardContent>
        </Card>
        </Grid>
        <br/>
        <Grid item  xs={12} sm={6}>
        <Card className={classes.root}>
          <CardContent style={{boxShadow:"0px 3px 5px"}}>
          
          <img src={icon4} className="imageset2" />
                       
                       <Typography style={{paddingBottom:'5px',paddingTop:"10px"}}><b>Syed Muhammad Shaheryar</b></Typography>
                       <Divider />
                       <Typography variant="h6"  style={{paddingBottom:'5px'}}><b>Skills</b></Typography>
                       
                       <Typography style={{paddingTop:'5px'}}><b>UI/UX Designer | ReactJs | Hybrid Mobile Developer (Flutter)</b> </Typography>
                       
          </CardContent>
        </Card>
        </Grid>
        
 
      </Grid>
    </div>
  );
}
