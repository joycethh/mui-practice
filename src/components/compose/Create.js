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
  const [postData, setPostData] = useState({
    message: "",
    image: [],
  });
  const [images, setImages] = useState([]); //image uploader lists

  //1. find the seleted post with the id given
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((item) => item._id === currentId) : null
  );
  console.log("post", post);

  //2. populate the form with the value of seleted post
  useEffect(() => {
    if (post) {
      setPostData(post);
      setImages(post.image);
      console.log("update-post.image", images);
    }
  }, [post, images]);

  //image preview & handle image change
  const handleImgChange = (imageList) => {
    if (currentId) {
      // to update post
      //1. set the image input value equals to the post image
      setImages(post.image);
    } else {
      //to create post
      setImages(imageList);
      const listArray = imageList.map((element) => element.data_url);
      postData.image.push(listArray);
      if (postData.image.length > 0) {
        setPostData({
          ...postData,
          image: postData.image[postData.image.length - 1],
        });
      }
    }
  };

  //clear form
  const handleClear = () => {
    setCurrentId(null);
    setPostData({
      message: "",
      image: [],
    });
    setImages([]);
  };

  //submit the form
  const handleSumbit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updatePost(postData));
      handleClear();
    } else {
      dispatch(createPost(postData));
      handleClear();
    }
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
                value={postData.message}
                InputProps={{
                  disableUnderline: true,
                }}
                onChange={(e) => {
                  setPostData({ ...postData, message: e.target.value });
                }}
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
