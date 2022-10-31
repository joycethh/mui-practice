import React, { useState, useEffect } from "react";
import {
  TextField,
  Card,
  IconButton,
  ImageListItem,
  Button,
} from "@mui/material";
import { InsertPhoto, Clear } from "@mui/icons-material/";
import ImageUploading from "react-images-uploading";
import { useDispatch, useSelector } from "react-redux";
import { updatePost } from "../../actions/postsAction";

const UpdatePost = ({ currentId, setCurrentId }) => {
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]); //image uploader lists
  const dispatch = useDispatch();
  const maxNumber = 6;

  //1. find the seleted post with the id given
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((item) => item._id === currentId) : null
  );
  console.log("post", post);

  //2. populate the form with the value of seleted post
  useEffect(() => {
    if (post) {
      setMessage(post.message);

      setImages(post.image);
      console.log("update-post.image", images);
    }
  }, [post, images]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit button clicked");

    dispatch(updatePost({ message: message, image: images }));
  };

  //image preview & handle image change
  const handleImgChange = (imageList) => {
    setImages(imageList);
  };
  return (
    <>
      <Card
        sx={{
          mr: 2,
          ml: 2,
          maxWidth: 690,
          backgroundColor: "pink",
          marginTop: 2,
        }}
        elevation={0}
      >
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <div>
            <div>
              <TextField
                name="message"
                variant="outlined"
                multiline
                fullWidth
                rows={2}
                // value={post.message}
                onChange={(e) => {
                  setMessage({ ...post, message: e.target.value });
                  console.log("message-input", message);
                }}
              />
            </div>

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
                  <div>
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

                        <div>
                          <IconButton
                            size="small"
                            onClick={() => onImageRemove(index)}
                            sx={{ color: "#fff" }}
                          >
                            <Clear />
                          </IconButton>
                        </div>
                      </ImageListItem>
                    ))}
                  </div>

                  <div>
                    <IconButton onClick={onImageUpload}>
                      <InsertPhoto color="secondary" />
                    </IconButton>
                  </div>
                </div>
              )}
            </ImageUploading>

            <div>
              <Button
                variant="contained"
                color="secondary"
                size="small"
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};

export default UpdatePost;
