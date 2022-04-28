import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
import { Link } from "react-router-dom";
import Footer from "../partials/footer";
// import {useState} from "react"
const Report = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <div className=" flex-col border shadow-md mx-4 lg:mx-44 my-10 rounded-md py-4 px-1 flex justify-between bg-white">
        <div className=" py-3 px-2 border-b flex uppercase font-semibold justify-between flex-grow text-2xl text-ntext">
         Reports
        </div>
        <div className=" grid-cols-1 grid md:grid-cols-3  ">
        <div className=" rounded-md shadow-md hover:border-ntext border flex flex-grow flex-col mx-3 px-4 py-4 my-2 ">
            <div className=" flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ntext "
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
            <Link to={"/account"}>     <div className="flex justify-center flex-col items-center font-bold">
              <svg className="h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"
                />
              </svg>
              <div className=" text-base text-ntext">Account Statement</div>
            </div></Link>
          </div>
          <div className=" rounded-md shadow-md border hover:border-ntext flex flex-grow flex-col mx-3 px-4 py-4 my-2 ">
            <div className=" flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ntext "
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
           
            <Link to={"/monthly"}>  <div className="flex justify-center flex-col items-center font-bold">
              <svg className=" h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7,12H9V14H7V12M21,6V20A2,2 0 0,1 19,22H5C3.89,22 3,21.1 3,20V6A2,2 0 0,1 5,4H6V2H8V4H16V2H18V4H19A2,2 0 0,1 21,6M5,8H19V6H5V8M19,20V10H5V20H19M15,14V12H17V14H15M11,14V12H13V14H11M7,16H9V18H7V16M15,18V16H17V18H15M11,18V16H13V18H11Z"
                />
              </svg>
              <div className=" text-base text-ntext">Monthly Statement</div>
            </div></Link>
          </div>
          <div className=" rounded-md shadow-md border hover:border-ntext flex flex-grow flex-col mx-3 px-4 py-4 my-2 ">
            <div className=" flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ntext "
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
           <Link to={"/letter"}> <div className="flex justify-center flex-col items-center font-bold">
              <svg className="h-10 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z"
                />
              </svg>
              <div className=" text-base text-ntext">
                Letter Of Good Standing
              </div>
            </div></Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Report;
