import  { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../features/users/usersSlice';

const ViewUser = () => {
    

    const dispatch = useDispatch();
    const {users} = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUsers())
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