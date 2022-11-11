import { styled, Button, Card } from "@mui/material";

//AddForm
// text input area
export const InputBox = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  padding: theme.spacing(1, 2),
}));

//image preview area
export const ImagePreviewBox = styled("div")(({ theme }) => ({
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  position: "relative",
}));

export const Overlay = styled("div")(({ theme }) => ({
  position: "absolute",
  top: "-1px",
  right: "-1px",
}));

//image uploader icon
export const UploaderWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(1),
}));

// submit btn
export const BtnWrapper = styled("div")(({ theme }) => ({
  position: "relative",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: (theme.shape.borderRadius, 50),
  textTransform: "capitalize",
  color: "#fff",
  justifyContent: "center",
  fontSize: 12,
  fontWeight: 600,

  position: "absolute",
  bottom: "15px",
  right: "35px",
}));

//newsFeed
const LoadingWrapper = styled(Card)(({ theme }) => ({
  elevation: 10,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  marginTop: theme.spacing(2),
  maxWidth: 690,
  height: "25vh",
}));
