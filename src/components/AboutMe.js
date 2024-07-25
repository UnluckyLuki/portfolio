import React from 'react';
import {Typography} from "@mui/material";
import Box from "@mui/material/Box";

const AboutMe = () => {
    return (
        <Box
            height={"100%"}
            alignSelf='center'
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer consequat, ante
                eget tempor commodo, erat lectus accumsan felis, eget imperdiet magna magna eget
                ligula. Maecenas at consequat dolor. Nunc rhoncus condimentum odio, et consequat mi
                aliquam sed. Quisque in urna porta, tincidunt nunc eu, volutpat turpis. Aliquam
                placerat cursus eros eget blandit. Pellentesque sit amet maximus lorem. Pellentesque
                accumsan arcu purus, a blandit ligula tempor eget. Quisque cursus, arcu sed finibus
                rutrum, risus nibh pulvinar nisl, quis convallis nulla ligula in sapien. In aliquet
                malesuada quam, nec scelerisque elit mollis id. Donec enim elit, sodales vel tortor
                tincidunt, faucibus porta metus. Cras commodo porta erat, at sollicitudin justo
                tempor non. Aliquam lobortis enim at lectus gravida cursus.

                Nulla faucibus, dolor eu semper molestie, est felis malesuada urna, a ullamcorper
                ante eros eget ex. Duis nisl dui, pharetra nec placerat sed, posuere et nisi. Etiam
                nec euismod massa. Nam pulvinar semper nunc et malesuada. Quisque imperdiet ex vel
                ante condimentum, ut molestie tortor consequat. Cras tristique urna arcu, eleifend
                consectetur massa sodales eget. Mauris tristique dolor ante, sit amet sodales neque
                venenatis non.

                Integer nec varius tortor. Aliquam finibus suscipit nisl. Proin viverra elit a nisi
                tempus, ut laoreet odio tincidunt. Duis malesuada est nec magna lobortis euismod.
                Fusce ac quam id tellus porta sodales. Pellentesque quis arcu eget purus dignissim
                ultricies et nec nulla. Praesent in rutrum orci. In nec egestas nulla, eget
                ullamcorper justo. Pellentesque sit amet porttitor orci. Quisque at magna a arcu
                rutrum placerat. Aliquam erat volutpat. Vestibulum commodo quis ipsum maximus
                dictum. Proin condimentum, velit finibus pharetra euismod, mauris sem faucibus diam,
                non aliquet elit ligula eget neque.
            </Typography>
        </Box>
    );
};

export default AboutMe;