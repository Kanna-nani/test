import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Firsttab from './Firsttab';
import Secondpage from './Secondpage';
import Thirdpage from './Thirdpage';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Maintab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 3, borderColor: 'divider',marginTop:'10px'  }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" >
          <Tab label=" Details"  style={{color:'black',fontWeight:'bold'}} />
          <Tab label="Conversation"  style={{color:'black',fontWeight:'bold'}}/>
          <Tab label="Tasks"  style={{color:'black',fontWeight:'bold'}}/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Firsttab  />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Secondpage />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Thirdpage />
      </CustomTabPanel>
    </Box>
  );
}
