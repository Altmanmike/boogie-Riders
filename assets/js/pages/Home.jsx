const Home = ({ onlineUser }) => {
    return (
        <>
            <div className="container mx-auto h-full mb-100">
                <div className="hero p-25 bg-base-200">
                    <div className="hero-content">
                        <img
                            src="https://ibcworldtour.com/wp-content/uploads/2025/08/thumbnail.jpg"
                            className="max-w-sm rounded-lg shadow-2xl"
                        />
                        <div className="max-w-md p-6">
                            <h1 className="text-5xl font-bold">
                                Welcome riders!
                            </h1>
                            <p className="py-3 text-justify">
                                An app to easily connect bodyboarders, access
                                the conditions of our favorite spots in one
                                click and share our current sessions, albums
                                photos and videos instantly!
                            </p>
                            {onlineUser == "null" && (
                                <div>
                                    <a
                                        className="btn btn-primary mr-2"
                                        href="/login"
                                    >
                                        Login
                                    </a>
                                    <a
                                        className="btn btn-neutral"
                                        href="/register"
                                    >
                                        Register
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div>
                    <h1 className="mt-10 text-3xl text-center font-bold normal-case underline decoration-current-500">
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
        </>
    );
};
export default Home;
