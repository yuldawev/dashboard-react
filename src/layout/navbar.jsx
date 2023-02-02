import { NavLink } from "react-router-dom";
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
  MdSettings,
} from "react-icons/md";
import Logo from "../assets/images/logo.png";
import NavItem from "../components/NavItem";
import { useConfig } from "../contexts/configContexts";

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen } = useConfig();
  return (
    <aside className={isMenuOpen ? "show" : ""}>
      <div className="top">
        <div className="brand">
          <img src={Logo} />
          <h2>
            UNI<span className="danger">VER</span>SAL
          </h2>
        </div>
        <button className="close" onClick={() => setIsMenuOpen(false)}>
          <MdClose/>
        </button>
      </div>
      <div className="sidebar">
        <NavItem icon={MdGridView} title="Dashboard" to="/" />

        <NavItem icon={MdPersonOutline} title="Customers" to="/customer" />

        <NavItem icon={MdReceiptLong} title="Orders" to="/orders" />

        <NavItem icon={MdInsights} title="Analytics" to="/analytics" />

        <NavItem
          icon={MdMailOutline}
          title="Message"
          count="26"
          to="/message"
        />

        <NavItem icon={MdInventory} title="Products" to="/products" />

        <NavItem icon={MdReportGmailerrorred} title="Reports" to="/reports" />

        <NavItem icon={MdSettings} title="Settings" to="/settings" />

        <NavItem icon={MdAdd} title="Add Products" to="/add_product" />

        <NavItem icon={MdLogout} title="Logout" to="/logout" />
      </div>
    </aside>
  );
};

export default Navbar;
