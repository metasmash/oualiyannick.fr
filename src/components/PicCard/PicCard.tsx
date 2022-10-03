import React from 'react'
import { Card, CardMedia } from '@mui/material'

interface PicCardProps {
    src: string
}

export default function PicCard({ src }: PicCardProps) {
    return (
        <Card sx={{ borderRadius: 100 }}>
            <CardMedia component="img" height="300" image={src} alt="img-src" />
        </Card>
    )
}
