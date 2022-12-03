import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  {useState}  from 'react';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';





import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';



function App() {
    const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
    </Box>
  );
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
const [arr,setarr]=useState([]);


  return (
    <div>
 <Card sx={{ minWidth: 275 }}>
<CardContent>
<Box sx={{ '& > :not(style)': { m: 1 } }}>

<FormControl variant="standard">
  
  <InputLabel htmlFor="input-with-icon-adornment">
 enter name
  </InputLabel>

  <Input
    id="input-with-icon-adornment"
    startAdornment={
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    }
    value={name} type="text"  onChange={(x)=>{ setname(x.target.value);
    }}
                    />



</FormControl>

<TextField
  id="input-with-icon-textfield"
  label="enter email"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <AccountCircle />
      </InputAdornment>
    ),
  }}
  variant="standard"
  value={email}type="text"onChange={(x)=>{ setemail(x.target.value);
  }}
    
    />


<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
  <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />

  <TextField id="input-with-sx" label="enter phone" variant="standard"
  value={phone} type="text"onChange={(x)=>{ setphone(x.target.value);
  }}
  />



</Box>
</Box>
</CardContent>
<CardActions>
  
<Button onClick={()=>{
  if(name=='')
  alert('enter name');
  else{
  if(email=='')
  alert('enter email');
  else{
  if(phone=='')
  alert('enter phone');}
}
var arr2=[];
var from=name;
from+=" "+email;
from+=" "+phone;
setarr([...arr, from ]);
setemail('');
setname('');
setphone('');
}}>send</Button>

</CardActions>
</Card>



<br/>


{arr.map((x) => {
          return (<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar>
              </Avatar>
            </ListItemAvatar>
            
            <ListItemText primary={x} secondary="Jan 9, 2014" />
          </ListItem>
    
        </List>
    
    
    
    
    );
        })}















  </div>







  );
}

export default App;
