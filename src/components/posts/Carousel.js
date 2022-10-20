import React from "react";
import { IconButton, useTheme, useMediaQuery } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MyCarousel = ({ children }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const arrowStyles = {
    position: "absolute",
    zIndex: 3,
    top: "calc(50% - 40px)",
    width: 40,
    height: 40,
    cursor: "pointer",
    backgroundColor: "#2196f3",
    color: "#fff",
  };

  const indicatorStyles = {
    background: "#fff",
    width: 12,
    height: 12,
    display: "inline-block",
    margin: "0 12px",
    borderRadius: "50%",
    cursor: "pointer",
  };
  return (
    <Carousel
      dynamicHeight={true}
      showThumbs={false}
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, left: 20 }}
          >
            <KeyboardArrowLeft />
          </IconButton>
        )
      }
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton
            type="button"
            onClick={onClickHandler}
            title={label}
            style={{ ...arrowStyles, right: 20 }}
          >
            <KeyboardArrowRight />
          </IconButton>
        )
      }
      renderIndicator={(onClickHandler, isSelected, index, label) => {
        if (isSelected) {
          return (
            <span
              style={{ ...indicatorStyles, background: "#2196f3" }}
              aria-label={`Selected: ${label} ${index + 1}`}
              title={`Selected: ${label} ${index + 1}`}
            />
          );
        }
        return (
          <span
            style={{ ...indicatorStyles }}
            onClick={onClickHandler}
            onKeyDown={onClickHandler}
            value={index}
            key={index}
            role="button"
            tabIndex={0}
            title={`${label} ${index + 1}`}
            aria-label={`${label} ${index + 1}`}
          />
        );
      }}
    >
      {children}
    </Carousel>
  );
};

export default MyCarousel;
