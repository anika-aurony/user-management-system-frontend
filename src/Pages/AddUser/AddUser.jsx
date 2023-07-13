import { useDispatch, useSelector } from "react-redux";
import { addUser, togglePostSuccess } from "../../features/users/usersSlice";
import { useEffect } from "react";
import {  toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";


const AddUser = () => {
    const navigate = useNavigate();
    const user = useLoaderData();

    const { postSuccess } = useSelector(state => state.users)
    const dispatch = useDispatch();


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const updateUser = { name, email, phone }
        console.log(updateUser)
        if (user) {
            console.log(user.name)
            fetch(`https://user-management-system-assignment-backend.vercel.app/users/${user._id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateUser)
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data)
                if(data.modifiedCount>0){
                    toast.success("User Updated")
                    navigate("/")
                }
            })
        }
        else {
            dispatch(addUser(updateUser))
            navigate("/")
        }

    }

    useEffect(() => {
        if (postSuccess) {
            toast.success("User Added");
            dispatch(togglePostSuccess())
        }
    }, [postSuccess])
    return (
        <div>
            <h1 className="text-2xl text-center font-semibold my-4">Add / Update New User</h1>
            <div className="flex justify-center item-center my-4">
                <form onSubmit={handleSubmit}>
                    <div >
                        <div className="form-control w-full    ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" defaultValue={user ? user.name : ""} placeholder="User Name" className="input input-bordered w-full max-w-xs" name="name" />
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" defaultValue={user ? user.email : ''} placeholder="User Email" className="input input-bordered w-full max-w-xs" name="email" />
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text">User Phone Number</span>
                            </label>
                            <input type="number" defaultValue={user ? user.phone : ''} placeholder="Phone Number" className="input input-bordered w-full max-w-xs" name="phone" />
                        </div>
                        <div className="form-control mt-6 mb-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;