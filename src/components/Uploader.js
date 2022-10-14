import React, { useState } from "react";
import ImageUploading from "react-images-uploading";
import { InsertPhoto, Clear } from "@mui/icons-material/";
import { IconButton } from "@mui/material";

const Uploader = ({ handleUploadImages }) => {
  const [images, setImages] = useState([]);
  const maxNumber = 5;
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    handleUploadImages(setImages(imageList));
  };
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChange}
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
  );
};

export default Uploader;
