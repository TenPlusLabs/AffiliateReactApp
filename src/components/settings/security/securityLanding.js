import Header from "../../partials/header";
import Nav from "../../partials/nav";
import Greetings from "../../partials/greetings";

// import { Link } from "react-router-dom";
import Footer from "../../partials/footer";
import Password from "./password";
import SecurityQ from "./securityQuestions";
import TwoStep from "./twostep";
import Trusted from "./trusted";



const Security = () => {

  return (
    <>
      <Header />
      <Nav />

      <Greetings />
        <div class="w-full xl:w-8/12 mb-12 xl:mb-10 px-4 mx-auto mt-24 border rounded-lg  my-4 font-popins">
          <div className="flex flex-row my-5 justify-between  border-b py-2">
        
            <div className=" flex space-x-5 items-center ">
              {" "}
          
              <h1 className=" font-bold text-ntext items-center">
                Security Setting
              </h1>
            </div>
            <div className="flex">
              <div className="border-r-2 mx-2 border-primary"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-ntext"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
          </div>
          
        <Password/>
        <SecurityQ/>
        <TwoStep/>
        <Trusted/>
        </div>
     
      <Footer />
    </>
  );
};
export default Security;
