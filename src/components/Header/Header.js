import React from 'react';
import { AppBar } from '@mui/material';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

const Header = () => {
    return (
        <AppBar position="static" sx={{ backgroundColor: '#089eae', marginBottom: '1%', paddingLeft: '2%', textAlign: 'left' }}>
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 1 }}
                >
                    <FitnessCenterIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    BMI Calculator
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
