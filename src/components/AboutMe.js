import React, {useEffect} from 'react';
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
                I am a computer science graduate with a passion for programming and solving technology problems. I
                specialize in Java and JavaScript, developing a solid foundation in backend and frontend application
                development. During my studies, I have done academic projects using Spring Boot, React and Node.js.
                I love working on challenges that allow me to develop skills and gain new experiences. I am eager to
                learn new technologies and tools, adapting to the dynamic needs of projects. I am looking for a first
                job where I can apply my knowledge, support the team and grow as a programmer.
            </Typography>
        </Box>
    );
};

export default AboutMe;