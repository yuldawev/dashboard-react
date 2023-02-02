import {
  MdAdd,
  MdDarkMode,
  MdLightMode,
  MdLocalMall,
  MdMenu,
  MdShoppingBag,
  MdShoppingCart,
} from "react-icons/md";
import RecentUpdate from "../components/Notification";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";
import Item from "../components/Item";
import { useConfig } from "../contexts/configContexts";

const RightNavbar = () => {
  const { theme, setTheme, setIsMenuOpen } = useConfig();
  return (
    <div className="right">
      <div className="top">
        <button id="menu-btn" onClick={() => setIsMenuOpen(true)}>
          <MdMenu />
        </button>
        <div className="theme-toggler">
          <span
            className={theme === "light" ? "active" : ""}
            onClick={() => setTheme("light")}
          >
            <MdLightMode />
          </span>
          <span
            className={theme === "dark" ? "active" : ""}
            onClick={() => setTheme("dark")}
          >
            <MdDarkMode />
          </span>
        </div>

        <div className="profile">
          <div className="info">
            <p>
              Hey, <b>Daniel</b>
            </p>
            <small className="text-muted">Admin</small>
          </div>
          <div className="profile-photo">
            <img src={profile1} alt="" />
          </div>
        </div>
      </div>

      <div className="recent-updates">
        <h2>Recent Updates</h2>
        <div className="updates">
          <RecentUpdate
            img={profile2}
            userName="Mike Tyson"
            text="received his order of Night lion tech GPS drone."
            time="  2 Minutes Ago"
          />

          <RecentUpdate
            img={profile3}
            userName="Mike Tyson"
            text="received his order of Night lion tech GPS drone."
            time="  2 Minutes Ago"
          />

          <RecentUpdate
            img={profile4}
            userName="Mike Tyson"
            text="received his order of Night lion tech GPS drone."
            time="  2 Minutes Ago"
          />
        </div>
      </div>

      <div className="sales-analytics">
        <h2>Sales Analytics</h2>

        <Item
          type="online"
          icon={MdShoppingCart}
          text="ONLINE ORDERS"
          time="Last 24 Hours"
          percent={+39}
          number="3849"
        />

        <Item
          type="offline"
          icon={MdLocalMall}
          text="OFFLINE ORDERS"
          time="Last 24 Hours"
          percent={-17}
          number="1100"
        />

        <Item
          type="customer"
          icon={MdPerson}
          text="NEW CUSTOMER"
          time="Last 24 Hours"
          percent={+25}
          number="849"
        />

        <Item type="add-product" icon={MdAdd} text="Add Product" />
      </div>
    </div>
  );
};

export default RightNavbar;
