import React, { useEffect, useState } from 'react';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div className='mt-4'>
            <button className="btn btn-active btn-primary">Add User</button>

            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>View</td>
                                <td>Edit</td>
                                <td>Delete</td>
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;