import React from 'react'
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import { Box, Button } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ClearIcon from '@mui/icons-material/Clear';
import Todocart from './Todocart';


const Thirdpage = () => {
  return (
    
    <div className='parent'>
        <div className='first'>
             <h4>Summary</h4>
            <div className='text' style={{ width: '100%', maxWidth: '100%',marginTop:'10px' }}>
                <TextField fullWidth id="fullWidth" />
            </div>
        </div>
    <div className="second" style={{marginTop:'70px'}}>
      
      <Stack direction="row" spacing={2} sx={{display:'flex' }}>
           <div className='chip1' style={{display:'flex',flexDirection:'column',width:'100%',border:'2px solid lightgray',backgroundColor:'whitesmoke',borderRadius:'17px'}}>
              <div style={{display:'flex'}}>
                <Chip label="Todo"  style={{backgroundColor:'gray',flex:1,height:'50px'}}/>
              </div>
              <Todocart />

            </div> 
            <div className="chip2" style={{ display:'flex',width:'100%'}}>
                 <Chip label="Doing" color='primary' style={{flex:1,height:'50px'}}/>
            </div>
            <div className="chip3" style={{width:'100%',display:'flex'}}>
                 <Chip label="Done" color='success'  style={{flex:1,height:'50px'}} />
            </div>
           
        </Stack>
    </div> 
 
      
    </div>
  )
}

export default Thirdpage
