import { Box, styled, InputBase, IconButton, Divider } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import theme from "@/theme/theme";

const StyledBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  padding: 10,
  borderRadius: "10px",
  boxShadow: "0px 0px 17px 0px rgba(0,0,0, 0.15)",
});

interface SearchBarProps {
  sx?: object
}

export const SearchBar: React.FC<SearchBarProps> = ({sx}) => {
  return (
    <StyledBox sx={{...sx}}>
      <InputBase
      fullWidth
        sx={{ ml: 1, flex: 1 }}
        placeholder="Agregar ingredientes..."
        inputProps={{ "aria-label": "Agregar ingredientes" }}
      />
      <Divider sx={{ height: 38, m: 0.5 }} orientation="vertical" />
      <IconButton
        type="button"
        sx={{ p: "10px", color: [theme.palette.primary.main] }}
      >
        <SearchIcon sx={{fontSize: 30}} />
      </IconButton>
    </StyledBox>
  );
};
