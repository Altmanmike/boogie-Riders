import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messenger from "../components/Messenger";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto h-[80vh]">
                <div className="hero p-25 bg-base-200">
                    <div className="hero-content text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">
                                Welcome riders!
                            </h1>
                            <p className="py-6">
                                An app to easily connect bodyboarders, access
                                the conditions of our favorite spots in one
                                click and share our current sessions, albums
                                photos and videos instantly!
                            </p>
                            <div>
                                <button className="btn btn-primary mr-2">
                                    Login
                                </button>
                                <button className="btn btn-neutral">
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="mt-20 text-3xl text-center font-bold normal-case underline decoration-current-500">
                        Easy steps!
                    </h1>
                    <div className="flex justify-center items-center h-40">
                        <ul className="steps">
                            <li className="step step-primary">
                                Register in 2sec
                            </li>
                            <li className="step">Update your profile</li>
                            <li className="step">Find spot</li>
                            <li className="step">Add friends</li>
                            <li className="step">Share sessions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Messenger />
            <Footer />
        </>
    );
};
export default Home;
