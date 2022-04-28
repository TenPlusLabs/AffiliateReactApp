import Header from "../../partials/header";
import Nav from "../../partials/nav";
import Greetings from "../../partials/greetings";

import Footer from "../../partials/footer";
import FeesForReceiving from "./feesforreceiving";
import FeesForPayment from "./feesforpayment";
import FeesForWithdrawing from "./feesforwithdrawing";
import FeesForUsingCard from "./feesforusincard";
import OthersFee from "./othersfee";
// import {useState} from "react"
const Pricing = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <div className=" flex-col border shadow-md mx-4 lg:mx-44 my-10 rounded-md py-4 px-1 flex justify-between">
        <div className=" py-3 px-2 border-b flex justify-between flex-grow text-xl text-ntext font-semibold">
         Pricing And Fees
        </div>
        <FeesForReceiving/>
        <FeesForPayment/>
        <FeesForWithdrawing/>
        <FeesForUsingCard/>
        <OthersFee/>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
