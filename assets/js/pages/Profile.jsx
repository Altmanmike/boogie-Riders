import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Messenger from "../components/Messenger";
import { useState } from "react";

const Profile = () => {    
    const [username, setUsername] = useState("");
    const [about, setAbout] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("United States");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [board, setBoard] = useState("");
    const [fins, setFins] = useState("");
    const [club, setClub] = useState("");
    const [tricks, setTricks] = useState("");
    const [style, setStyle] = useState("");
    const [spots, setSpots] = useState("");
    const [facebook, setFacebook] = useState("");
    const [instagram, setInstagram] = useState("");
    const [youtube, setYoutube] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();        
        const formData = {
            username,
            about,
            firstName,
            lastName,
            email,
            country,
            streetAddress,
            city,
            region,
            postalCode,
            board,
            fins,
            club,
            tricks,
            style,
            spots,
            facebook,
            instagram,
            youtube,
        };
        console.log("Formulaire soumis :", formData);
    };

    return (
        <>
            <Navbar />
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl min-h-screen">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="pt-10 space-y-12">
                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="card-title mt-10">Profile</h2>
                            <p className="mt-1 text-sm/6 text-gray-600">
                                This information will be displayed publicly so
                                be careful what you share.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="username"
                                        className="label input validator"
                                    >
                                        Username
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                                                    boogie-riders.com/
                                                </div>
                                                <input
                                                    id="username"
                                                    name="username"
                                                    type="text"
                                                    placeholder="Bobby"
                                                    value={username}
                                                    onChange={(e) =>
                                                        setUsername(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                    required
                                                    pattern="^[a-zA-Z0-9_]{3,16}$"
                                                    title="Username must be 3-16 alphanumeric characters or underscores."
                                                />
                                            </div>
                                        </div>
                                    </label>
                                    <div className="validator-hint hidden">
                                        Username must be 3-16 alphanumeric
                                        characters or underscores.
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="about"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        About
                                    </label>
                                    <div className="mt-2">
                                        <textarea
                                            id="about"
                                            name="about"
                                            rows={3}
                                            value={about}
                                            onChange={(e) =>
                                                setAbout(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <p className="mt-3 text-sm/6">
                                        Write a few sentences about yourself.
                                    </p>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="photo"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Photo
                                    </label>
                                    <div className="mt-2 flex items-center gap-x-3">
                                        <UserCircleIcon
                                            aria-hidden="true"
                                            className="size-12 text-gray-300"
                                        />
                                        <button
                                            type="button"
                                            className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
                                        >
                                            Change
                                        </button>
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="cover-photo"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Cover photo
                                    </label>
                                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                        <div className="text-center">
                                            <PhotoIcon
                                                aria-hidden="true"
                                                className="mx-auto size-12 text-gray-300"
                                            />
                                            <div className="mt-4 flex text-sm/6 text-gray-600">
                                                <label
                                                    htmlFor="file-upload"
                                                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500"
                                                >
                                                    <span>Upload a file</span>
                                                    <input
                                                        id="file-upload"
                                                        name="file-upload"
                                                        type="file"
                                                        className="sr-only"
                                                    />
                                                </label>
                                                <p className="pl-1">
                                                    or drag and drop
                                                </p>
                                            </div>
                                            <p className="text-xs/5">
                                                PNG, JPG, GIF up to 10MB
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="border-b border-gray-900/10 pb-12">
                            <h2 className="card-title text-base/7 font-semibold">
                                Personal Information
                            </h2>
                            <p className="mt-1 text-sm/6">
                                Use a permanent address where you can receive
                                mail.
                            </p>

                            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="first-name"
                                        className="label input validator text-sm/6 font-medium"
                                    >
                                        First name
                                        <div className="">
                                            <input
                                                id="first-name"
                                                name="first-name"
                                                type="text"
                                                placeholder="Your first name"
                                                autoComplete="given-name"
                                                value={firstName}
                                                onChange={(e) =>
                                                    setFirstName(e.target.value)
                                                }
                                                className="text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                                                required
                                                pattern="^[a-zA-Zà-ÿÀ-Ÿ\s'-]{2,}$"
                                                title="First name must be at least 2 characters and contain only letters, spaces, hyphens, or apostrophes."
                                            />
                                        </div>
                                    </label>
                                    <div className="validator-hint hidden">
                                        First name must be at least 2 characters
                                        and contain only letters, spaces,
                                        hyphens, or apostrophes.
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="label input validator text-sm/6 font-medium"
                                    >
                                        Last name
                                        <div className="">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                placeholder="Your family name"
                                                autoComplete="family-name"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                                className="text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                                                required
                                                pattern="^[a-zA-Zà-ÿÀ-Ÿ\s'-]{2,}$"
                                                title="Last name must be at least 2 characters and contain only letters, spaces, hyphens, or apostrophes."
                                            />
                                        </div>
                                    </label>
                                    <div className="validator-hint hidden">
                                        Last name must be at least 2 characters
                                        and contain only letters, spaces,
                                        hyphens, or apostrophes.
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="board"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Board
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="board"
                                            name="board"
                                            type="text"
                                            placeholder="My board"
                                            value={board}
                                            onChange={(e) =>
                                                setBoard(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="fins"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Fins
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="fins"
                                            name="fins"
                                            type="text"
                                            placeholder="My fins"
                                            value={fins}
                                            onChange={(e) =>
                                                setFins(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="club"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Club
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="club"
                                            name="club"
                                            type="text"
                                            placeholder="Club name"
                                            value={club}
                                            onChange={(e) =>
                                                setClub(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="tricks"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Tricks
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="tricks"
                                            name="tricks"
                                            type="text"
                                            placeholder="Best tricks"
                                            value={tricks}
                                            onChange={(e) =>
                                                setTricks(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="style"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Style
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="style"
                                            name="style"
                                            type="text"
                                            placeholder="Prone or DropKnee"
                                            value={style}
                                            onChange={(e) =>
                                                setStyle(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="spots"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Spots
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="spots"
                                            name="spots"
                                            type="text"
                                            placeholder="Best spots"
                                            value={spots}
                                            onChange={(e) =>
                                                setSpots(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="facebook"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Facebook Profile URL
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="facebook"
                                            name="facebook"
                                            type="text"
                                            placeholder="https://www.facebook.com/xxx"
                                            value={facebook}
                                            onChange={(e) =>
                                                setFacebook(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="instagram"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Instagram Profile URL
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="instagram"
                                            name="instagram"
                                            type="text"
                                            placeholder="https://www.instagram.com/xxx"
                                            value={instagram}
                                            onChange={(e) =>
                                                setInstagram(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="youtube"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        YouTube Channel URL
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="youtube"
                                            name="youtube"
                                            type="text"
                                            placeholder="https://www.youtube.com/xxx"
                                            value={youtube}
                                            onChange={(e) =>
                                                setYoutube(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-400 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="label input validator text-sm/6 font-medium"
                                    >
                                        Email address
                                        <div className="">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                placeholder="mail@site.com"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className="text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                                                required
                                                pattern="^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$"
                                                title="Please enter a valid email address."
                                            />
                                        </div>
                                    </label>
                                    <div className="validator-hint hidden">
                                        Please enter a valid email address.
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="country"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Country
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="country"
                                            name="country"
                                            autoComplete="country-name"
                                            value={country}
                                            onChange={(e) =>
                                                setCountry(e.target.value)
                                            }
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 text-gray-400"
                                        >
                                            <option>Portugal</option>
                                            <option>Australia</option>
                                            <option>Brazil</option>
                                            <option>France</option>
                                            <option>Germany</option>
                                            <option>South Africa</option>
                                            <option>Spain</option>
                                            <option>Mexico</option>
                                            <option>United States</option>
                                            <option>United Kingdoms</option>
                                        </select>
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                                        />
                                    </div>
                                </div>

                                <div className="col-span-full">
                                    <label
                                        htmlFor="street-address"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Street address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="street-address"
                                            name="street-address"
                                            type="text"
                                            placeholder="35 street.."
                                            autoComplete="street-address"
                                            value={streetAddress}
                                            onChange={(e) =>
                                                setStreetAddress(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2 sm:col-start-1">
                                    <label
                                        htmlFor="city"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        City
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="city"
                                            name="city"
                                            type="text"
                                            placeholder="London"
                                            autoComplete="address-level2"
                                            value={city}
                                            onChange={(e) =>
                                                setCity(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="region"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        State / Province
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="region"
                                            name="region"
                                            type="text"
                                            placeholder="New-Jersey"
                                            autoComplete="address-level1"
                                            value={region}
                                            onChange={(e) =>
                                                setRegion(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="postal-code"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        ZIP / Postal code
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="postal-code"
                                            name="postal-code"
                                            type="text"
                                            placeholder="97310"
                                            autoComplete="postal-code"
                                            value={postalCode}
                                            onChange={(e) =>
                                                setPostalCode(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6 pb-10">
                        <button
                            type="button"
                            className="text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
            <Messenger />
            <Footer />
        </>
    );
};
export default Profile;