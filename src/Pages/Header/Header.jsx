
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            
            <div className="navbar bg-primary text-primary-content">
                <Link to= "/"><a className="btn btn-ghost normal-case text-xl text-center ">User Management System</a></Link>
                
            </div>
        </div>
    );
};

export default Header;