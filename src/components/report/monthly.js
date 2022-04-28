import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
import Footer from "../partials/footer";
import { useState } from "react";

const Monthly = () => {
  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <form action="">
        <div class="w-full xl:w-8/12 mb-12 xl:mb-10 px-4 mx-auto mt-24 border rounded-lg  my-4 font-popins">
          <div className="flex flex-row my-5 justify-between ">
            <div className=" flex space-x-5 items-center self-center"></div>
            <div className=" flex space-x-5 items-center self-center">
              {" "}
              <svg className="h-6 w-6 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M8,12H16V14H8V12M10,20H6V4H13V9H18V12.1L20,10.1V8L14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H10V20M8,18H12.1L13,17.1V16H8V18M20.2,13C20.3,13 20.5,13.1 20.6,13.2L21.9,14.5C22.1,14.7 22.1,15.1 21.9,15.3L20.9,16.3L18.8,14.2L19.8,13.2C19.9,13.1 20,13 20.2,13M20.2,16.9L14.1,23H12V20.9L18.1,14.8L20.2,16.9Z"
                />
              </svg>
              <h1 className=" font-bold text-ntext items-center">
                Monthly Statement
              </h1>
            </div>
            <div className="flex">
              <div className="border-r-2 mx-2 border-primary"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          <div class=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
            <div class="flex flex-row  content-start items-center py-2 px-5 space-x-5 border-b  text-ntext">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setModal(!Modal)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <h1 className=" text-lg font-popins font-bold">
                {" "}
                Statement Details
              </h1>
            </div>
            <div>
              {Modal ? (
                <div className="">
                  <div className="  md:mx-20 my-5  rounded-sm px-2 mx-5 py-4 md:px-5">
                    <div className="flex-grow flex flex-col  py-2 px-4 ">
                      <select
                        name="Balance"
                        id="balance"
                        className=" border-b border-primary  "
                        placeholder="Select Balance"
                      >
                        <option value="GT Bank">Balance</option>
                        <option value="FCMB"> USSD Balance</option>
                        <option value="ECO Bank"> EUR Balance</option>
                        <option value="WEMA Bank"> GBP Balance</option>
                      </select>
                    </div>
                    <div className=" flex space-x-3 justify-between items-center">
                      <div className="flex-grow flex flex-col  py-2 px-4 ">
                        <select
                          name="Balance"
                          id="balance"
                          className=" border-b border-primary  "
                          placeholder="Select Balance"
                        >
                          <option value="">Month</option>
                          <option value="FCMB">Janurary</option>
                          <option value="ECO Bank"> February</option>
                          <option value="WEMA Bank"> March</option>
                          <option value="WEMA Bank"> April</option>
                          <option value="WEMA Bank"> May</option>
                          <option value="WEMA Bank"> June</option>
                          <option value="WEMA Bank"> July</option>
                          <option value="WEMA Bank"> August</option>
                        </select>
                      </div>
                      <div className="flex-grow flex flex-col  py-2 px-4 ">
                        <select
                          name="Balance"
                          id="balance"
                          className=" border-b border-primary  "
                          placeholder="Select Balance"
                        >
                          <option value="">Year</option>
                          <option value="FCMB">2001</option>
                          <option value="ECO Bank">2001</option>
                          <option value="WEMA Bank"> 2003</option>
                        </select>
                      </div>
                  </div>
                  <div className=" my-4 mx-2">
                    <div className=" py-2 text-ntext font-popins font-medium" >Statement format</div>
                   <div className=" flex w-1/2  space-x-4">
                   <div className="  flex space-x-4">
                      <button className=" uppercase py-2 px-4 bg-lprimary"> pdf</button>
                    </div>
                    <div className="  flex space-x-4">
                      <button className=" uppercase py-2 px-4 bg-lprimary">Csv</button>
                    </div>
                   </div>
                  </div>
                    <div className=" font-popins text-sm">Choose PDF for an abridge statement or CSV for a complete statement</div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <footer class=" py-4 flex flex-col justify-between items-centercontent-start ">
            <div class="container mx-auto px-4">
              <div class="flex  flex-col items-center md:justify-between justify-center ">
                <button
                  type="submit"
                  className="bg-lprimary py-2 px-5 text-white font-popins font-medium "
                >
                  Download
                </button>
              </div>
            </div>
          </footer>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Monthly;
