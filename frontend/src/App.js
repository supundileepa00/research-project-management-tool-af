import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import TopicRegister from "./components/Supervisor/TopicicRegister";

function App() {
  return (
    <BrowserRouter>
      {/* routes */}

      <Routes>
        <Route path="/topicRegister" element={<TopicRegister />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
