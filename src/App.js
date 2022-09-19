import { Button, styled } from "@mui/material";

function App() {
  const MyButton = styled(Button)({
    backgroundColor: "red",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "blue",
    },
  });
  return (
    <div>
      <MyButton>one</MyButton>
      <MyButton>two</MyButton>
    </div>
  );
}

export default App;
