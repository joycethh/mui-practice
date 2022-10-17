import React, { useState } from "react";
import {
  TextField,
  styled,
  Button,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import { InsertPhoto, Clear } from "@mui/icons-material/";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postsAction";
import ImageUploading from "react-images-uploading";

//1. handleClear function to remove user's input
//2. photo uploader icon display hidden after click
//3. image preview size
//4. post card stylings
//
const Create = ({ id, setId }) => {
  const dispatch = useDispatch();
  const maxNumber = 3;
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);
  const [imageInput, setImageInput] = useState([]);

  const handleMssgChange = (e) => {
    const mssgInput = e.target.value;
    setMessage(mssgInput);
  };

  const handleImgChange = (imageList) => {
    setImages(imageList);

    const listArray = imageList.map((element) => element.data_url);
    imageInput.push(listArray);
    if (imageInput.length > 0) {
      setImageInput(imageInput[imageInput.length - 1]);
    }
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    const postData = { message, image: imageInput };
    dispatch(createPost(postData));

    handleClear();
  };

  const handleClear = () => {
    setMessage("");
    setImages([]);
    setImageInput([]);
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
              onChange={handleMssgChange}
            />
          </InputBox>

          <ImageUploading
            multiple
            value={images}
            onChange={handleImgChange}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg", "png", "gif"]}
            resolutionWidth="500"
          >
            {({ imageList, onImageUpload, onImageRemove }) => (
              <div>
                <IconButton onClick={onImageUpload}>
                  <InsertPhoto />
                </IconButton>

                {/* image preview */}
                {imageList.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />

                    <div className="image-overlay-btn">
                      <IconButton onClick={() => onImageRemove(index)}>
                        <Clear />
                      </IconButton>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>

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

          {/* <Box sx={{ display: "flex", justifyContent: "space-between" }}>
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
          </Box> */}
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
