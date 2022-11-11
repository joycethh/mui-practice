import React, { useState } from "react";
import { TextField, Card, IconButton, ImageListItem } from "@mui/material";
import { InsertPhoto, Clear } from "@mui/icons-material/";

import { useDispatch } from "react-redux";

import ImageUploading from "react-images-uploading";

import {
  InputBox,
  StyledButton,
  BtnWrapper,
  UploaderWrapper,
  ImagePreviewBox,
  Overlay,
} from "./styles";

const Create = () => {
  const dispatch = useDispatch();
  const maxNumber = 6;
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]); //image uploader lists
  const [imageInput, setImageInput] = useState([]);

  //image preview & handle image change
  const handleImgChange = (imageList) => {
    setImages(imageList);
    const listArray = imageList.map((element) => element.data_url);
    imageInput.push(listArray);
    if (imageInput.length > 0) {
      setImageInput(imageInput[imageInput.length - 1]);
    }
  };

  const handleMssgChange = (e) => {
    const mssgInput = e.target.value;
    setMessage(mssgInput);
  };

  //clear form
  const handleClear = () => {
    setMessage("");
    setImages([]);
    setImageInput([]);
  };

  //submit the form
  const handleSumbit = (e) => {
    e.preventDefault();
    const postData = { message, image: imageInput };
    console.log("postData needed to be dispatch");
    handleClear();
  };
  return (
    <>
      <Card sx={{ mr: 2, ml: 2, maxWidth: 690 }} elevation={0}>
        <form autoComplete="off" noValidate onSubmit={handleSumbit}>
          <div>
            <InputBox>
              <TextField
                name="message"
                label="what is your thought?"
                variant="filled"
                multiline
                fullWidth
                rows={2}
                value={message}
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
                  {/* image preview */}
                  <ImagePreviewBox>
                    {imageList.map((image, index) => (
                      <ImageListItem
                        key={index}
                        sx={{
                          pr: 1,
                          maxWidth: 120,
                          maxHeight: 120,
                          minWidth: 80,
                          minHeight: 80,
                        }}
                      >
                        <img
                          src={image.data_url}
                          alt=""
                          width="100"
                          sx={{
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            backgroundBlendMode: "darken",
                          }}
                        />

                        <Overlay>
                          <IconButton
                            size="small"
                            onClick={() => onImageRemove(index)}
                            sx={{ color: "#fff" }}
                          >
                            <Clear />
                          </IconButton>
                        </Overlay>
                      </ImageListItem>
                    ))}
                  </ImagePreviewBox>

                  <UploaderWrapper>
                    <IconButton onClick={onImageUpload}>
                      <InsertPhoto color="secondary" />
                    </IconButton>
                  </UploaderWrapper>
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
          </div>
        </form>
      </Card>
    </>
  );
};

export default Create;
