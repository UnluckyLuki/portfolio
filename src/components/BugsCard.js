import React from 'react';
import {Typography} from "@mui/material";
import {ReactTyped} from "react-typed";
import Box from "@mui/material/Box";

const BugsCard = () => {
    return (
        <Box
            height={"100%"}
            alignSelf='center'
            justifyContent="center"
            alignItems={"center"}
            justifySelf="center"
            m={"auto"}
            display="flex"
            p={2}
            sx={{
                bgcolor: 'rgba(25, 32, 28, 0.8)',
                borderRadius: 3,
                border: '2px solid #101512',
            }}>
            <Typography variant="h4" component="div" textAlign="center" color={"#e8e9e8"}>
                Days without bugs: <br/>
                <ReactTyped
                    strings={["Calculating..", "0.."]}
                    typeSpeed={80}
                    loop
                    backDelay={4000}
                    backSpeed={40}
                    cursorChar={"."}
                    showCursor={true}
                />
            </Typography>
        </Box>
    );
};

export default BugsCard;