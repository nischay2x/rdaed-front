import Layout from "./components/layout";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Upload, { UploadList } from "./pages/Upload";
import "./styles.css";
import PropertyList from "./pages/Properties/list";
import RejectedPropertyList from "./pages/Properties/rejected";
import DocsList from "./pages/Docs/list";
import RejectedDocsList from "./pages/Docs/rejected";
import BidList from "./pages/Services/bidList";

export default function App() {
  return (
    <Routes>
      <Route path="" element={<Layout><Home /></Layout>}/>

      <Route path="properties/list" element={<Layout><PropertyList /></Layout>}/>
      <Route path="properties/rejected" element={<Layout><RejectedPropertyList/></Layout>}/>

      <Route path="docs/received" element={<Layout><DocsList /></Layout>}/>
      <Route path="docs/rejected" element={<Layout><RejectedDocsList /></Layout>}/>

      <Route path="services/bid" element={<Layout><BidList/></Layout>}/>
      {/* <Route path="properties/list" element={<Layout><PropertyList /></Layout>}/> */}
    </Routes>
  );
}
