import React,{useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import axios from 'axios';


export default function Adddata() {
   // const [gender, setGender] = React.useState('');
    const [state,setState]=useState({
        name:"",
        company:"",
        gender:"Male"


    })


    const Submit=()=>{

        // Gonna call the api ----->

        axios.post("https://jsonplaceholder.typicode.com/posts",state).then(data=>{
            console.log(data["data"]);
        }).catch(err=>{
            console.log(err);
        })

        

        console.log(state);

    }

    const handleChange = (event) => {
        setState({...state,[event.target.name]:event.target.value})
        //setAge();
      };
    
  return (
    <Box
      style={{marginTop:"100px"}}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h1>Fill Your Data</h1>
      <TextField id="outlined-basic" label="Name" variant="outlined"  name='name' onChange={handleChange}/>
      <br/>

      <TextField id="outlined-basic" label="Company" variant="outlined"  name='company' onChange={handleChange} />
      <br/>

      <InputLabel id="demo-simple-select-label">Age</InputLabel>

      <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state.gender}
          name='gender'
          label="Gender"
          onChange={handleChange}
        >
          <MenuItem value={"Male"}>Male</MenuItem>
          <MenuItem value={"Female"}>Female</MenuItem>
          <MenuItem value={"Others"}>Others</MenuItem>
   
        </Select>

        <br/>
        <Button variant="contained" onClick={Submit}>Submit</Button>

    
    </Box>
  );
}