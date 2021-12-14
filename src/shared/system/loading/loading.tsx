import React from "react";
import { getLoading } from "../../../redux/system/selectors";
import { Box, LinearProgress } from "@mui/material";
import { useAppSelector } from "../../hooks";

export const Loading: React.FC = () => {
  const HEIGHT_LOADING = 5;
  const isLoading = useAppSelector(getLoading());
  if (isLoading) {
    return (
      <Box sx={{ width: "100%", height: HEIGHT_LOADING }}>
        <LinearProgress />
      </Box>
    );
  } else {
    return <div style={{ height: HEIGHT_LOADING }}></div>;
  }
};
