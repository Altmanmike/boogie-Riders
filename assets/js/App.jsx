import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Profile from "./pages/Profile";
import User from "./pages/User";
import Settings from "./pages/Settings";
import Spot from "./pages/Spot";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Messenger from "./components/Messenger";

const components = {
    Home,
    About,
    Links,    
    Profile,
    User,
    Settings,
    Spot,
};

const App = () => {
    const ComponentName = window.REACT_COMPONENT_NAME || "Home";
    const SpecificComponent = components[ComponentName] || components.Home;    
    const onlineUser = window.APP_USER_DATA || null;
    
    return (
        <>
            <Navbar onlineUser={onlineUser} />
            <SpecificComponent onlineUser={onlineUser} />
            <Messenger />
            <Footer />
        </>
    );
};
export default App;
