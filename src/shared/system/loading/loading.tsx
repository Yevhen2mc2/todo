import React from "react";
import { useSelector } from "react-redux";
import { getLoading } from "../../../redux/system/selectors/selectors";

export const Loading: React.FC = () => {
  const isLoading = useSelector(getLoading());
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
