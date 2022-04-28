import Home from "./components/landing/home";
import Notification from "./components/notifications/notification";
import Transaction from "./components/Transactions/alltransactions";
import Refer from "./components/refer/refer";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Withdrawal from "./components/withdrawal/withdrawal";
import Report from "./components/report/report";
import Letter from "./components/report/leter";
import Monthly from "./components/report/monthly";
import Account from "./components/report/account";
import Products from "./components/products/landing";
import SingleProduct from "./components/products/singleproduct";
import PromoteSingle from "./components/products/promoteSingle";
import Linkss from "./components/products/links";
import Bank from "./components/settings/bank/banklanding";
import ListOfBanks from "./components/settings/bank/listofbanks";
import AddBanks from "./components/settings/bank/addbanks";
import Profile from "./components/settings/profile/productlanding";
import Security from "./components/settings/security/securityLanding";
import Pricing from "./components/help/pricing/pricingLanding";
import HowToVids from "./components/help/howto/howtoLanding";
import F404 from "./components/404";
import EditBanks from "./components/settings/bank/editbanks";

function App() {
  
  return (
    <Router>
    
      <Switch>
        <Route exact path={"/"}>
         <Home/>
        </Route>
        <Route exact path={"/notification"}>
         <Notification/>
        </Route>
        <Route exact path={"/transactions"}>
         <Transaction/>
        </Route>
        <Route exact path={"/refer"}>
         <Refer/>
        </Route>
        <Route exact path={"/withdrawal"}>
          <Withdrawal/>
        </Route>
        <Route exact path={"/report"}>
          <Report/>
        </Route>
        <Route exact path={"/letter"}>
          <Letter/>
        </Route>
        <Route exact path={"/monthly"}>
          <Monthly/>
        </Route>
        <Route exact path={"/account"}>
          <Account/>
        </Route>
        <Route exact path={"/product"}>
         <Products/>
        </Route>
        <Route exact path={"/singleproduct"}>
         <SingleProduct/>
        </Route>
        <Route exact path={"/promotesingle"}>
         <PromoteSingle/>
        </Route>
        <Route exact path={"/links"}>
         <Linkss/>
        </Route>
        <Route exact path={"/bank"}>
         <Bank/>
        </Route>
        <Route exact path={"/listofbanks"}>
         <ListOfBanks/>
        </Route>
        <Route exact path={"/addbanks"}>
         <AddBanks/>
        </Route>
        <Route exact path={"/editbanks"}>
         <EditBanks/>
        </Route>
        <Route exact path={"/profile"}>
         <Profile/>
        </Route>
        <Route exact path={"/security"}>
         <Security/>
        </Route>
        <Route exact path={"/pricing"}>
         <Pricing/>
        </Route>
        <Route exact path={"/howto"}>
         <HowToVids/>
        </Route>
        <Route exact path={"*"}>
         <F404/>
        </Route>

        
      </Switch>
   </Router >
    );
}

export default App;
