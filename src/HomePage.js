import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from '@mui/material';
import {  ThemeProvider } from "@mui/material/styles";
import newTheme from './themes';

function HomePage() {
    const navigate = useNavigate();
  return (
    <>
    <div  className="bg">
    <ThemeProvider theme={newTheme}>
        <Button style={{ left:"980px",top:"520px",width: "250px", height: "45px", margin: "2px",  fontSize: 26, }}  
        variant="contained" 
        color="primary" 
        onClick={() => navigate('signin')}>Get Started</Button>
         <div style={{ position: 'fixed', left: 432, top: 40 }}>
          <Typography variant="h2"  sx={{ fontStyle: 'italic' }}>
                       
                      Shahan im Glück

          </Typography>
          </div>
        <div style={{ position: 'fixed', left: 20, bottom: 10 }}>
          <Typography variant="h5"  sx={{ fontStyle: 'italic', textDecoration: 'underline' }}>
                        Öffnungszeiten
                        Di-Son 14 bis 23:30 Uhr
          </Typography>
          </div>
          <div style={{ position: 'fixed', right: 240, bottom: 70 }}>
          <Typography variant="h5"  sx={{ fontStyle: 'italic', textDecoration: 'underline' }}>
                        Kontakt
                        0176 30197787
          </Typography>
          </div>
          <div style={{ position: 'fixed', right: 432, bottom: 40 }}>
          <Typography variant="h5"  sx={{ fontStyle: 'italic', textDecoration: 'underline' }}>
                       
                        Anfahrt:

          </Typography>
          </div>
          <div style={{ position: 'fixed', right: 25, bottom: 15 }}>
          <Typography variant="h5"  sx={{ fontStyle: 'italic', textDecoration: 'underline' }}>
                        Nibelungenpl. 1 60318, Fankfurt am Main
          </Typography>
          </div>

        </ThemeProvider>
    </div>
    </>
  )
}

export default HomePage
