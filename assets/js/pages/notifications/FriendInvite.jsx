const FriendInvite = ({lastname, firstname, photo, country}) => {
    return (
        <>
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                        <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                        />
                    </div>
                </div>
                <div className="gap-3">
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                </div>
                <div className="justify-end">
                    <button className="btn btn-sm">Deny</button>
                    <button className="btn btn-sm btn-primary">Accept</button>
                </div>
            </div>
        </>
    );
};
export default FriendInvite;
