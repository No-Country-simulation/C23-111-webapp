'use client'
import { TestComponent } from "@/Components";
import {Container, styled} from '@mui/material'


const StyledContainer = styled(Container) ({
    border: '1px solid red'
})

export default function Home() {
    return (
        <div>
            <main>
                <StyledContainer>
                    <TestComponent />
                </StyledContainer>
            </main>
            <footer>footer</footer>
        </div>
    );
}
