'use client'
import {styled} from '@mui/material'


export default function AuthLayout({children,} : {children: React.ReactNode}) {
    const StyledDiv = styled('div') ({
        backgroundImage: `url('/authBack.png')`
    })
    
    return (
        <StyledDiv>
        {children}
        </StyledDiv>
    )
}