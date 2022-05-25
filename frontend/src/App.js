import { Routes, BrowserRouter, Route } from "react-router-dom";
import "./App.css";

import TopicRegister from "./components/Supervisor/TopicicRegister";
import TopicView from "./components/Supervisor/TopicView";

function App() {
  return (
    <BrowserRouter>
      {/* routes */}

      <Routes>
        <Route path="/topicRegister" element={<TopicRegister />}></Route>
      </Routes>

      <Routes>
        <Route path="/topicView" element={<TopicView />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
