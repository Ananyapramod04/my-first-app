import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    //const rows=[{name:'Maya',email:'maya@gmail.com',phone:956784677},
    // {name:'Akash',email:'aks@gmail.com',phone:9456784533},
    // {name:'Smrithi',email:'smr@gmail.com',phone:94885484533}]
    const[rows,setRows]=useState([])
    useEffect(()=>{
      axios.get('https://dummyjson.com/users').then((res)=>{
        // console.log(res.data.users)
        setRows(res.data.users)

      })
    },[])
    return (
    <div>
       <TableContainer style ={{marginTop:'5%'}} component={Paper }>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name </TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
           {rows.map((row) => (
            <TableRow
              key={row.firstName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default View
