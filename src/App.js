import { Button, styled } from "@mui/material";

function App() {
  const MyButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.main,
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "blue",
    },
  }));
  return (
    <div>
      <Button variant="contained">secondary</Button>
      <Button variant="contained" color="secondary">
        secondary
      </Button>
      <MyButton>one</MyButton>
      <MyButton>two</MyButton>
    </div>
  );
}

export default App;
