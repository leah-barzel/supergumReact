import React, { useState } from 'react';
import { observer } from "mobx-react";
import { Button, TextField } from '@mui/material';

import { addServices } from '../Store/server.js';


const AddService = (observer(() =>{
const [name , setName] = useState('');

const handleAddService = () => {
    addServices({name});
};
    return(
        <>
        <TextField
        id="name" 
        aria-label="serviceName" 
        variant='outLined' 
        value={name} 
        onChange={(e)=>{ setName(e.target.value)}}></TextField>
       <button 
       variant="contained" 
       onClick={handleAddService}>Add service</button>
        </>
    )
}))
 
export default AddService




