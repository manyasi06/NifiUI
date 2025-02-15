import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const CustomNavbar: React.FC = () => {
    return (
        <AppBar position="static"
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.6)",
                    backdropFilter: "blur(10px)",
                    color: "#1E3A5F",
                }}
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    MyApp
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/login">Login</Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default CustomNavbar;