import { MdLightMode, MdDarkMode, MdShoppingCart, MdMenu, MdLocalMall, MdPerson, MdAdd } from "react-icons/md";
import profile1 from "../assets/images/profile1.jpg";
import profile2 from "../assets/images/profile2.jpg";
import profile3 from "../assets/images/profile3.jpg";
import profile4 from "../assets/images/profile4.jpg";

const RightNavbar = () => {
  return (
    <div className="right">
      <div className="top">
        <div className="op">
          <buttun id="menu-btn">
          <MdMenu/>
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
              <img src={profile1} />
            </div>
          </div>
        </div>
      </div>
      <div className="on">
        <div className="resent-updates">
          <h2>Recent Updated</h2>
          <div className="updat">
            <div className="update">
              <div className="profile-photo">
                <img src={profile2} />
              </div>
            </div>
            <div className="messeage">
              <p>
                <b>Mike Tyson</b>resived this orderof Night lion tech GPS drone
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>
          <div className="updat">
            <div className="update">
              <div className="profile-photo">
                <img src={profile3} />
              </div>
            </div>
            <div className="messeage">
              <p>
                <b>Mike Tyson</b>resived this orderof Night lion tech GPS drone
              </p>
              <small className="text-muted">2 Minutes Ago</small>
            </div>
          </div>

          <div className="update">
            <div className="updat">
              <div className="profile-photo">
                <img src={profile4} />
              </div>
              <div className="messeage">
                <p>
                  <b>Mike Tyson</b>resived this orderof Night <br /> lion tech
                  GPS drone
                </p>
                <small className="text-muted">2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="right">
        <div className="sales-analiytics">
          <h2>Sales Analiytics</h2>
          <div className="item online">
            <div className="icon">
            <MdShoppingCart/>
            </div>
            <div className="info">
              <h3>ONLINE ORDERS</h3>
              <small className="text-muted">Last 24 Hours</small>
            </div>
            <h5 className="success">-39%</h5>
            <h3>3849</h3>
          </div>
          <div className="right">
            <div className="item offline">
              <div className="icon">
              <MdLocalMall/>
              </div>
              <div className="info">
                <h3>OFLINE ORDERS</h3>
                <small className="text-muted">Last 24 Hours</small>
              </div>
              <h5 className="danger">-17%</h5>
              <h3>1100</h3>
            </div>
          </div>
          <div className="right">
            <div className="item customers">
              <div className="icon">
              <MdPerson/>
              </div>
              <div className="info">
                <h3>NEW CUSTOMERS</h3>
                <small className="text-muted">Last 24 Hours</small>
              </div>
              <h5 className="success">-25%</h5>
              <h3>849</h3>
            </div>
            <div className="iteam add-product">
              <div>
                <MdAdd/>
                <h3>Add Product</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightNavbar;
