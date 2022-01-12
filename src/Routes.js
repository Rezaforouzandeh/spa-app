import AboutUsPage from "./pages/AboutUsPage";
import HomePage from "./pages/HomePage";
import Profile from "./pages/Profile";

const routes = [
    {path : "/" , component : HomePage, exact : true},
    {path : "/aboute-us" , component : AboutUsPage},
    {path : "/profile" , component : Profile},
]

export default routes;
