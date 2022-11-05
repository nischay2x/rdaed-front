import Layout from "./components/layout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Upload, { UploadList } from "./pages/Upload";
import "./styles.css";

export default function App() {
  return (
    <Routes>
      <Route
        path=""
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
    </Routes>
  );
}
