import { Container, styled, Typography } from "@mui/material";
import Image from "next/image";

const StyledContainer = styled(Container)({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    margin: "10% 0",
    alignItems: "center",
});
export const EmptyRecipesContainer = () => {
    return (
        <StyledContainer>
            <Image
                src="/empty-state-icon.png"
                alt="No hay resultados que mostrar"
                width="100"
                height="100"
            />
            <Typography variant="h3" sx={{ color: "gray", mt: "20px" }}>
                No hay resultados.
            </Typography>
        </StyledContainer>
    );
};
