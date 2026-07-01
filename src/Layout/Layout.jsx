import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      class="roboto-regular text-shadow-lg"
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
            <h1 class="text-5xl font-bold text-center bebas-neue-regular">Alyssa Virdeth L Padayhag</h1>
            <h2 class="text-3xl font-bold text-center bebas-neue-regular mb-8">Full Stack Web Developer</h2>
<span class="center">
	<a href="https://www.linkedin.com/in/alyssa-padayhag/" target="_blank" class="svg_icons mr-8 mb-5"><LinkedInIcon /></a>
    <a href="https://github.com/AlyssaPadayhag" target="_blank" class="svg_icons mr-12 mb-5"><GitHubIcon /></a>
    <a href="https://zledvflm4nm7pn4v.public.blob.vercel-storage.com/ap-resume.pdf" target="_blank" class="svg_icons mr-8 mb-5"><LaunchIcon />Resume </a>

</span>
        <Box sx={{ width: '100%' }} class="text-4xl roboto-regular text-shadow-lg">
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
          <Tab label="3 Yrs Full Stack Web Development" {...a11yProps(0)} />
          <Tab label="3 Yrs SuiteCloud Development" {...a11yProps(1)} />
          <Tab label="9 Yrs Tech Support" {...a11yProps(2)} />
          <Tab label="10 Yrs Customer Service" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <ul>
            <li>- HTML - CSS - JavaScript - PHP</li>
            <li>- TailwindCSS - Material UI - Bootstrap</li>
            <li>- React - Svelte</li>
            <li>- SQL - MySQL - Postgresql - DBeaver</li>
            <li>- GitHub - BitBucket - Jira</li>
       </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ul>
            <li>- Implementation completed in under a year</li>
            <li>- Implementation of PaceJet/Descartes, third party app integration</li>
            <li>- Custom excise tax calculation script</li>
            <li>- Custom shipping labels</li>
            <li>- Custom PDF files created with FreeMarker(Invoice, Sales Order, Packing Slip, etc)</li>
            <li>- Custom internal POS system to quicken pick and pull process</li>
            <li>- Custom lot assembly creation from the in-house app clean room procedure</li>
            <li>- Connection to Magento using the NetSuite Connector</li>
            <li>- Data Analysis</li>
            <li>- Admin work</li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ul>
            <li>- Tech support for 2-way radios and accessories at Klein Electronics</li>
            <li>- Tech support for mobile and screen device repair kits at RepairPartsPlus</li>
            <li>- Tech support for Wolters Kluwer tax software at Connexus Resource Group</li>
            <li>- Tech support for hardware, software, and peripherals at Flavors United</li>
        </ul>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <ul>
            <li>- Support using Jira for software, hardware, and peripheral issues at Flavors United for 3 years and 1 month</li>
            <li>- Phone, email, chat support at RepairPartsPlus for 2 years and 4 months</li>
            <li>- Phone and chat support at Connexus Resource Group for 4 months</li>
            <li>- McDonald's cashier and closer</li>
            <li>- Daiso cashier</li>
            <li>- Sky Zone guest services, event host, and court monitor</li>
            <li>- Sheraton Hotels and Resorts night housekeeper</li>
            <li>- Round Table Pizza crew member</li>
        </ul>
      </CustomTabPanel>
    </Box>
    </>

  );

  
}

