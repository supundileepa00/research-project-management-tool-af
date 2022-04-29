import logo from "./logo.svg";
import "./App.css";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import FileUpload from "./components/admin/FileUpload";
import ListDocuments from "./components/admin/ListDocuments";
import AdminHome from "./components/admin/AdminHome";
import AddTemplate from "./components/admin/templates/AddTemplate";
import ViewTemplates from "./components/admin/templates/ViewTemplates";

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* routes */}
        <Routes>
          <Route path="/templates/add" element={<FileUpload />}></Route>
          <Route path="/templates/list" element={<ListDocuments />}></Route>
          <Route path="/admin/home" element={<AdminHome />}></Route>
          <Route path="/addTemplate" element={<AddTemplate />}></Route>
          <Route path="/viewTemplates" element={<ViewTemplates />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
