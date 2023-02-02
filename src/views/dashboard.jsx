import {Container} from "react-bootstrap";
import Insights from "../components/insights";
import {MdAnalytics, MdStackedLineChart} from "react-icons/md"

const Dashboard = () => {
    return (
        <Container>
        <main>
        <h1>Dashboard</h1>

        <div className="date">
            <input type="date" name="" id=""/>
        </div>

        <div className="insights">
           
        <Insights
        type="sales"
        icon={MdAnalytics}
        text="Total Sales"
        number="$25,024"
        percent={81}
        time="Last 24 Hours"
        />

        <Insights
        type="expenses"
        icon={MdAnalytics}
        text="Total Sales"
        number="$25,024"
        percent={62}
        time="Last 24 Hours"
        />

        <Insights
        type="income"
        icon={MdStackedLineChart}
        text="Total Sales"
        number="$10,024"
        percent={44}
        time="Last 24 Hours"
        />
        </div>

        <div className="recent-orders">
            <h2>Recent Orders</h2>
            <table>
                <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Number</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th></th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td>Pending</td>
                    <td className="primary">Detail</td>
                </tr>
                <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td>Pending</td>
                    <td className="primary">Detail</td>
                </tr>
                <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td>Pending</td>
                    <td className="primary">Detail</td>
                </tr>
                <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td>Pending</td>
                    <td className="primary">Detail</td>
                </tr>
                <tr>
                    <td>Foldable Mini Drone</td>
                    <td>85631</td>
                    <td>Due</td>
                    <td>Pending</td>
                    <td className="primary">Detail</td>
                </tr>
                </tbody>
            </table>
            <a href="#">Show All</a>
        </div>
    </main>
        </Container>
    );
};

export default Dashboard;
