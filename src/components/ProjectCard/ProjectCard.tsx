import React from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { openInNewTab } from '../../helpers/navigation'

interface ProjectCardProps {
    title: string
    url: string
    subtitle: string
    image: string
}

export default function ProjectCard({
    title,
    url,
    subtitle,
    image,
}: ProjectCardProps) {
    const handleClickCardActionArea = () => {
        openInNewTab(url)
    }

    return (
        <CardActionArea
            sx={{
                '&:hover': { transform: 'scale(1.1)' },
                maxWidth: 280,
                transition: '0.5s ease all',
            }}
            onClick={handleClickCardActionArea}
        >
            <Card sx={{}}>
                <CardMedia
                    component="img"
                    height="300"
                    alt="img-src"
                    src={image}
                />
                <CardContent
                    sx={{
                        position: 'absolute',
                        top: 0,
                        padding: 0,
                        width: '100%',
                    }}
                >
                    <div style={{ background: '#f0f0f0f0', color: 'black' }}>
                        <Typography
                            style={{
                                fontSize: 24,
                            }}
                        >
                            {title}
                        </Typography>
                        <Typography
                            style={{
                                fontSize: 16,
                            }}
                        >
                            {subtitle}
                        </Typography>
                    </div>
                </CardContent>
            </Card>
        </CardActionArea>
    )
}
