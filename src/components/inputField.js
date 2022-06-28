import React from "react";
import { TextField, styled } from "@mui/material";
const StyledInputs = styled(TextField)(({ theme, ...props }) => ({
  [theme?.breakpoints.down("sm")]: {
    width: 280,
    height: 75,
    bottom: "0px",
    margin: "0px 0px",
  },
  width: 350,
  height: 50,
  margin: "20px 1px",
}));
const InputField = ({ otherStyles, ...props }) => (
  <StyledInputs
    {...props}
    sx={{
      "& .MuiFormLabel-root": {
        color: "#018F55",
      },
      "& .MuiFormLabel-root.Mui-focused": {
        color: "#018F55",
      },
      "& .MuiInputBase-root": {
        color: "#018F55",
        "& fieldset": {
          borderColor: "#018F55",
        },

        "&.Mui-focused fieldset": {
          borderColor: "#018F55",
        },
      },
      "&.Mui-focused .MuiInputBase-root": {
        color: "#018F55",
      },
      ...otherStyles,
    }}
  />
);
export default InputField;
