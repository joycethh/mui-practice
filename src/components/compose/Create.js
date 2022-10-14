import React, { useState } from "react";
import {
  Box,
  TextField,
  styled,
  Button,
  Card,
  Stack,
  IconButton,
} from "@mui/material";
import { InsertPhoto, Tag, Clear } from "@mui/icons-material/";

import { useDispatch } from "react-redux";
import { createPost } from "../../actions/postsAction";
import ImageUploading from "react-images-uploading";

const Create = ({ id, setId }) => {
  const dispatch = useDispatch();
  const maxNumber = 3;
  const [message, setMessage] = useState("");
  const [images, setImages] = useState([]);

  // const [postData, setPostData] = useState({
  //   // author:"",
  //   message: "",
  //   tags: "",
  //   imageList: [],
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPostData({ ...postData, [name]: value });
  // };

  // const handleSumbit = (e) => {
  //   e.preventDefault();
  //   dispatch(createPost(postData));
  // };

  const handleMssgChange = (e) => {
    const mssgInput = e.target.value;
    setMessage(mssgInput);
    console.log("message", message);
  };

  const handleImgChange = (imageList) => {
    console.log("handleImageChange");
    // Set image state to whatever image was selected
    setImages(imageList);
    console.log("imageList", imageList);
    images.push(imageList[0]);
    console.log("images", images);
  };

  //how to assign array to new array, postModel, image: [String], set to equal react useState images
  //how to access the imageList outside

  const handleSumbit = (e) => {
    e.preventDefault();
    const postData = { message, image: images };
    console.log("postData", postData);
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
