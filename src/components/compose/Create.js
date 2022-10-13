import React, { useState } from "react";
import { Box, TextField, styled, Button, Card, Stack } from "@mui/material";
import { InsertPhoto, Tag } from "@mui/icons-material/";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postsAction";

const Create = ({ id, setId }) => {
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    // author:"",
    message: "",
    tags: "",
    selectedFile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <>
      <Card sx={{ marginLeft: 2, marginRight: 2 }}>
        <form autoComplete="off" noValidate onSubmit={handleSumbit}>
          <InputBox>
            <TextField
              name="message"
              label="what is your thought?"
              variant="filled"
              multiline
              fullWidth
              rows={2}
              InputProps={{
                disableUnderline: true,
              }}
              onChange={handleChange}
            />
          </InputBox>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <StyledStack direction="row" spacing={2}>
              <InsertPhoto sx={{ color: "#ff7f31" }} />
              <Tag sx={{ color: "#ff7f31" }} />
            </StyledStack>
            <BtnWrapper>
              <StyledButton
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleSumbit}
              >
                Submit
              </StyledButton>
            </BtnWrapper>
          </Box>
        </form>
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
