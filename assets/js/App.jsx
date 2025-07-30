import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Settings from "./pages/Settings";
import Spot from "./pages/Spot";

const components = {
    Home,
    About,
    Links,
    Login,
    Profile,
    Register,
    Settings,
    Spot,
};

const App = () => {
    const ComponentName = window.REACT_COMPONENT_NAME || "Home";
    const SpecificComponent = components[ComponentName] || components.Home;

    return (
        <>
            <SpecificComponent />
        </>
    );
};
export default App;
