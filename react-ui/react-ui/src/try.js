import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import  useState  from 'react';
function Try() {
     // const bull = (
  //   <Box
  //     component="span"
  //     sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  //   >
  //     •
  //   </Box>
  // );
  
  
  

  




  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');

    return(
<Card sx={{ minWidth: 275 }}>
<CardContent>
  <form>
  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
  <input type="text" onChange={(x)=>{ setname(x.targate.value);
  }}/>name


  </Typography>
  <Typography  sx={{ mb: 1.5 }} color="text.secondary">
  <input type="text"onChange={(x)=>{ setphone(x.targate.value);
  }}/>phone
  </Typography>
  <Typography sx={{ mb: 1.5 }} color="text.secondary">
  <input type="text"onChange={(x)=>{ setemail(x.targate.value);
  }}/>email
  </Typography>
  <Typography variant="body2">
  
  </Typography>
  </form>
</CardContent>
<CardActions>
  
<Button></Button>

</CardActions>
</Card>)
}