import React from 'react';
import {Grid, IconButton, useMediaQuery} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactPageIcon from "@mui/icons-material/ContactPage";

const linkIcons = [
    {
        name: 'GitHub',
        url: 'https://github.com/UnluckyLuki',
        icon: <GitHubIcon/>,
    },
    {
        name: 'Email',
        url: 'mailto: lukasz.wazelin@gmail.com',
        icon: <AlternateEmailIcon/>,
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/łukasz-wazelin-8719b631a/',
        icon: <LinkedInIcon/>,
    },
    {
        name: 'CV',
        url: 'https://github.com/UnluckyLuki',
        icon: <ContactPageIcon/>,
    },
]

const Links = () => {
    const isXSmall = useMediaQuery('(max-width:600px)');
    const isSmall = useMediaQuery('(min-width:601px) and (max-width:960px)');
    const isMedium = useMediaQuery('(min-width:961px) and (max-width:1280px)');
    const isLarge = useMediaQuery('(min-width:1281px)');

    const iconSize = isXSmall ? 25 : isSmall ? 50 : isMedium ? 100 : isLarge ? 150 : 100;
    return (
        <Grid container justifyContent="space-between" alignItems="center" spacing={2}>
            {linkIcons.map((icon, index) => (
                <Grid key={index} item xs={3} sm={3} md={3} lg={3} xl={12} display="flex" justifyContent="center" alignItems="center">
                    <IconButton
                        onClick={() => {
                            if (icon.name === 'Email') {
                                window.location.href = icon.url;
                            } else {
                                window.open(icon.url, '_blank', 'noopener,noreferrer');
                            }
                        }}
                        sx={{
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        {React.cloneElement(icon.icon, {
                            sx: {
                                fontSize: iconSize,
                                color: 'rgba(39, 181, 113, 0.8)',
                                '&:hover': {
                                    color: '#fbfbfb',
                                },
                            },
                        })}
                    </IconButton>
                </Grid>
            ))}
        </Grid>
    );
};

export default Links;