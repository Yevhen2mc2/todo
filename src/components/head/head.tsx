import React from "react";
import { localStorageAPI } from "../../localStorage/localStorage";
import { useNavigate } from "react-router-dom";

export const Head: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      head...
      <button
        onClick={() => {
          localStorageAPI.logOut();
          navigate("login");
        }}
      >
        Logout
      </button>
    </div>
  );
};
