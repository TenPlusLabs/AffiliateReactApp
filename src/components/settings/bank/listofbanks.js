import Header from "../../partials/header";
import Nav from "../../partials/nav";
import Greetings from "../../partials/greetings";
import { Link } from "react-router-dom";
import Footer from "../../partials/footer";
// import {useState} from "react"
const ListOfBanks = () => {
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
        <div className=" grid grid-cols-1 md:grid-cols-2  ">
          <div className=" rounded-md shadow-md border flex flex-col  mx-3 my-2 bg-white ">
            <Link to={"/editbanks"}>
              {" "}
              <div className="flex flex-row  justify-between font-bold py-4 space-x-3 px-5">
                <svg className="h-16 w-16 text-ntext" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z"
                  />
                </svg>
                <div className=" flex flex-col justify-between items-center w-full">
                  <div className=" flex flex-row justify-between items-center  border-b-2 w-full">
                    <div className=" flex flex-col text-ntext">
                      <div className=" font-semibold">
                        First Bank of Nigeria<span>|</span>{" "}
                        <span className=" font-bold">NGN</span>
                      </div>
                      <div className=" flex flex-col">
                        <div className=" text-sm font-normal">
                          Account Number
                        </div>
                        <div className=" text-sm font-semibold">
                          T- <span>5592231013</span>
                        </div>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-ntext font-bold text-2xl"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className=" flex flex-row justify-between items-center py-2 w-full ">
                    <div className=" text-sm font-bold text-lprimary">
                      {" "}
                      Approved
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 text-ntext"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className=" rounded-md shadow-md flex flex-col  mx-3 my-2 border-2 border-dashed border-lprimary ">
            <Link to={"/addbanks"}>
              {" "}
              <div className="flex flex-row  justify-between font-bold py-4 space-x-3 px-5">
                <svg
                  className="h-16 w-16 text-lprimary"
                  viewBox="0 0 24 24"
                 
                >
                  <path
                    fill="currentColor"
                    d="M17,14H19V17H22V19H19V22H17V19H14V17H17V14M11.5,1L21,6V8H2V6L11.5,1M16,10H19V12.08L18,12C17.3,12 16.63,12.12 16,12.34V10M2,22V19H12.08C12.27,20.14 12.79,21.17 13.53,22H2M10,10H13V14.68C12.54,15.37 12.22,16.15 12.08,17H10V10M4,10H7V17H4V10Z"
                  />
                </svg>
                <div className=" flex flex-col justify-between items-center w-full">
                  <div className=" flex flex-row justify-between items-center  border-b-2 w-full">
                    <div className=" flex flex-col text-lprimary pb-10">
                      <div className=" font-semibold text-lprimary">
                       Add Bank
                       
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-6 w-6 text-lprimary font-bold text-2xl"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                  <div className=" flex flex-row justify-between items-center py-2 w-full ">
                    <div className=" text-sm font-bold text-lprimary">
                      {" "}
                      You can Add up to 2 Accounts
                    </div>
                  
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListOfBanks;
