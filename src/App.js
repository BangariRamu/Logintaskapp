import React from 'react';
import './App.css';
import { Container, Box, Button, TextField, Typography, Link } from '@mui/material';
import { Google as GoogleIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon } from '@mui/icons-material';

function App() {
    return (
        <Container maxWidth="md">
            <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                minHeight="100vh"
            >
              <div>
                <div className="heading">
                  <img src="https://res.cloudinary.com/dtdpjftwe/image/upload/v1721192667/Screenshot_2024-07-17_102731_dg8sde.png" className="imagelogo"/>
                  <h1>HiCounselor</h1>
                </div>
                
                <img src="https://res.cloudinary.com/dtdpjftwe/image/upload/v1721188714/top-main-slide-image11_zwvvwi.webp" alt="HiCounselor Logo" className="logo" />
              </div>
              <div>
                <Typography variant="h5" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <Button variant="outlined" startIcon={<GoogleIcon />} fullWidth>
                    Sign in with Google
                </Button>
                <Button variant="outlined" startIcon={<LinkedInIcon />} fullWidth sx={{ mt: 2 }}>
                    Sign in with LinkedIn
                </Button>
                <Button variant="outlined" startIcon={<GitHubIcon />} fullWidth sx={{ mt: 2 }}>
                    Sign in with GitHub
                </Button>
                <Typography variant="body1" component="p" gutterBottom sx={{ mt: 2 }}>
                    OR
                </Typography>
                <TextField label="Username/Email ID" variant="outlined" fullWidth sx={{ mt: 2 }} />
                <TextField label="Password" type="password" variant="outlined" fullWidth sx={{ mt: 2 }} />
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                    Sign in
                </Button>
                <Box display="flex" justifyContent="flex-end">
                  
                     <Link href="#" variant="body2" sx={{ mt: 2 }}>
                         Forgot Password?
                    </Link>
               </Box>
                
                <Typography variant="body2" sx={{ mt: 2 }}>
                    First time here? <Link href="#">Create an account</Link>
                </Typography></div>
            </Box>
        </Container>
    );
}

export default App;
