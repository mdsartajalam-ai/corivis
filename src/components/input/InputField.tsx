"use client";

import TextField from "@mui/material/TextField";
import { ChangeEvent } from "react";

type Props = {
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: "text" | "email" | "number";
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
};

const InputField = ({
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
  multiline = false,
  rows = 3,
}: Props) => {
  return (
    <TextField
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      size="small"
      fullWidth
      variant="outlined"
      multiline={multiline}
      rows={multiline ? rows : undefined}
      className="app-input"
    />
  );
};

export default InputField;