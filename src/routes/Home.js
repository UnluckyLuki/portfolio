import React from 'react';
import Box from "@mui/material/Box";
import {Grid} from "@mui/material";
import Links from "../components/Links";
import BugsCard from "../components/BugsCard";
import AboutMe from "../components/AboutMe";


const Home = () => {

    return (
        <Box
            pt={2}
            m={"auto"}
            justifyContent={"center"}
            alignItems={"center"}
            width={"95%"}
            height={"100%"}>
            <Grid container justifyContent={"space-between"} spacing={2}>
                <Grid key={"aboutMe"} item xs={12} sm={12} md={8} m={"auto"}>
                    <AboutMe/>
                </Grid>
                <Grid key={"bugs"} item xs={12} sm={12} md={2} m={"auto"}>
                    <BugsCard/>
                </Grid>
                <Grid
                    key={"links"}
                    item
                    xs={12}
                    sm={12}
                    md={2}
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Links/>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Home;
