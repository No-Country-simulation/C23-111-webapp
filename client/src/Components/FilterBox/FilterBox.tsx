import { Box, Card, Chip, Divider, styled, Typography } from "@mui/material";
import theme from "@/theme/theme";
import { useRecipeContext } from "@/context/recipeContext";

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
  subtitle: number;
  items: string[];
  Icon: React.ElementType; // Componente del ícono que usará la tarjeta
};

export const FilterBox: React.FC<FilterBoxProps> = ({
  title,
  subtitle,
  items,
  Icon,
}) => {
  const { selectedIngredients, setSelectedIngredients } = useRecipeContext();

  const handleIngredientsToggle = (ingredient: string) => {
    if (selectedIngredients.includes(ingredient)) {
      setSelectedIngredients(
        selectedIngredients.filter((i) => i !== ingredient)
      );
    } else {
      setSelectedIngredients([...selectedIngredients, ingredient]);
    }
  };
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
              {selectedIngredients.length} / {subtitle} Ingredientes
            </Typography>
          </StyledTextHeader>
        </StyledCardHeader>

        <TagsStyle>
          {items.map((item) => (
            <ChipStyle
              key={item}
              className="mt-5"
              variant={selectedIngredients.includes(item) ? 'filled' : 'outlined'}
              label={item}
              onClick={() => {
                handleIngredientsToggle(item);
              }}
            />
          ))}
        </TagsStyle>
      </Card>
      <Divider />
    </>
  );
};
