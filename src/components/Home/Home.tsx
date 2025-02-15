import React from 'react';
import {Box, Grid} from "@mui/material";


const Home: React.FC = () => {
    return(<Grid container spacing={2}>
            <Grid item xs={12}>

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 4
                    }}
                >
                    <h1>Nifi Management UI</h1>
                </Box>
            </Grid>
                <Grid item xs={4}>

                </Grid>
            </Grid>);
}

export default Home;