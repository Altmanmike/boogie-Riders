import { useEffect, useState } from "react";
import instance from "../axiosConfig";

const GroupNew = ({ onlineUser }) => {

    const [membersUserList, setMembersUserList] = useState([]);
    const [selectedMembers, setSelectedMembers] = useState([]);    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [nm, setNm] = useState("");
    const [desc, setDesc] = useState("");
    const [crtdAt, setCrtdAt] = useState("");
    const [updtdAt, setUpdtdAt] = useState("");
    const [usr, setUsr] = useState();
    //const [mmbrs, setMmbrs] = useState(members);
    const [sJnbl, setSJnbl] = useState(true);

    const fetchData = async (fct, endPoint) => {
        setLoading(true);
        setError(null);
        try {
            const response = await instance.get(endPoint);
            const data = response.data.member;
            fct(data);
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const userId = parseInt(onlineUser.substring(1, 2));

    const postData = async (endPoint) => {
        setLoading(true);
        setError(null);
        try {
            await instance
                .post(endPoint, {
                    name: nm,
                    description: desc,
                    user: `/api/users/${userId}`,
                    members: selectedMembers.map((m) => `/api/users/${m.id}`),
                    isJoinable: sJnbl,
                })
                .then(function (response) {
                    console.log(response);
                });
        } catch (error) {
            console.error(error);
            setError(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            nm,
            desc,            
            usr,
            selectedMembers,
            sJnbl,
        };
        console.log("Formulaire group soumis :", formData);
        postData(groupNewEndPoint);
    };

    const handleMultiSelectChangeBis = (e, setterFunction, sourceList = []) => {
        const selectedValues = Array.from(e.target.selectedOptions).map(
            (option) => parseInt(option.value)
        );
        const selectedObjects = sourceList.filter((item) =>
            selectedValues.includes(item.id)
        );
        setterFunction(selectedObjects);
    };
   
    const membersUserEndPoint = "/users?page=1&user=" + userId; // on cherche les friends
    const groupNewEndPoint = "/groups";

    useEffect(() => {
        setUsr(`/api/users/${userId}`);
        fetchData(setMembersUserList, membersUserEndPoint);        
    }, []);

    const members = membersUserList;

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
                                        placeholder="Group name"
                                        onChange={(e) => setNm(e.target.value)}
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Insert the group name"
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
                                        onChange={(e) =>
                                            setDesc(e.target.value)
                                        }
                                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                        title="Write the main content of the group."
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
                                        {members.map((m, key) => (
                                            <li key={key} value={m.id}>
                                                {m.firstname} {m.lastname}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <div className="mt-2 grid grid-cols-1">
                                        <select
                                            id="membersUserList"
                                            name="membersUserList"
                                            value={selectedMembers.map(
                                                (m) => m.id
                                            )}
                                            onChange={(e) =>
                                                handleMultiSelectChangeBis(
                                                    e,
                                                    setSelectedMembers,
                                                    members
                                                )
                                            }
                                            multiple
                                            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                            title="Select the members for the group"
                                        >
                                            {members.map((f, key) => (
                                                <option key={key} value={f.id}>
                                                    {f.firstname} {f.lastname}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                )}
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
export default GroupNew;
