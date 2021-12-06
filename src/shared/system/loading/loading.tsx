import React from "react";
import { useSelector } from "react-redux";
import { getLoading } from "../../../redux/system/selectors/selectors";
import { Box, LinearProgress } from "@mui/material";

export const Loading: React.FC = () => {
  const HEIGHT_LOADING = 5;
  const isLoading = useSelector(getLoading());
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
