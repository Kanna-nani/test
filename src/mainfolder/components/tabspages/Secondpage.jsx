import { Avatar, Box, FormControl, InputAdornment, InputLabel, OutlinedInput, Tab, Tabs, TextField } from '@mui/material'
import React from 'react'
import FormatBoldRoundedIcon from '@mui/icons-material/FormatBoldRounded';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
const Secondpage = () => {
  
  return (
    <div className='full'>
      <div className="header">
        <h4>Summary</h4>
        <div style={{marginTop:'15px'}}>
          <TextField fullWidth label="" id="fullWidth" />
        </div>
      </div>
      <div className="middle" style={{marginTop:'55px'}}>
      <Box sx={{ borderBottom: 3, borderColor: 'divider' }}>
        <Tabs aria-label="basic tabs example">
          <Tab label="Team" style={{border:'2px solid gray', borderBottom:'none',backgroundColor:'whitesmoke'}}/>
          
        </Tabs>
      </Box>
      </div>
      <div className="comments" style={{marginTop:'20px'}}>
            <h4>Comments:</h4>

            <div className='top' style={{marginTop:'25px',display:'flex'}}>
                <div className="pic" style={{flex:1}}>
                <Avatar alt="Remy Sharp" src="src/mainfolder/components/IMG_20240106_212114.jpg" />
                </div>
                <div style={{flex:20,border:'1px solid gray'}}>
                  <TextField fullWidth label="Mention Your teammates (just @ and their usernames) and they'll be alerted" id="fullWidth" />
                  <div className="icons" style={{display:'flex',height:'45px',justifyContent:'space-between',alignItems:'center',backgroundColor:'lightgray'}}>
                    <div className="left" style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'10px'}}>
                        <FormatBoldRoundedIcon />
                        <FormatItalicOutlinedIcon />
                        <FormatUnderlinedIcon/>
                        <StrikethroughSIcon/>
                        <AllInclusiveIcon/>
                        <FormatListNumberedIcon/>
                    </div>
                    <div className="right" style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <SendRoundedIcon style={{backgroundColor:'green',padding:'1px',marginRight:'5px',border:'1px solid gray',borderRadius:'5px'}}/>
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='bottom' style={{marginTop:'55px',display:'flex'}}>
                <div className='left' style={{display:'flex',flex:35,position:'relative',border:'1px solid gray',}}>
                    
                    <OutlinedInput style={{height:'80px',width:'100%'}}
                      id="outlined-adornment-amount"
                      startAdornment={<InputAdornment position="start">Test
                      <div >
                          <div className="name" style={{position:'absolute',right:"10px",top:"10px"}}>
                            Kanna Nani
                          </div>
                          <div className="icon" style={{position:'absolute',right:"10px",bottom:'6px'}}>
                            <ModeEditRoundedIcon style={{backgroundColor:'whitesmoke',border:'1px solid gray',borderRadius:'5px',marginRight:'5px'}}/>
                            <DeleteRoundedIcon style={{backgroundColor:'whitesmoke',border:'1px solid gray',borderRadius:'5px'}}/>
                          </div>
                      </div>
                      </InputAdornment>}
                      
                        />
                        
                      
                </div>
                  <div className="right" style={{flex:1,marginLeft:'30px'}}>
                    <Avatar alt="Remy Sharp" src="src/mainfolder/components/IMG_20240106_212114.jpg"/>
                  </div>
            </div>

      </div>
      
    </div>
  )
}

export default Secondpage
