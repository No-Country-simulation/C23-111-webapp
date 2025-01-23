'use client'
import {styled} from '@mui/material'


export default function AuthLayout({children,} : {children: React.ReactNode}) {
    const StyledDiv = styled('div') ({
        backgroundImage: `url('/food.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
    })
    
    return (
        <StyledDiv>
        {children}
        </StyledDiv>
    )
}