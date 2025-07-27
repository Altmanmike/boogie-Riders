import "../styles/app.css";

function Main() {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Welcome riders!</h1>
                    <p className="py-6">
                        An app to easily connect bodyboarders, access the
                        conditions of our favorite spots in one click and share
                        our current sessions, albums photos and videos instantly!
                    </p>
                    <div>
                        <button className="btn btn-primary mr-2">Login</button>
                        <button className="btn btn-neutral">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;