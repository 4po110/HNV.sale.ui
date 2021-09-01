import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function CountSlider({handleUpdate}) {
  const classes = useStyles();
  const handleChange = (e,value) =>{
    console.log("slider ka target",value)
    handleUpdate(value)
  }
  return (
    <div style={{textAlign:'center'}} className={classes.root}>
      <Slider
        style={{margin:'0 100px',width:'60%'}}
        color="secondary"
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        onChange={handleChange}
      />
    </div>
  );
}
