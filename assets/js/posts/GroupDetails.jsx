import { useEffect, useState } from "react";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

const GroupDetails = ({
    id,
    name,
    description,
    createdAt,
    updatedAt,
    user,
    members,
    isJoinable,    
}) => {
    const [nm, setNm] = useState(name);
    const [desc, setDesc] = useState(description);
    const [crtdAt, setCrtdAt] = useState(createdAt);
    const [updtdAt, setUpdtdAt] = useState(updatedAt);
    const [usr, setUsr] = useState(user);
    const [mmbrs, setMmbrs] = useState(members);
    const [sJnbl, setSJnbl] = useState(isJoinable);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUpdtdAt(new Date().toISOString());
        const formData = {
            id,
            name: nm,
            description: desc,
            createdAt: crtdAt,
            updatedAt: updtdAt,
            user: usr,
            members: mmbrs,
            isJoinable: sJnbl,
        };
        console.log("Formulaire group soumis :", formData);
    };
    
    useEffect(() => {
        console.log("Composant GroupDetails monté. Props reçues :");
        console.log("Objet user:", user);
        console.log("Liste des amis (user.friends):", user.friends);
        console.log("Liste des amis complète (frnds):", frnds);
    }, [user, frnds]);

    const frnds = user.friends;
    frnds.unshift(user.id);
    const userId = user.id;
    //console.log(frnds);

    // A FINIR
    const handleMultiSelectChange = (e) => {
        if (!e.target || !e.target.selectedOptions) {
            console.error("Event target or options are missing!");
            return;
        }
        //console.log(e.target.selectedOptions);
        const selectedIds = Array.from(e.target.selectedOptions).map((option) =>
            parseInt(option.value, 10)
        );
        const validSelectedIds = selectedIds.filter((id) => !isNaN(id));
        console.log(frnds);
        console.log(selectedIds);
        console.log(validSelectedIds);        
        const selectedMembers = frnds.filter((friend) =>
            validSelectedIds.includes(friend.id)
        );
        setMmbrs(selectedMembers);
    };

    return (
        <>
            <div className="container mx-auto m-10 w-2xl rounded-lg bg-base-200 hover:bg-slate-100 shadow-xl h-full mb-100">
                <form className="mt-20 mx-10" onSubmit={handleSubmit}>
                    <div className="border-b border-gray-900/10 pt-1 pb-12">
                        <h2 className="card-title mt-10">Group profile</h2>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="col-span-full">
                                <label
                                    htmlFor="nm"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="nm"
                                        name="nm"
                                        type="text"
                                        placeholder="Event name"
                                        value={nm}
                                        onChange={(e) => setNm(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the event name"
                                    />
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label
                                    htmlFor="desc"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Description
                                </label>
                                <div className="mt-2">
                                    <textarea
                                        id="desc"
                                        name="desc"
                                        rows={3}
                                        value={desc}
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Write the main content of the article."
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Write the main content of the group.
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="sJnbl"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Joinable ?
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="sJnbl"
                                        name="sJnbl"
                                        value={sJnbl}
                                        onChange={() => setSJnbl(!sJnbl)}
                                        defaultChecked={sJnbl ? true : false}
                                        type="checkbox"
                                        className="toggle toggle-primary"
                                        title="Set joinability of the group"
                                    />
                                </div>
                                <p className="mt-3 text-sm/6">
                                    Set joinability of the group.
                                </p>
                            </div>

                            <div className="sm:col-span-3">
                                <label
                                    htmlFor="mmbrs"
                                    className="label block text-sm/6 font-medium"
                                >
                                    Members
                                </label>
                                {!sJnbl ? (
                                    <ul>
                                        {mmbrs.map((m, key) => (
                                            <li key={key} value={m.id}>
                                                {m.firstname} {m.lastname}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="mmbrs"
                                            name="mmbrs"
                                            value={frnds.map((e) => e)}
                                            onChange={handleMultiSelectChange}
                                            multiple
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select the members"
                                        >
                                            {mmbrs.map((f, key) => (
                                                <option key={key} value={f.id}>
                                                    {f.firstname} {f.lastname}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
                            </div>

                            <div className="col-span-full">
                                <div id="map" className="mx-auto"></div>
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
export default GroupDetails;
