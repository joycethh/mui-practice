import React, { useState, useEffect } from "react";
import { TextField, Card, IconButton, ImageListItem } from "@mui/material";
import { InsertPhoto, Clear } from "@mui/icons-material/";

import { useDispatch, useSelector } from "react-redux";
import { createPost, updatePost } from "../../actions/postsAction";
import ImageUploading from "react-images-uploading";

import {
  InputBox,
  StyledButton,
  BtnWrapper,
  UploaderWrapper,
  ImagePreviewBox,
  Overlay,
} from "./styles";

const Create = ({ currentId, setCurrentId }) => {
  const dispatch = useDispatch();
  const maxNumber = 6;
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]); //image uploader lists
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

  //TODO
  //1. get the selected post id
  //2. populate the form with the post content
  const selectedToUpdate = useSelector((state) =>
    currentId ? state.posts.posts.find((item) => item._id === currentId) : null
  );
  console.log("selectedToUpdate", selectedToUpdate);

  useEffect(() => {
    if (selectedToUpdate) {
      setMessage(selectedToUpdate.message);
      console.log("update-message", message);
      setImageInput(selectedToUpdate.image);
      console.log("update-image", imageInput);
    }
  }, [imageInput, message, selectedToUpdate]);

  const handleSumbit = (e) => {
    e.preventDefault();

    if (currentId === 0) {
      const postData = { message, image: imageInput };
      dispatch(createPost(postData));
      handleClear();
    } else {
      const postData = { message, image: imageInput };
      dispatch(updatePost(currentId, postData));

      handleClear();
    }
  };

  const handleClear = () => {
    setCurrentId(0);
    setMessage("");
    setImages([]);
    setImageInput([]);
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
