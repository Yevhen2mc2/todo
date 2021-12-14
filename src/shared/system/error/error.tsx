import React, { useEffect } from "react";
import { Snackbar } from "@mui/material";
import { useSelector } from "react-redux";
import { getError } from "../../../redux/system/selectors";
import { useAppDispatch } from "../../hooks";
import { systemSlice } from "../../../redux/system/systemSlice";

export const Error: React.FC = () => {
  const dispatch = useAppDispatch();
  const isError = useSelector(getError());
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    if (isError) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!!isError]);

  if (isError) {
    return (
      <>
        <div>
          <Snackbar
            open={open}
            autoHideDuration={2000}
            message="Error"
            onClose={() => {
              setOpen(false);
              dispatch(systemSlice.actions.setError);
            }}
          />
        </div>
      </>
    );
  } else {
    return null;
  }
};
