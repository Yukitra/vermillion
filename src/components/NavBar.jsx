import {Button, Paper, Avatar, Typography} from '@mui/material'


function NavBar(){
  const navBarItems=[
    {
      name:'Home'
    },
    {
      name:'Planner'
    },
    {
      name:'Songs'
    },
    {
      name:'Writing'
    },
    {
      name:'ToDos'
    }
  ]

    return (
        <Paper  sx={{
          display:'flex',
          backgroundColor:'#000000',
          BackgroundColor:'primary',
          borderRadius:'0px',
          height:'70px',
          margin:'0px'
        }}>
          <Avatar 
          src={require('./r.png')} 
          alt='BandLogo' 
          sx={{
            alignSelf:'center',
            marginRight:'10px',
            marginLeft:'10px',
            height:'80%',
            width:'auto'
            
          }}/>
          {navBarItems.map((item, index) => (
            <Button key={index} 
            color="primary"
            
            sx={{
              margin:'none',
              height:'100%',
              width:'auto',
              backgroundColor:'000000',
              borderRadius:'0px',
              padding:'20px'
            }}>
              <Typography 
              variant='h2'
              sx={{
                fontSize:'24px',
                color:'#950101',
                fontFamily:'Rajdhani'
              }} > 
                {item.name}
              </Typography>
            </Button>
          ))}
          
        </Paper>
        
     


      
    )
}
export default NavBar