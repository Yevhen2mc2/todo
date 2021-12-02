import React, { useEffect } from "react";
import { Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/rootReducer";
import { setError } from "../../../redux/system/actions/actions";

export const Error: React.FC = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state: RootState) => state.system.error);
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
              dispatch(setError(false));
            }}
          />
        </div>
      </>
    );
  } else {
    return null;
  }
};
