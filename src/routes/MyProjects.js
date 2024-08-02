import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        name: "CryptoIdle",
        description: "CryptoIdle is an idle game developed as an engineering thesis project by a two-person team using Flutter. In this game, players engage in cryptocurrency mining and investment strategies to maximize their virtual wealth over time. The game features a range of idle mechanics, investment options, and progress tracking to provide a comprehensive and engaging experience.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/UnluckyLuki/CryptoIdle.git',
        },
        ],
    },
    {
        name: "Wordle",
        description: "Wordle is a word puzzle game developed for a college project by a two-person team using Swift. Players must guess a 5-letter word within 5 tries. Each guess provides feedback with colors: Green indicates the letter is in the correct position, Yellow indicates the letter is in the word but in the wrong position, and Red indicates the letter is not in the word. The game challenges players' vocabulary and deduction skills.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/UnluckyLuki/Wordle_Project.git',
        },
        ],
    },
    {
        name: "YeetBlog",
        description: "YeetBlog is a social media web application developed for a college project using React for the front-end and Java Spring for the back-end. This platform allows users to create and share memes, posts, and news articles with others. Users can interact with the content through comments, and likes.",
        urls: [{
            name: 'GitHub link - FrontEnd',
            url: 'https://github.com/UnluckyLuki/yeetblog-frontend.git',
        },
            {
                name: 'GitHub link - BackEnd',
                url: 'https://github.com/UnluckyLuki/YeetBlog-backend.git',
            },
        ],
    },
    {
        name: "BoardGameEvent",
        description: "BoardGameEvent is an application designed to facilitate the organization of board game meetings. Users can create events specifying the number of players needed, the title of the board game, and the meeting's location and date. Additionally, users can browse existing events and sign up to participate. The app aims to bring board game enthusiasts together and streamline the process of arranging game sessions.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/Klizlo/BoardGameEvent.git',
        },
        ],
    },
    {
        name: "ISProject",
        description: "ISProject is a comprehensive college project that integrates an SQL database, a Java Spring back-end, and a React front-end, all containerized for seamless deployment. The project focuses on creating a game tier list based on data from SteamDB, allowing users to browse and rank games.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/Klizlo/isproject.git',
        },
        ],
    },
]

const MyProjects = () => {

    return (
        <Box
            pt={10}
            m={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"95%"}
            height={"100%"}>
            <Grid container spacing={3}>
                {projects.map((project,index) => (
                    <Grid key={project.name} item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard project={project} key={index}/>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default MyProjects;