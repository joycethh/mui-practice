import Note from "./pages/Note";
import Create from "./pages/Create";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Note />} />
        <Route exact path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
