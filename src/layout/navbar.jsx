import {NavLink} from "react-router-dom";
import {
    MdAdd,
    MdClose,
    MdGridView,
    MdInsights,
    MdInventory,
    MdLogout,
    MdMailOutline,
    MdPersonOutline,
    MdReceiptLong,
    MdReportGmailerrorred,
    MdSettings
} from "react-icons/md";
import Logo from "../assets/images/logo.png";
import NavItem from "../components/NavItem";

const Navbar = () => {
    return (
        <aside>
            <div className="top">
                <div className="logo">
                    <img src={Logo} alt="MEGATOR"/>
                    <h2 className="text-muted">
                        MEGA
                        <div className="danger">TOR</div>
                    </h2>
                </div>

                <button className="close">
                    <div><MdClose/></div>
                </button>
            </div>

            <div className="sidebar">
                <NavItem to="/" icon={MdGridView} title="Dashboard"/>

                <NavLink to="/customer">
                    <div><MdPersonOutline/></div>
                    <h3>Customers</h3>
                </NavLink>

                <NavLink to="/orders">
                    <div><MdReceiptLong/></div>
                    <h3>Orders</h3>
                </NavLink>

                <NavLink to="/analytics">
                    <div><MdInsights/></div>
                    <h3>Analytics</h3>
                </NavLink>

                <NavItem to="/message" icon={MdMailOutline} title="Messages" count={26}/>

                <NavLink to="/products">
                    <div><MdInventory/></div>
                    <h3>Products</h3>
                </NavLink>

                <NavLink to="/reports">
                    <div><MdReportGmailerrorred/></div>
                    <h3>Reports</h3>
                </NavLink>

                <NavLink to="/settings">
                    <div><MdSettings/></div>
                    <h3>Settings</h3>
                </NavLink>

                <NavLink to="/add_product">
                    <div><MdAdd/></div>
                    <h3>Add Product</h3>
                </NavLink>

                <div className="logout">
                    <NavLink to="/logout">
                        <div><MdLogout/></div>
                        <h3>Logout</h3>
                    </NavLink>
                </div>
            </div>
        </aside>
    );
};

export default Navbar;
