import React from "react";
import { Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Input = ({
  name,
  handleChange,
  label,
  //   error,
  //   helperText,
  autoFucus,
  type,
  handleShowPassword,
}) => {
  return (
    <Grid item xs={12}>
      <TextField
        name={name}
        type={type}
        onChange={handleChange}
        label={label}
        // error={error}
        // helperText={helperText}
        autoFocus={autoFucus}
        required
        fullWidth
        size="small"
        InputProps={
          name === "password" || name === "confirmedPassword"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword} size="small">
                      {type === "password" ? (
                        <Visibility fontSize="small" />
                      ) : (
                        <VisibilityOff fontSize="small" />
                      )}
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
