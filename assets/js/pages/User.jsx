import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messenger from "../components/Messenger";

const User = ({ user = {} }) => {    
    const {
        username = "BobbyBoogie",
        about = "Passionate bodyboarder always chasing the next barrel. Love to explore new spots and connect with fellow riders.",
        firstName = "Bobby",
        lastName = "Brown",
        email = "bobby.brown@example.com",
        country = "Australia",
        streetAddress = "123 Ocean Drive",
        city = "Gold Coast",
        region = "Queensland",
        postalCode = "4217",
        board = "Science Pocket, 41.5",
        fins = "Viper Vector",
        club = "Gold Coast Bodyboard Club",
        tricks = "El Rollo, Invert, ARS",
        style = "Prone",
        spots = "Snapper Rocks, Burleigh Heads",
        facebook = "https://www.facebook.com/bobby.b",
        instagram = "https://www.instagram.com/bobby_boogie",
        youtube = "https://www.youtube.com/bobbyboogierides",        
        coverPhoto = "https://www.sports.gouv.fr/sites/default/files/2022-08/bodyboard-ffsurf-wecreative-jpg-490.jpg",
        avatarPhoto = "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp",
    } = user;

    return (
        <>
            <Navbar />
            <div className="container mx-auto m-10 w-6xl rounded-lg bg-base-200 hover:bg-base-300 shadow-xl min-h-screen pb-8">
                {coverPhoto ? (
                    <figure className="relative h-48 sm:h-64 overflow-hidden rounded-t-lg">
                        <img
                            src={coverPhoto}
                            alt="Cover"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-8 left-8 transform translate-y-1/2">
                            <div className="avatar">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        src={avatarPhoto}
                                        alt="User Avatar"
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </figure>
                ) : (
                    <div className="relative h-48 sm:h-64 bg-gray-300 flex items-center justify-center rounded-t-lg">
                        <PhotoIcon className="size-24 text-gray-500" />
                        <div className="absolute bottom-0 left-8 transform translate-y-1/2">
                            <div className="avatar">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <UserCircleIcon className="w-full h-full text-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="card-body pt-6 sm:pt-10">
                    {" "}
                    <h2 className="card-title text-2xl mb-4">
                        Profile Information
                    </h2>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">
                            Public Profile
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Username
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    boogie-riders.com/{username}
                                </p>
                            </div>
                            <div className="col-span-full">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        About Me
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300 min-h-[80px]">
                                    {about}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">
                            Personal Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        First Name
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {firstName}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Last Name
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {lastName}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Email Address
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {email}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Country
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {country}
                                </p>
                            </div>
                            <div className="col-span-full">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Street Address
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {streetAddress}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        City
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {city}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        State / Province
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {region}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        ZIP / Postal Code
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {postalCode}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-3">
                            Bodyboarding Details
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Board
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {board}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Fins
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {fins}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Club
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {club}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Favorite Tricks
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {tricks}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Style
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {style}
                                </p>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Best Spots
                                    </span>
                                </label>
                                <p className="text-base-content text-lg p-2 rounded-md bg-base-300">
                                    {spots}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-3">
                            Social Media
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Facebook
                                    </span>
                                </label>
                                <a
                                    href={facebook}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-primary text-lg p-2 rounded-md bg-base-300 block"
                                >
                                    {facebook}
                                </a>
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        Instagram
                                    </span>
                                </label>
                                <a
                                    href={instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-primary text-lg p-2 rounded-md bg-base-300 block"
                                >
                                    {instagram}
                                </a>
                            </div>
                            <div className="col-span-full">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">
                                        YouTube
                                    </span>
                                </label>
                                <a
                                    href={youtube}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link link-primary text-lg p-2 rounded-md bg-base-300 block"
                                >
                                    {youtube}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Messenger />
            <Footer />
        </>
    );
};

export default User;
