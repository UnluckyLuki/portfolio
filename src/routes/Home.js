import React from 'react';
import {Typography} from "@mui/material";
import {styled} from "@mui/material/styles"
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? theme.palette.background.default : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const Home = () => {
    return (
        <Item>
            <Typography variant="body2" color="textSecondary">Hello</Typography>
        </Item>
    );
};

export default Home;
