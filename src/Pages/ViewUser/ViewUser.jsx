import React, { useEffect, useState } from 'react';

const ViewUser = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div>
            <h1>All Users</h1>

            <div className="overflow-x-auto">

                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone number</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td></td>
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ViewUser;