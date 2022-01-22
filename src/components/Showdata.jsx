import  React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Editdata from './Editdata';



export default function Showdata() {
    const [rows,setRows]=useState([]);
    const [deleted,setisDeleted]=useState(false);
    const [open,setOpen]=useState(false);
    const [editData,setEditData]=useState({});


    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const openEditPopup=(data)=>{

      
 
   
      setEditData(data);

    }

    useEffect(()=>{

        // Passing an empty array means the useEffect will be called only once during first render

        axios.get("https://cryptic-everglades-50429.herokuapp.com/getData").then(data=>{
            setRows(data["data"]);

        console.log(data["data"]);
        }).catch(err=>{
          
          console.log(err);
        })

    },[deleted])

    const deleteIt=(_id,id)=>{
     const conf= confirm("Do you reall want to deleted")
     
   
      
      if(conf) {
        axios.delete(`https://cryptic-everglades-50429.herokuapp.com/deleteData/${_id}`).then(data=>{
          console.log(data["data"])
          setisDeleted(!deleted)
          /*
          setOpen(true);
          setTimeout(()=>{
            setOpen(false);

          },3000)
          */
        }).catch(err=>{
          
          console.log(err);
        })
      }
     

    }


  return (

 
 <TableContainer component={Paper} style={{"marginTop":"100px"}}>

      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Gender&nbsp;(g)</TableCell>
            <TableCell align="right">Delete&nbsp;(g)</TableCell>
            <TableCell align="right">Edit&nbsp;(g)</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
            
            <TableCell align="right">      <Button variant="contained" onClick={()=>deleteIt(row._id,row.id)}>Delete</Button>
</TableCell>
<TableCell align="right">      <Button variant="contained" onClick={()=>openEditPopup(row)}>Edit</Button>
</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

{/*
  open? <span>
  <h1>Deleted</h1>
</span>:""
*/
}
     

<Editdata data={editData}/>

   
    </TableContainer>
  
  );
     
 
}
