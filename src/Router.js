import { BrowserRouter, Route, Routes } from "react-router-dom";
import Gnb from "./components/Gnb";
import HomePage from "./pages/HomePage";
import SharedPage from "./pages/SharedPage";
import FolderPage from "./pages/FolderPage";
import Footer from "./components/Footer";

function Router() {
  return (
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shared" element={<SharedPage />} />
        <Route path="folder" element={<FolderPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
