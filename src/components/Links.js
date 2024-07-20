import React from 'react';
import {Grid, IconButton, useMediaQuery} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const Links = () => {
    const isXSmall = useMediaQuery('(max-width:600px)');
    const isSmall = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isMedium = useMediaQuery('(min-width:961px) and (max-width:1280px)');
    const isLarge = useMediaQuery('(min-width:1281px)');

    const iconSize = isXSmall ? 25 : isSmall ? 50 : isMedium ? 100 : isLarge ? 150 : 100;
    return (
        <>
            <Grid container justifyContent={"space-evenly"} spacing={2} direction={"column"} alignSelf='center'
                  alignItems={"center"} m={"auto"}>
                <Grid key={'github'} item>
                    <IconButton
                        onClick={() => {
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                        <GitHubIcon
                            sx={{fontSize: iconSize, color: 'rgba(39, 181, 113, 0.8)', '&:hover': {color: '#fbfbfb'}}}/>
                    </IconButton>
                </Grid>
                <Grid key={'email'} item>
                    <IconButton
                        onClick={() => {
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                        <AlternateEmailIcon
                            sx={{fontSize: iconSize, color: 'rgba(39, 181, 113, 0.8)', '&:hover': {color: '#fbfbfb'}}}/>
                    </IconButton>
                </Grid>
                <Grid key={'linkedIn'} item>
                    <IconButton
                        onClick={() => {
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                        <LinkedInIcon
                            sx={{
                                fontSize: iconSize,
                                color: 'rgba(39, 181, 113, 0.8)',
                                '&:hover': {color: '#fbfbfb'}
                            }}/>
                    </IconButton>
                </Grid>
                <Grid key={'cv'} item>
                    <IconButton
                        onClick={() => {
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}>
                        <ContactPageIcon
                            sx={{fontSize: iconSize, color: 'rgba(39, 181, 113, 0.8)', '&:hover': {color: '#fbfbfb'}}}/>
                    </IconButton>
                </Grid>
            </Grid>
        </>
    );
};

export default Links;