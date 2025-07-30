import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messenger from "../components/Messenger";

const Register = () => {
    return (
        <>
            <Navbar />
            <div className="container mx-auto my-10 w-100 h-[65vh]">
                <div className="card w-full max-w-sm bg-base-200 hover:bg-slate-100 shadow">
                    <div className="card-body">
                        <h2 className="card-title">Register</h2>

                        <form>
                            <div className="form-control mt-2">
                                <label className="label">Email</label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control mt-2">
                                <label className="label">Password</label>
                                <input
                                    type="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <div className="form-control mt-2">
                                <label className="label">
                                    Confirm password
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary mt-4"
                            >
                                Register
                            </button>
                        </form>

                        <p className="text-sm mt-2">
                            Already register ?{" "}
                            <a href="/login" className="link link-primary">
                                Login
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <Messenger />
            <Footer />
        </>
    );
};
export default Register;
