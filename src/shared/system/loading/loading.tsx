import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";

export const Loading: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.system.loading);
  if (isLoading) {
    return (
      <>
        <div>Loading...</div>
      </>
    );
  } else {
    return null;
  }
};
