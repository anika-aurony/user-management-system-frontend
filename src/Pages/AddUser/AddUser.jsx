

const AddUser = () => {

    const handleSubmit= event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const updateUser = {name, email, phone} 
        console.log(updateUser)
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

                if (data.insertedId) {
                    alert('User added')
                }
                form.reset();

            })
    }
    return (
        <div>
            <h1 className="text-2xl text-center font-bold my-4">Add New User</h1>
            <div className="flex justify-center item-center mt-4">
                <form onSubmit={handleSubmit}>
                    <div >
                        <div className="form-control w-full    ">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="User Name" className="input input-bordered w-full max-w-xs"  name="name"/>
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text">User Email</span>
                            </label>
                            <input type="text" placeholder="User Email" className="input input-bordered w-full max-w-xs" name="email" />
                        </div>
                        <div className="form-control w-full mt-4">
                            <label className="label">
                                <span className="label-text">User Phone Number</span>
                            </label>
                            <input type="text" placeholder="User Phone Number" className="input input-bordered w-full max-w-xs" name="phone"/>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddUser;