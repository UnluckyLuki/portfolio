import React from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";
import {ReactTyped} from "react-typed";

const AboutMe = () => {
    return (
        <Box
            alignSelf='center'
            minHeight={"80%"}
            minWidth={"80%"}
            m={"auto"}
            display="flex"
            flexDirection={"column"}
            p={2}
            sx={{
                bgcolor: 'rgba(25, 32, 28, 0.8)',
                borderRadius: 3,
                border: '2px solid #101512',
            }}>
            <Typography variant="h3" component="div" color={"#e8e9e8"}>
                Hi, I'm Łukasz
            </Typography>
            <Typography variant="h6" component="div" color={"#bcbdbd"}>
                <ReactTyped
                    strings={["Bio in progress.."]}
                    typeSpeed={80}
                    cursorChar={"."}
                    showCursor={true}
                />
            </Typography>
        </Box>
    );
};

export default AboutMe;