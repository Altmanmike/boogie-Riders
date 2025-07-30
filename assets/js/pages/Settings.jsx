import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messenger from "../components/Messenger";

const Settings = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto h-[80vh]">Settings</div>
            <Messenger />
            <Footer />
        </>
    );
};
export default Settings;
