import React from "react";
import { Button } from "@mui/material";

const Buttons = ({ value, ...props }) => <Button {...props}>{value}</Button>;

export default Buttons;