import { Box, styled } from "@mui/material";

export const SlidesContainer = styled(Box)(({ theme }) => ({
  flex: 6,
  display: "block",
  background:
    "linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%)",
  backgroundBlendMode: "screen",
  //   backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)", //blue
}));
