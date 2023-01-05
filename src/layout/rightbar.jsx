import {
  MdAdd,
  MdDarkMode,
  MdLightMode,
  MdLocalMall,
  MdMenu,
  MdPerson,
  MdShoppingCart,
} from "react-icons/md";
import RecentUpdate from "../components/Notification";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";
import Item from "../components/Item";


const RightNavbar = () => {
  return (
    <div className="right">
      <div className="top">
        <div className="op">
          <buttun id="menu-btn">
            <MdMenu />
          </buttun>
          <div className="theme-toggler">
            <div className="active">
              <MdLightMode />
            </div>
            <div>
              <MdDarkMode />
            </div>
          </div>
          <div className="profile">
            <div className="info">
              <p>
                Hey, <b>Daniel</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
          </div>
          <div className="update">
            <div className="profile-photo">
              <img src={profile1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="on">
        <div className="resent-updates">
          <h2>Recent Updated</h2>

          <RecentUpdate
            text="received this order of Night lion tech GPS drone"
            userName="Mike Tyson"
            time="2 Minutes Ago"
            img={profile2}
          />

          <RecentUpdate
            text="received this order of Night lion tech GPS drone"
            userName="Mike Tyson"
            time="2 Minutes Ago"
            img={profile3}
          />

          <RecentUpdate
            text="received this order of Night lion tech GPS drone"
            userName="Mike Tyson"
            time="2 Minutes Ago"
            img={profile4}
          />
        </div>
      </div>

      <div className="right">
        <div className="sales-analiytics">
          <h2>Sales Analiytics</h2>
          

          <Item
          icon="MdShoppingCart"
          name="ONLINE ORDERS"
          text="Last 24 Hours"
          success="-17%"
          number="3849"
          />

          <Item
          icon="MdLocalMall"
          name="OFLINE ORDERS"
          text="Last 24 Hours"
          danger="-17%"
          number="1100"
          />

          <Item
          icon="MdShoppingBag"
          name="OFFLINE ORDERS"
          text="Last 24 Hours"
          success="-17%"
          number="3849"
          />

          <Item
          
          icon="MdAdd"
          gap="Add Product"
          />

          <div className="iteam add-product"></div>
          

         

          
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
