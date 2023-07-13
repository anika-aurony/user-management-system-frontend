import  { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/users")
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    return (
        <div className='mt-4'>
            <Link to="/AddUser"><button className="btn btn-active btn-primary">Add New User</button></Link>
            

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
                                <td><Link to="/viewUser"><button className="btn btn-active btn-primary">View</button></Link></td>
                                <td><Link to="/AddUser"><button className="btn btn-active btn-primary">Edit</button></Link></td>
                                <td><button className="btn btn-active btn-primary">Delete</button></td>
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;