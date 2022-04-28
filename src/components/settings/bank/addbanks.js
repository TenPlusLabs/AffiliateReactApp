import Header from "../../partials/header";
import Nav from "../../partials/nav";
import Greetings from "../../partials/greetings";
// import { Link } from "react-router-dom";
import Footer from "../../partials/footer";
import { useState } from "react";

const AddBanks = () => {
  const [Modal, setModal] = useState(false);
  const [accountModal, setaccountModal] = useState(false);
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
                  d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
                />
              </svg>
              <h1 className=" font-bold text-ntext items-center">
                Add Bank Accounts
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
                className="h-6 w-6 text-ntext"
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
              <h1 className=" text-lg font-popins font-bold text-ntext">
                {" "}
                Enter Bank Details
              </h1>
            </div>
            <div>
              {Modal ? (
                <div className=" my-5">
                  <form action="">
                    <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5 md:py-6 flex flex-col justify-between  ">
                      <div className="flex-grow flex flex-col space-y-2  font-semibold text-ntext ">
                        Bank Account Type
                      </div>
                      <div className=" flex flex-row items-center space-x-2 text-lprimary">
                        <input
                          type="radio"
                          name="accounttype"
                          value="USA"
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                          aria-labelledby="country-option-1"
                          aria-describedby="country-option-1"
                          checked
                        />
                        <label> Business </label>
                      </div>
                      <div className=" flex flex-row items-center space-x-2 text-lprimary">
                        <input
                          type="radio"
                          name="accounttype"
                          value="USA"
                          className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                          aria-labelledby="country-option-1"
                          aria-describedby="country-option-1"
                          disabled
                        />
                        <label> Personal </label>
                      </div>
                      <div className=" text-sm text-ntext">
                        Why Cant I add a personal Account?
                      </div>
                    </div>

                    <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5 md:py-6 flex flex-col justify-between  border-b ">
                      <div className=" flex flex-row items-center space-x-2 text-lprimary">
                        <div className=" flex r flex-col w-full justify-start ">
                          <label>Bank Country</label>
                          <select
                            type="text"
                            name="accounttype"
                            value="USA"
                            className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="Nigeri">Nigeria</option>
                            <option value="Nigeri">Nigeria</option>
                            <option value="Nigeri">Nigeria</option>
                            <option value="Nigeri">Nigeria</option>
                            <option value="Nigeri">Nigeria</option>
                            <option value="Nigeri">Nigeria</option>
                          </select>
                        </div>
                      </div>

                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        <label>Select Your Account Type</label>
                        <select
                          type="text"
                          name="accounttype"
                          value="USA"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          <option value="Nigeri">NGN</option>
                          <option value="Nigeri">USD</option>
                        </select>
                        <div className=" text-sm text-ntext">
                          What are my currency options?
                        </div>
                      </div>
                    </div>
                    <div class="flex  flex-col items-center md:justify-between justify-center ">
                      <button className="bg-lprimary py-2 px-5 text-white font-popins font-medium ">
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
          <div class=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
            <div class="flex flex-row  content-start items-center py-2 px-5 space-x-5 border-b  text-ntext">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-ntext"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => setaccountModal(!accountModal)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
              <h1 className=" text-lg font-popins font-bold text-ntext">
                {" "}
                Enter Account Details
              </h1>
            </div>
            <div>
              {accountModal ? (
                <div className=" ">
                  <form action="">
                    <div className="  rounded-sm px-2 mx-5 md:px-5 md:py-2 flex flex-col ">
                      <div className=" flex justify-end  font-semibold text-ntext text-sm">
                        Need help to fill the Details?
                      </div>
                    </div>

                    <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5  flex flex-col justify-between  border-b ">
                      <div className=" flex flex-row items-center space-x-2 text-lprimary">
                        <div className=" flex r flex-col w-full justify-start ">
                          <label>Bank Name</label>
                          <select
                            type="text"
                            name="accounttype"
                            value="USA"
                            className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="Nigeri">FCMB</option>
                            <option value="Nigeri">GTB</option>
                            <option value="Nigeri">First Bank</option>
                          </select>
                        </div>
                      </div>

                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        <label>Account Holder's Name</label>
                        <input
                          type="text"
                          name="accounttype"
                          placeholder="e.g Ten Plus Digital Lab"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>

                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        <label>Account Number</label>
                        <input
                          type="text"
                          name="accounttype"
                          placeholder="e.g 5592231013"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                    <div className=" border-b border-gray-300 my-4">
                      <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5  flex flex-col justify-between  ">
                        <div className=" flex flex-row items-center space-x-2 text-lprimary">
                          <input
                            type="checkbox"
                            name="accounttype"
                            value="USA"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                            aria-labelledby="country-option-1"
                            aria-describedby="country-option-1"
                          />
                          <label className=" text-sm font-normal">
                            {" "}
                            I agree to the{" "}
                            <span className=" underline text-ntext">
                              Term and condition
                            </span>{" "}
                          </label>
                        </div>
                      </div>
                      <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5  flex flex-col justify-between  ">
                        <div className=" flex flex-row items-center space-x-2 text-lprimary">
                          <input
                            type="checkbox"
                            name="accounttype"
                            value="USA"
                            className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                            aria-labelledby="country-option-1"
                            aria-describedby="country-option-1"
                          />
                          <label className=" text-sm font-normal">
                            {" "}
                            I confim the bank account above{" "}
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="flex  flex-col items-center md:justify-between justify-center mb-5">
                      <button className="bg-lprimary py-2 px-5 text-white font-popins font-medium ">
                        Next
                      </button>
                    </div>
                  </form>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};
export default AddBanks;
