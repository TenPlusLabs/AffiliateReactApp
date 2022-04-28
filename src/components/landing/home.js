import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
import Affiliate from "./affiliate";
import Footer from "../partials/footer";
import Charts from "./charts";
import Transaction from "./transaction";
import ColumnChart from "./chart2";

const Home = () => {
    return ( <>
        <Header/>
        <Nav/>
        <Greetings/>
        <Affiliate/>
        <Charts/>
        <Transaction/>
        <ColumnChart/>
        <Footer/>
    </> );
}
 
export default Home;