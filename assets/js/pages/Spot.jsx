import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messenger from "../components/Messenger";

const Spot = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto h-[80vh]">Spot</div>
            <Messenger />
            <Footer />
        </>
    );
};
export default Spot;
