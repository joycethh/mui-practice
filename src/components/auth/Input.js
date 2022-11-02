import React from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility } from "@mui/icons-material";

const Input = ({
  name,
  handleChange,
  label,
  half,
  autoFucus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        type={type}
        onChange={handleChange}
        label={label}
        autoFocus={autoFucus}
        required
        fullWidth
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      <Visibility />
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
};

export default Input;
