import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import FileUpload from "./components/admin/FileUpload";
import ListDocuments from "./components/admin/ListDocuments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>

      {/* routes */}
      <Routes>
        <Route path="/templates/add" element={<FileUpload />}></Route>
        <Route path="/templates/list" element={<ListDocuments />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
