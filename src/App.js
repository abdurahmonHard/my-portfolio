import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./assets/style/global.scss";

// import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
import Blog from "./pages/Blogs/Blog/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/blogs" element={<Blogs />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:id" element={<Blog />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
