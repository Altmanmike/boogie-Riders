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
import AccessoriesFeed from "./pages/feeds/AccessoriesFeed";
import AllFeed from "./pages/feeds/AllFeed";
import ArticlesFeed from "./pages/feeds/ArticlesFeed";
import BoardsFeed from "./pages/feeds/BoardsFeed";
import ClubsFeed from "./pages/feeds/ClubsFeed";
import EventsFeed from "./pages/feeds/EventsFeed";
import FinsFeed from "./pages/feeds/FinsFeed";
import LeashesFeed from "./pages/feeds/LeashesFeed";
import MediasFeed from "./pages/feeds/MediasFeed";
import SessionsFeed from "./pages/feeds/SessionsFeed";
import SpotsFeed from "./pages/feeds/SpotsFeed";
import WetsuitsFeed from "./pages/feeds/WetsuitsFeed";

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
    AccessoriesFeed,
    AllFeed,
    ArticlesFeed,
    BoardsFeed,
    ClubsFeed,
    EventsFeed,
    FinsFeed,
    LeashesFeed,
    MediasFeed,
    SessionsFeed,
    SpotsFeed,
    WetsuitsFeed,    
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
