import React from 'react';
import {Grid} from "@mui/material";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";

const projects = [
    {
        name: "CrptoIdle",
        description: "Idle game created for engineering thesis made in Flutter.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/UnluckyLuki/CryptoIdle.git',
        },
        ],
    },
    {
        name: "Wordle",
        description: "Wordle game created for collage project made by two-person group.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/UnluckyLuki/Wordle_Project.git',
        },
        ],
    },
    {
        name: "YeetBlog",
        description: "A webpage where people can share theirs memes/posts/news with others.",
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
        description: "Board Game Event is an application that allows users to make an appointment for a board game.\n" +
            "User can create an event that will contain the number of players wanted for the game, the title of the board game, the place and date of the meeting. User can also search for interesting event and subscribe to it.",
        urls: [{
            name: 'GitHub link',
            url: 'https://github.com/Klizlo/BoardGameEvent.git',
        },
        ],
    },
    {
        name: "ISProject",
        description: "Another collage project merging sql database, java spring backend and react frontend with containerization. It focuses on game tier list based on steamDB database.",
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