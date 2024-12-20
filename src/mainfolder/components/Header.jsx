import  React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import CloseIcon from '@mui/icons-material/Close';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Header = () => {
  const [SaveCard, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
       <AppBar position="static" style={{backgroundColor:'white',color:'black'}}>
       <Toolbar>
        <h1 style={{flexGrow:1}}>New Card</h1>
        <Button variant='outlined' style={{color:'black',padding:'5px',marginRight:'30px',border:'1.7px solid lightgray', font: '16px Arial, sans-serif'}}>Configure Fields</Button>
        <FormControl   style={{width:'160px',marginRight:'30px',}} size='small'>
        <InputLabel id="demo-simple-select-label" style={{color:'black'}}>SAVE CARD</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={SaveCard}
          label="Save Card"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
        < RemoveIcon style={{color:'black',padding:'5px',marginRight:'3px',border:'2px solid lightgray'}} />
        <ShuffleIcon style={{color:'black',padding:'5px',marginRight:'3px',border:'2px solid lightgray'}}/>
        <CloseIcon style={{color:'black',padding:'5px',marginRight:'3px',border:'2px solid lightgray'}}/>


       </Toolbar>
       </AppBar>
    </div>
  )
}

export default Header
