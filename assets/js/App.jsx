import Home from "./pages/Home";
import About from "./pages/About";
import Links from "./pages/Links";
import Profile from "./pages/Profile";
import User from "./pages/User";
import Settings from "./pages/Settings";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Messenger from "./components/Messenger";
import Accessory from "./gears/Accessory";
import Board from "./gears/Board";
import BoardNew from "./gears/BoardNew";
import Fin from "./gears/Fin";
import Leash from "./gears/Leash";
import Wetsuit from "./gears/Wetsuit";
import Article from "./posts/Article";
import Event from "./posts/Event";
import Media from "./posts/Media";
import Session from "./posts/Session";
import Spot from "./posts/Spot";
import Club from "./posts/Club";
import Friends from "./pages/Friends";
import Groups from "./posts/Group";
import ArticlesFeed from "./pages/feeds/ArticlesFeed";
import ClubsFeed from "./pages/feeds/ClubsFeed";
import GroupsFeed from "./pages/feeds/GroupsFeed";
import EventsFeed from "./pages/feeds/EventsFeed";
import SpotsFeed from "./pages/feeds/SpotsFeed";

const components = {
    Home,
    About,
    Links,
    Profile,
    User,
    Settings,
    Accessory,
    Board,
    BoardNew,
    Fin,
    Leash,
    Wetsuit,
    Article,
    Event,
    Media,
    Session,
    Spot,
    Club,
    Friends,
    Groups,
    ArticlesFeed,
    ClubsFeed,
    GroupsFeed,
    EventsFeed,
    SpotsFeed,
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
