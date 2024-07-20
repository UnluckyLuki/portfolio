import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const pages = ['home', 'myProjects'];

function NavBar({clicked, setClicked}) {
    const navigate = useNavigate()

    return (
        <AppBar position="static" sx={{backgroundColor: 'rgba(25, 32, 28, 0.8)', boxShadow: 'none', backgroundImage: "none"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/*<Typography*/}
                    {/*    variant="h6"*/}
                    {/*    noWrap*/}
                    {/*    sx={{*/}
                    {/*        mr: 2,*/}
                    {/*        display: {xs: 'none', md: 'flex'},*/}
                    {/*        fontFamily: 'monospace',*/}
                    {/*        fontWeight: 700,*/}
                    {/*        letterSpacing: '.3rem',*/}
                    {/*        color: '#f6f7f7',*/}
                    {/*        textDecoration: 'none',*/}
                    {/*    }}*/}
                    {/*>*/}
                    {/*    MYPAGE*/}
                    {/*</Typography>*/}
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}} justifyContent={"center"}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => {
                                    navigate(`${page}`)
                                }}
                                sx={{
                                    color: '#f6f7f7',
                                    backgroundColor: clicked === page ? '#26bf75' : '#3b3b3b',
                                    border: '2px solid #101512',
                                    borderRadius: 0,
                                    display: 'block',
                                    width: "10%"
                                }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default NavBar;