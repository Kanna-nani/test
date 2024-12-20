import React from 'react'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import PersonIcon from '@mui/icons-material/Person';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
  marginTop:'10px',
  border:'none'
});

const Firsttab = () => {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };
  return (
    <div className='fulldiv' style={{display:'flex',gap:'30px',marginTop:'30px'}}>
      <div className="left" style={{flex:'3'}}>
        <div><h4>Summary</h4></div>
        <div style={{  Width: '100%',marginTop:'10px' }}>
      <TextField fullWidth  id="fullWidth" />
    </div>
    <div style={{marginTop:'50px'}}><h4>Details</h4></div>
        <div style={{ Width: '100%',marginTop:'10px' }}>
      <TextField fullWidth  id="fullWidth" />
    </div>
    <div className="buttom" style={{display:'flex',marginTop:'50px'}}>
        <div className='subleft' style={{display:'flex',flex:'1'}}>
              <FormControl sx={{ flex:'1' }} size="large">
                <InputLabel id="demo-select-small-label" style={{display:'flex'}}>
                    <div style={{marginRight:'50px'}}> < LocalOfferTwoToneIcon /></div>
                    <div>Labels</div>
                </InputLabel>
                  <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={age}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                        <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
            </FormControl>
        </div>
    
            <div className='submiddle'>
              <AddIcon style={{color:'black',paddingBottom:'3px',padding:"14px",marginLeft:'5px',border:'2px solid lightgray',background:'lightgray',borderRadius:'5px'}}/>
            </div>
            <div className="subright" style={{display:'flex',flex:'2'}}>
                <TextField id="outlined-basic" label="Add Tag" variant="outlined" size="large" style={{padding:'none',border:'none',marginLeft:'45px',width:'100%',flex:'2'}} />
            </div>
    </div>
    </div>
      <div className="right" style={{display:'flex',flexDirection:'column',gap:'15px',flex:"1"}}>

      <FormControl sx={{ m: 1, Width: '100%',background:'lightgray',flex:'1' }} size="large">
            <InputLabel id="demo-select-small-label"><RepeatOutlinedIcon style={{fontSize:'18',marginRight:'47px',}}/>Select Assignments</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
           </Select>
         </FormControl>


        <div className='second' style={{display:'flex',flex:'1'}}>
          <FormControl sx={{ m: 1,background:'lightgray',flex:'1' }} size="large">
              <InputLabel id="demo-select-small-label"><ListAltOutlinedIcon style={{fontSize:'18',marginRight:'47px',}}/>Select Assignments</InputLabel>
              <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
              >
                  <MenuItem value="">
                  <em>None</em>
                  </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>

        <div className='third' style={{width:"100%" ,marginLeft:'10px', flex:1}}>
                        <LocalizationProvider   dateAdapter={AdapterDayjs} size='large'>
                                <DemoContainer   components={['DatePicker']}>
                                    <DatePicker  label="Due Date"  />
                                </DemoContainer>
                            </LocalizationProvider>
        </div>
     <div className='fourth' style={{display:'flex',flex:'1'}}>
            <FormControl sx={{ m: 1,background:'lightgray',flex:'1' }} size="large">
            <InputLabel id="demo-select-small-label"><PersonIcon style={{fontSize:'18',marginRight:'47px',}}/>Select Assignments</InputLabel>
            <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange}
            >
                <MenuItem value="">
                <em>None</em>
                </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
           </Select>
         </FormControl>
      </div>

          <div className="lastone"style={{marginTop:'10px',marginLeft:'10px',display:'flex',flexDirection:'column', flex:'1'}}>
                  <div><h4>Attachments</h4></div>
                <div style={{marginTop:'10px',flex:'1'}}>
                      <Button
                        style={{Width:'100%'}}
                      component="label"
                      role={undefined}
                      variant="contained"
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                    >
                      Upload files
                      <VisuallyHiddenInput
                        type="file"
                        onChange={(event) => console.log(event.target.files)}
                        multiple
                      />
                    </Button>
                  </div>
          </div>
      </div>
    </div>
  )
}

export default Firsttab
