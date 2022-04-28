import Header from "../../partials/header";
import Nav from "../../partials/nav";
import Greetings from "../../partials/greetings";
import { Link } from "react-router-dom";
import Footer from "../../partials/footer";
// import {useState} from "react"
const Bank = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <div className=" flex-col border shadow-md mx-4 lg:mx-44 my-10 rounded-md py-4 px-1 flex justify-between">
        <div className=" py-3 px-2 border-b flex justify-between flex-grow text-xl text-ntext font-semibold">
          Bank Accounts
        </div>
        <div className=" grid m-2 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 ">
          <div className=" rounded-md shadow-md border flex flex-grow flex-col mx-3 px-4 py-4 my-2 bg-white ">
            <div className=" flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ntext"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <Link to={"/listofbanks"}>
              {" "}
              <div className="flex justify-center flex-col items-center font-bold">
                <svg className="h-16 w-16 text-ntext" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"
                  />
                </svg>
                <div className=" text-lg text-ntext">Bank Account for Withdrawal</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Bank;
