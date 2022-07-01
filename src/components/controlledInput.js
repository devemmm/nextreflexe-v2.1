import React from "react";
import { Controller } from "react-hook-form";
import InputField from "./inputField";

const ControlledInputs = ({
  name,
  control,
  variant,
  placeholder,
  ...props
}) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value } }) => (
      <InputField
        variant="outlined"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        {...props}
      />
    )}
  />
);

export default ControlledInputs;
