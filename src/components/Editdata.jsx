import React ,{useState}from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
const Editdata = (props) => {

    
    const [state,setState]=useState({})

    console.log("hey",props.data.gender);

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
  return  <Box
  style={{marginTop:"100px"}}
  component="form"
  sx={{
    '& > :not(style)': { m: 1, width: '25ch' },
  }}
  noValidate
  autoComplete="off"
>
    <h1>Edit Your Data</h1>
  <TextField id="outlined-basic"  value={props.data.name} variant="outlined"  name='name' onChange={handleChange}/>
  <br/>

  <TextField id="outlined-basic"  variant="outlined"  value={props.data.company} name='company' onChange={handleChange} />
  <br/>

  {
      /**
       * 
       */
  }

  <InputLabel id="demo-simple-select-label">Age</InputLabel>

  <Select
      labelId="demo-simple-select-label"
      id="demo-simple-select"
      value={props.data.gender}
      name='gender'
      label="Gender"
      onChange={handleChange}
    >
      <MenuItem value={"male"}>Male</MenuItem>
      <MenuItem value={"female"}>Female</MenuItem>
      <MenuItem value={"others"}>Others</MenuItem>

    </Select>

    <br/>
    <Button variant="contained" onClick={Submit}>Edit Data</Button>


</Box>;
};

export default Editdata;
