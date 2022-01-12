import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Profile from "./pages/Profile";
import BlogPage from "./pages/BlogPage";

function App() {
  return (
    <Routes>
      <Route path="/" exact="true" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/blogpage" element={<BlogPage />} />
    </Routes>
  );
}

export default App;
