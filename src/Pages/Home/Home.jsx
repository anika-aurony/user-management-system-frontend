import  { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../features/users/usersSlice';

const Home = () => {
    

    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users)

    useEffect(() => {
        
        dispatch(getUsers())
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