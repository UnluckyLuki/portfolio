import React from 'react';
import {Card, CardActions, CardContent, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const ProjectCard = ({project}) => {
    return (
        <Card
            sx={{
                minHeight: 350,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                bgcolor: 'rgba(25, 32, 28, 0.8)',
                borderRadius: 3,
                border: '2px solid #101512',
            }}>
            <CardContent>
                <Typography variant="h5" component="div" color={"#e8e9e8"}>
                    {project.name}
                </Typography>
                <Typography variant="body" component="textSecondary" color={"#bcbdbd"}>
                    {project.description}
                </Typography>
            </CardContent>
            <Box sx={{ flexGrow: 1 }} />
            <CardActions sx={{ justifyContent: 'flex-end' }}>
                {project.urls.map((url, index) => (
                    <Button
                        size="small"
                        key={index}
                        onClick={() => window.open(url.url, '_blank', 'noopener,noreferrer')}
                    >
                        {url.name}
                    </Button>
                ))}
            </CardActions>
        </Card>
    );
};

export default ProjectCard;