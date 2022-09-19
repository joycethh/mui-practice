import {
  Box,
  Typography,
  AvatarGroup,
  Avatar,
  ImageList,
  ImageListItem,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box
      backgroundColor="skyblue"
      flex={2}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box postion="fixed">
        <Typography variant="h6">Online Friends</Typography>
        <AvatarGroup total={24}>
          <Avatar alt="A">A</Avatar>
          <Avatar alt="B">B</Avatar>
          <Avatar alt="C">C</Avatar>
          <Avatar alt="D">D</Avatar>
        </AvatarGroup>

        <ImageList
          sx={{ width: 500, height: 450 }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
    </Box>
  );
};
const srcset = (image: string, size: number, rows = 1, cols = 1) => {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
};

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1610555356070-d0efb6505f81?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "vally",
    rows: 2,
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1612676239016-41e2c92b8e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "layers",
    row: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1489363855452-7327672b1608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1vdW5hdGluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "snow",
  },
  {
    img: "https://images.unsplash.com/photo-1628923364817-3368fd17c190?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG1vdW5hdGluc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "cloud",
    cols: 2,
  },
  {
    img: "https://images.unsplash.com/photo-1613125700782-8394bec3e89d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bW91bmF0aW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "cloud",
    rows: 2,
    cols: 2,
  },
];
export default Rightbar;
