import { styled } from "@mui/material";
import Button, { ButtonProps } from "@mui/material/Button";

export const CommonButton = styled(Button)<ButtonProps>(({ theme }) => ({
  width: 250,
  margin: 10,
}));
