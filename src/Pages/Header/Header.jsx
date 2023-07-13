
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>

            
            <div className="navbar bg-primary text-[white]">
                <div className="flex-1">
                <Link to="/"><a className="btn btn-ghost normal-case text-xl text-center ">User Management System</a></Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        
                        <li><Link to="/"><a>Home</a></Link></li>
                        <li><Link to="/addUser"><a>Add New User</a></Link></li>
                        <li><Link to="/viewUser"><a>View All Users</a></Link></li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Header;