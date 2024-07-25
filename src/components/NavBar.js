import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom";

const pages = [{name: 'home', url: ''}, {name: 'myProjects', url: 'myProjects'}];

function NavBar({clicked, setClicked}) {
    const navigate = useNavigate()

    return (
        <AppBar
            position="fixed"
            sx={{
                backgroundColor: 'rgba(25, 32, 28, 0.8)',
                boxShadow: 'none',
                backgroundImage: "none",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1200
            }}
        >
            <Toolbar disableGutters>
                <Box sx={{flexGrow: 2, display: 'flex'}} justifyContent={"center"}>
                    {pages.map((page) => (
                        <Button
                            key={page.name}
                            onClick={() => {
                                setClicked(page.name)
                                navigate(`${page.url}`)
                            }}
                            sx={{
                                color: '#f6f7f7',
                                backgroundColor: clicked === page.name ? 'rgba(39, 181, 113, 0.8)' : 'rgba(59, 59, 59, 0.8)',
                                border: '2px solid #101512',
                                borderRadius: 0,
                                display: 'block',
                                minWidth: "10%"
                            }}
                        >
                            {page.name}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default NavBar;