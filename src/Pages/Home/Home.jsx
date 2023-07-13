import  { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers, removeUser, toggleDeleteSuccess } from '../../features/users/usersSlice';
import { toast } from 'react-hot-toast';

const Home = () => {
    

    const dispatch = useDispatch();
    const {users, deleteSuccess, isLoading} = useSelector((state) => state.users)

    useEffect(() => {
        
        dispatch(getUsers())
    }, [])

    if(isLoading){
        <div>Loading...</div>
    }
    
    useEffect(()=>{
        if(!isLoading && deleteSuccess){
            toast.success("Deleted")
            dispatch(toggleDeleteSuccess())
        }

        
    }, [isLoading, deleteSuccess])

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
                                <td><button onClick={()=> dispatch(removeUser(user._id))} className="btn btn-active btn-primary" >Delete</button></td>
                            </tr>)
                        }
                        
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;