import React from 'react'
import { CssBaseline, Grid, Typography } from '@mui/material'
import { PicCard } from '../../components'
import profilePic from '../../assets/profilepic.png'
import ProjectCard from '../../components/ProjectCard/ProjectCard'
import { projects } from '../../constants'

export default function Home() {
    return (
        <div style={{ width: '100%' }}>
            <CssBaseline />
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '1em',
                    }}
                    item
                    xs={12}
                >
                    <PicCard src={profilePic} />
                </Grid>
                <Grid
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '1em',
                    }}
                    item
                    xs={12}
                >
                    <div style={{ textAlign: 'center' }}>
                        <Typography>Welcome to my personal website!</Typography>
                        <Typography>
                            You can take a look to my different projects through
                            years
                        </Typography>
                        <Typography>
                            This website is still in construction, and new
                            content will be added :)
                        </Typography>
                    </div>
                </Grid>

                {projects.map((project) => (
                    <Grid
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: '1em',
                        }}
                        item
                        xs={12}
                        sm={6}
                        lg={4}
                    >
                        <ProjectCard {...project} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
