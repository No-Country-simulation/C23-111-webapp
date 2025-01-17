import { Box, Card, Chip, Divider, styled, Typography } from "@mui/material";
import theme from "@/theme/theme";

const TagsStyle = styled(Box)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 8px 6px;
    padding: 12px;
`;

const ChipStyle = styled(Chip)`
    border-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.main};
    padding: 0px 10px;
`;

const StyledCardHeader = styled(Box)`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const StyledTextHeader = styled(Box)`
    text-align: center;
`;

type FilterBoxProps = {
    title: string;
    subtitle: string;
    items: { id: number; name: string }[];
    Icon: React.ElementType; // Componente del ícono que usará la tarjeta
};

export const FilterBox: React.FC<FilterBoxProps> = ({
    title,
    subtitle,
    items,
    Icon,
}) => {
    return (
        <>
            <Card
                sx={{
                    maxWidth: "330",

                    py: 1,

                    borderRadius: 2,
                    boxShadow: "none",
                }}
            >
                <StyledCardHeader>
                    <Icon
                        sx={{
                            fontSize: 70,
                            color: "primary.main",
                            backgroundColor: "secondary.main",
                            borderRadius: "50%",
                            padding: 2,
                        }}
                    />
                    <StyledTextHeader>
                        <Typography variant="body1">{title}</Typography>
                        <Typography variant="caption" sx={{ color: "gray" }}>
                            {subtitle}
                        </Typography>
                    </StyledTextHeader>
                </StyledCardHeader>

                <TagsStyle>
                    {items.map(({ id, name }) => (
                        <ChipStyle
                            key={id}
                            className="mt-5"
                            variant="outlined"
                            label={name}
                            onClick={() => {}}
                        ></ChipStyle>
                    ))}
                </TagsStyle>
            </Card>
            <Divider />
        </>
    );
};
