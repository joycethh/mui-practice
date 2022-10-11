import React from "react";
import { Box, TextField, styled, Button, Card, Stack } from "@mui/material";

import { InsertPhoto, Tag } from "@mui/icons-material/";

const Create = () => {
  return (
    <>
      <Card sx={{ margin: (0, 2) }}>
        <InputBox>
          <TextField
            label="what is your thought?"
            variant="filled"
            multiline
            fullWidth
            rows={2}
            InputProps={{
              disableUnderline: true,
            }}
          />
        </InputBox>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <StyledStack direction="row" spacing={2}>
            <InsertPhoto sx={{ color: "#ff7f31" }} />
            <Tag sx={{ color: "#ff7f31" }} />
          </StyledStack>
          <BtnWrapper>
            <StyledButton variant="contained" color="secondary" size="small">
              Submit
            </StyledButton>
          </BtnWrapper>
        </Box>
      </Card>
    </>
  );
};

const InputBox = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1, 2),
}));

const StyledStack = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(1, 2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: (theme.shape.borderRadius, 50),
  textTransform: "capitalize",
  color: "#fff",
  justifyContent: "center",

  fontSize: 12,
  fontWeight: 600,
}));

const BtnWrapper = styled("div")(({ theme }) => ({
  margin: theme.spacing(1, 2),
}));
export default Create;
