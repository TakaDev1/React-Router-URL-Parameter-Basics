import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import User from "./pages/User";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <h1>React-Router-URL-Parameter-Basics</h1>
          <Routes>
            <Route path="/:id" element={<User />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
