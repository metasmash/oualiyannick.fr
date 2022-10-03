import React, { ReactNode } from 'react'

interface CoreLayoutProps {
    children: ReactNode
}

export default function CoreLayout({ children }: CoreLayoutProps) {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                padding: '0 clamp(10px,300px,5vw)',
            }}
        >
            {children}
        </div>
    )
}
