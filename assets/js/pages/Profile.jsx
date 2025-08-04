import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const Profile = () => {
    const [pseudo, setPseudo] = useState("");
    const [about, setAbout] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [board, setBoard] = useState([]);
    const [fins, setFins] = useState([]);
    const [club, setClub] = useState("");
    const [tricks, setTricks] = useState([]);
    const [style, setStyle] = useState("");
    const [spots, setSpots] = useState([]);
    const [facebook, setFacebook] = useState("https://www.facebook.com/");
    const [instagram, setInstagram] = useState("https://www.instagram.com/");
    const [youtube, setYoutube] = useState("https://www.youtube.com/@");

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            pseudo,
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
        //console.log("Formulaire soumis :", formData);
    };

    // Fonction générique pour gérer les changements des selects multiples
    const handleMultiSelectChange = (e, setterFunction) => {
        const selectedOptions = Array.from(e.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setterFunction(selectedOptions);
    };

    return (
        <>
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
                                    <label htmlFor="pseudo" className="label">
                                        Pseudo
                                        <div className="">
                                            <div className="flex items-center">
                                                <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
                                                    (pseudo) &nbsp;
                                                </div>
                                                <input
                                                    id="pseudo"
                                                    name="pseudo"
                                                    type="text"
                                                    required
                                                    placeholder="Bobby"
                                                    value={pseudo}
                                                    onChange={(e) =>
                                                        setPseudo(
                                                            e.target.value
                                                        )
                                                    }
                                                    className="input validator block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                                                    pattern="[A-Za-z][A-Za-z0-9\-_]*"
                                                    minLength="3"
                                                    maxLength="16"
                                                    title="pseudo must be 3-16 alphanumeric characters or underscores."
                                                />
                                            </div>
                                        </div>
                                    </label>
                                    <div className="validator-hint hidden">
                                        pseudo must be 3-16 alphanumeric
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
                                            title="Write a few sentences about yourself."
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
                                        className="label text-sm/6 font-medium"
                                    >
                                        First name
                                        <input
                                            id="first-name"
                                            name="first-name"
                                            type="text"
                                            required
                                            placeholder="Your first name"
                                            autoComplete="given-name"
                                            value={firstName}
                                            onChange={(e) =>
                                                setFirstName(e.target.value)
                                            }
                                            className="input validator text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                                            pattern="[A-Za-z][a-zA-Zà-ÿÀ-Ÿ\s'\-]*"
                                            minLength="2"
                                            maxLength="25"
                                            title="First name must be at least 2 characters and contain only letters, spaces, hyphens, or apostrophes."
                                        />
                                    </label>
                                    <div className="validator-hint hidden">
                                        First name between 2 & 25 characters and
                                        contain only letters, spaces, hyphens,
                                        or apostrophes.
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="last-name"
                                        className="label text-sm/6 font-medium"
                                    >
                                        Last name
                                        <div className="">
                                            <input
                                                id="last-name"
                                                name="last-name"
                                                type="text"
                                                required
                                                placeholder="Your family name"
                                                autoComplete="family-name"
                                                value={lastName}
                                                onChange={(e) =>
                                                    setLastName(e.target.value)
                                                }
                                                className="input validator text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
                                                pattern="[A-Za-z][a-zA-Zà-ÿÀ-Ÿ\s'\-]*"
                                                minLength="2"
                                                maxLength="25"
                                                title="Last name must be at least 2 characters and contain only letters, spaces, hyphens, or apostrophes."
                                            />
                                        </div>
                                    </label>
                                    <div className="validator-hint hidden">
                                        Last name between 2 & 25 characters and
                                        contain only letters, spaces, hyphens,
                                        or apostrophes.
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="board"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Board
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="board"
                                            name="board"
                                            multiple
                                            value={board}
                                            onChange={(e) =>
                                                handleMultiSelectChange(
                                                    e,
                                                    setBoard
                                                )
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-32"
                                            title="Select your board brands"
                                        >
                                            <option value="Pride">Pride</option>
                                            <option value="Science">
                                                Science
                                            </option>
                                            <option value="Sniper">
                                                Sniper
                                            </option>
                                            <option value="NMD">NMD</option>
                                            <option value="Hubboards">
                                                Hubboards
                                            </option>
                                            <option value="MOREY">MOREY</option>
                                            <option value="GT">GT</option>
                                            <option value="No6.">No6.</option>
                                            <option value="QCD">QCD</option>
                                            <option value="VS">VS</option>
                                            <option value="Manta">Manta</option>
                                            <option value="Wave">Wave</option>
                                            <option value="Tribe">Tribe</option>
                                            <option value="Found">Found</option>
                                            <option value="Funkshen">
                                                Funkshen
                                            </option>
                                            <option value="Custom X">
                                                Custom X
                                            </option>
                                            <option value="BZ">BZ</option>
                                            <option value="662">662</option>
                                            <option value="BZ">BZ</option>
                                            <option value="Empire">
                                                Empire
                                            </option>
                                            <option value="Toobs">Toobs</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="fins"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Fins
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="fins"
                                            name="fins"
                                            multiple
                                            value={fins}
                                            onChange={(e) =>
                                                handleMultiSelectChange(
                                                    e,
                                                    setFins
                                                )
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-32"
                                            title="Select your fin brands"
                                        >
                                            <option value="Gyroll">
                                                Gyroll
                                            </option>
                                            <option value="Limited Edition">
                                                Limited Edition
                                            </option>
                                            <option value="Viper Vector">
                                                Viper Vector
                                            </option>
                                            <option value="MS Viper">
                                                MS Viper
                                            </option>
                                            <option value="Churchill Makapuu">
                                                Churchill Makapuu
                                            </option>
                                            <option value="Ally">Ally</option>
                                            <option value="ERS4">ERS4</option>

                                            <option value="POD">POD</option>
                                            <option value="Air Hubb">
                                                Air Hubb
                                            </option>
                                            <option value="NMD">NMD</option>
                                            <option value="Yucca">Yucca</option>
                                            <option value="Hydro">Hydro</option>
                                            <option value="GT Fins">
                                                GT Fins
                                            </option>
                                            <option value="Da Fins">
                                                Da Fins
                                            </option>
                                            <option value="H2Odyssey">
                                                H2Odyssey
                                            </option>
                                            <option value="DMC">DMC</option>
                                            <option value="Tribe">Tribe</option>
                                        </select>
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
                                            title="Insert your club name"
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
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="tricks"
                                            name="tricks"
                                            value={tricks}
                                            onChange={(e) =>
                                                handleMultiSelectChange(
                                                    e,
                                                    setTricks
                                                )
                                            }
                                            multiple
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select your best tricks"
                                        >
                                            <option value="ARS">ARS</option>
                                            <option value="Back Flip">
                                                Back Flip
                                            </option>
                                            <option value="El Rollo">
                                                El Rollo
                                            </option>
                                            <option value="El Rollo DK">
                                                El Rollo DK
                                            </option>
                                            <option value="Aerial DK">
                                                Aerial DK
                                            </option>
                                            <option value="Invert Air">
                                                Invert Air
                                            </option>
                                            <option value="360° Spin Air">
                                                360° Spin Air
                                            </option>
                                            <option value="Reverse Spin Air">
                                                Reverse Spin Air
                                            </option>
                                            <option value="360° Spin">
                                                360° Spin
                                            </option>
                                            <option value="Reverse Spin">
                                                Reverse Spin
                                            </option>
                                            <option value="Cut Back">
                                                Cut Back
                                            </option>
                                            <option value="360° DK">
                                                360° DK
                                            </option>
                                            <option value="Reverse DK">
                                                Reverse DK
                                            </option>
                                            <option value="Cut Back DK">
                                                Cut Back DK
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="style"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Style
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="style"
                                            name="style"
                                            type="text"
                                            placeholder="Prone or DropKnee"
                                            value={style}
                                            onChange={(e) =>
                                                setStyle(e.target.value)
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select your style"
                                        >
                                            <option>
                                                Prone/DropKnee 100/0
                                            </option>
                                            <option>
                                                Prone/DropKnee 75/25
                                            </option>
                                            <option>
                                                Prone/DropKnee 50/50
                                            </option>
                                            <option>
                                                Prone/DropKnee 25/75
                                            </option>
                                            <option>
                                                Prone/DropKnee 0/100
                                            </option>
                                        </select>
                                    </div>
                                </div>

                                <div className="sm:col-span-3">
                                    <label
                                        htmlFor="spots"
                                        className="label block text-sm/6 font-medium"
                                    >
                                        Spots
                                    </label>
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="spots"
                                            name="spots"
                                            multiple
                                            value={spots}
                                            onChange={(e) =>
                                                handleMultiSelectChange(
                                                    e,
                                                    setSpots
                                                )
                                            }
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 h-32"
                                            title="Select your favorite spots"
                                        >
                                            <option value="Pipeline">
                                                Pipeline
                                            </option>
                                            <option value="Teahupo'o">
                                                Teahupo'o
                                            </option>
                                            <option value="Nazare">
                                                Nazare
                                            </option>
                                            <option value="The Wedge">
                                                The Wedge
                                            </option>
                                            <option value="The Box">
                                                The Box
                                            </option>
                                            <option value="El Fronton">
                                                El Fronton
                                            </option>
                                            <option value="Mundaka">
                                                Mundaka
                                            </option>
                                            <option value="Puerto Escondido">
                                                Puerto Escondido
                                            </option>
                                            <option value="Shark Island">
                                                Shark Island
                                            </option>
                                        </select>
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
                                            type="url"
                                            required
                                            placeholder="https://www.facebook.com/xxx"
                                            value={facebook}
                                            onChange={(e) =>
                                                setFacebook(e.target.value)
                                            }
                                            pattern="^(https?://)?(www\.)?[a-zA-Z0-9\-]+?\.[a-zA-Z]{2,4}\/[a-zA-Z0-9]{3,20}$"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be valid URL"
                                        />
                                        <p className="validator-hint">
                                            Must be valid URL
                                        </p>
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
                                            type="url"
                                            required
                                            placeholder="https://www.instagram.com/xxx"
                                            value={instagram}
                                            onChange={(e) =>
                                                setInstagram(e.target.value)
                                            }
                                            pattern="^(https?://)?(www\.)?[a-zA-Z0-9\-]+?\.[a-zA-Z]{2,4}\/[a-zA-Z0-9]{3,20}$"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be valid URL"
                                        />
                                        <p className="validator-hint">
                                            Must be valid URL
                                        </p>
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
                                            type="url"
                                            required
                                            placeholder="https://www.youtube.com/xxx"
                                            value={youtube}
                                            onChange={(e) =>
                                                setYoutube(e.target.value)
                                            }
                                            pattern="^(https?://)?(www\.)?[a-zA-Z0-9\-]+?\.[a-zA-Z]{2,4}\/[a-zA-Z0-9]{3,20}$"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be valid URL"
                                        />
                                        <p className="validator-hint">
                                            Must be valid URL
                                        </p>
                                    </div>
                                </div>

                                <div className="sm:col-span-4">
                                    <label
                                        htmlFor="email"
                                        className="label text-sm/6 font-medium"
                                    >
                                        Email address
                                        <div className="">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                placeholder="mail@site.com"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                className="input validator text-base text-gray-900 placeholder:text-gray-400 sm:text-sm/6"
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
                                            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select your country"
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
                                            pattern="[a-zA-Z0-9\s\-]*"
                                            minLength="6"
                                            maxLength="50"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be at least 6 letters with digits"
                                        />
                                        <div className="validator-hint hidden">
                                            Must be at least 6 letters with
                                            digits.
                                        </div>
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
                                            pattern="[a-zA-Z\s\-]*"
                                            minLength="2"
                                            maxLength="30"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be at least 2 letters"
                                        />
                                        <div className="validator-hint hidden">
                                            Must be at least 2 letters and no
                                            numbers.
                                        </div>
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
                                            pattern="[a-zA-Z\s\-]*"
                                            minLength="3"
                                            maxLength="25"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be at least 3 letters"
                                        />
                                        <div className="validator-hint hidden">
                                            Must be at least 3 letters and no
                                            numbers.
                                        </div>
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
                                            pattern="(?=.*[0-9])[a-zA-Z0-9\s\-]*"
                                            minLength="3"
                                            maxLength="15"
                                            className="input validator block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Must be at least 3 letters with digits"
                                        />
                                        <div className="validator-hint hidden">
                                            Must be at least 3 letters with
                                            digits.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6 pb-10">
                        <a
                            href="/"
                            className="btn text-sm/6 font-semibold text-gray-900"
                        >
                            Cancel
                        </a>
                        <button
                            type="submit"
                            onSubmit={handleSubmit}
                            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};
export default Profile;