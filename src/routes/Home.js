import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import Box from "@mui/material/Box";
import {Grid, IconButton} from "@mui/material";


const Home = () => {
    return (
        <Box
        marginTop={3}
        justifyContent={"center"}
        alignItems={"center"}
        width={"95%"}
        height={"90%"}>
            <Grid container justifyContent={"space-between"}>
                <Grid key={"text"} item md={11}>
                    <Box
                        width='70%'
                        alignSelf='center'
                        m={"auto"}
                        display="flex"
                        p={2}
                        sx={{
                            bgcolor: 'white',
                            borderRadius: 1,
                            border: '2px solid grey',
                        }}>

                    </Box>
                </Grid>
                <Grid key={"links"} item md={1}>
                    <Grid container justifyContent={"space-evenly"} spacing={2} direction={"column"}>
                        <Grid key={'github'} item>
                            <IconButton
                                onClick={() => {
                                }}>
                                <GitHubIcon sx={{fontSize: 150}}/>
                            </IconButton>
                        </Grid>
                        <Grid key={'email'} item>
                            <IconButton
                                onClick={() => {
                                }}>
                                <AlternateEmailIcon sx={{fontSize: 150}}/>
                            </IconButton>
                        </Grid>
                        <Grid key={'linkedIn'} item>
                            <IconButton
                                onClick={() => {
                                }}>
                                <LinkedInIcon sx={{fontSize: 150}}/>
                            </IconButton>
                        </Grid>
                        <Grid key={'cv'} item>
                            <IconButton
                                onClick={() => {
                                }}>
                                <ContactPageIcon sx={{fontSize: 150}}/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </Box>
    );
};

export default Home;
