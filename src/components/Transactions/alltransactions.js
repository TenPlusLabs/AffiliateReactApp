import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
import Footer from "../partials/footer";
import { useState } from "react";
const Transaction = () => {
  const [Modal, setModal] = useState(false);
  const [Details, setDetails] = useState(false);
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
              Transactions
            </h1>
          </div>
          <div className="flex flex-row">
            <div className="border-r-2 mx-2 border-primary pr-3 text-lprimary">
              Monthly Statements
            </div>
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        <div class=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded border-l-4 border-primary  ">
          <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5 border-b  text-ntext">
            <div className=" flex items-center flex-row justify-between">
              <h1 className=" text-lg font-popins font-bold text-ntext">
                {" "}
                All Transactions
              </h1>
            </div>
            <div className=" flex items-center flex-row space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-10 text-ntext"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  fill="currentColor"
                  d="M11.362 2c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v11.543h-16v-20h7.362zm.827-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm-3.741 17.261c.346-.327.932-.647 1.742-.954.366-.725.731-1.523 1.018-2.232-.242-.506-.397-1.039-.464-1.588-.25-2.061 2.083-1.907 1.729.012-.068.368-.23.884-.483 1.536.367.654.849 1.146 1.233 1.472.524-.084 1.271-.17 1.797-.093 1.396.205 1.219 1.744-.021 1.744-.649 0-1.463-.507-1.972-.896-.779.144-1.613.365-2.33.618-.229.44-.536 1.001-.811 1.396-1.143 1.646-2.65.127-1.438-1.015zm1.199.055c-.253.128-.609.348-.801.559-.299.328-.103.586.257.233.178-.172.392-.492.544-.792zm4.44-1.201c.235.158.558.323.911.33.412.008.377-.261-.082-.328-.2-.03-.488-.03-.829-.002zm-2.947-.128c.328-.109 1.036-.274 1.213-.315-.02-.021-.528-.544-.695-.832-.134.335-.509 1.127-.518 1.147zm.314-3.983c-.057.296.029.771.129 1.061.113-.237.255-.806.197-1.085-.056-.279-.262-.299-.326.024z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-10 text-ntext"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M2 5v-5h20v5h-20zm13.909 13.223c.222 1.468-.186 4.534-1.341 5.702 2.201-1.174 5.938-4.884 7.432-6.881-1.286.9-4.044 1.657-6.091 1.179zm6.091-11.223v6c0 3.419-5.247 3.745-8.256 3 0 0 1.522 8-3.335 8h-8.409v-17h20zm-10 9h-6v1h6v-1zm6-3h-12v1h12v-1zm0-3h-12v1h12v-1z" />
              </svg>

              <svg class="h-6 w-10 text-ntext" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M18,3H6V7H18M19,12A1,1 0 0,1 18,11A1,1 0 0,1 19,10A1,1 0 0,1 20,11A1,1 0 0,1 19,12M16,19H8V14H16M19,8H5A3,3 0 0,0 2,11V17H6V21H18V17H22V11A3,3 0 0,0 19,8Z"
                />
              </svg>
            </div>
          </div>

          <div className=" flex flex-col">
            <div className=" flex flex-row space-x-3 items-center px-6 py-2">
            <div className=" flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-2">
              <select
                name=""
                id=""
                className=" text-ntext mb-2 md:mb-0 rounded-xl py-1 px-2 bg-transparent border border-primary  "
              >
                <option value="name" className=" ">
                  3 Feb 2019 - 3 Feb 2020
                </option>
                <option value="name" className=" ">
                  3 Feb 2020 - 3 Feb 2021
                </option>
                <option value="name" className=" ">
                  3 Feb 2020 - 3 Feb 2022
                </option>
              </select>
              <select
                name=""
                id=""
                className=" text-ntext rounded-xl py-1 px-2 bg-transparent border border-primary  "
              >
                <option value="name" className=" ">
                  Balance
                </option>
                <option value="name" className=" ">
                  Savings
                </option>
              </select>
              </div>
              <div className=" flex flex-col md:flex-row md:space-x-2">
              <div
                className=" text-ntext space-x-1 flex flex-row cursor-pointer"
                onClick={() => setModal(!Modal)}
              >
                {" "}
                <div>All filters</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-ntext"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
              <div className=" text-ntext">Clear filters</div>
              </div>
            </div>
            {Modal ? (
              <div className=" flex flex-row space-x-3 items-center px-6 py-2">
                <select
                  name=""
                  id=""
                  className=" text-ntext rounded-xl py-1 px-2 bg-transparent border border-primary  "
                >
                  <option value="name" className=" ">
                    Status
                  </option>
                  <option value="name" className=" ">
                    Pending
                  </option>
                  <option value="name" className=" ">
                    Completed
                  </option>
                  <option value="name" className=" ">
                    Canceled
                  </option>
                </select>
                <select
                  name=""
                  id=""
                  className=" text-ntext rounded-xl py-1 px-2 bg-transparent border border-primary "
                >
                  <option value="name" className=" space-x-2 ">
                    Incomming
                  </option>
                  <option value="name" className=" ">
                    Savings
                  </option>
                </select>
              </div>
            ) : null}
          </div>
         
          <div className=" md:grid flex flex-row space-x-3 md:grid-cols-5 mx-3  my-3 text-ntext font-semibold">
            <div className=" w-10">Date</div>
            <div className=" w-24">Description</div>
            <div>Amount</div>
          </div>
      
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
          <div className="  w-full flex flex-row space-x-3  md:grid md:grid-cols-5  my-3 text-ntext font-semibold hover:bg-lprimary hover:text-white px-3 md:px-4 py-3 cursor-pointer"
            onClick={() => setDetails(!Details)}
          >
            <div className="flex flex-col text-xs w-full ">
              <h1 className=" font-semibold ">28 Jan</h1> <h4>2022</h4>
            </div>
            <div className="flex flex-col ">
              <div className=" font-semibold">www.tenplus.com</div>
              <div className=" ">Completed</div>
            </div>

            <div className="flex flex-col ">N500,000</div>
            <div className="flex flex-col ">TEN-X02388680</div>
            <div className=" flex-row justify-end hidden md:flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="md:h-6 md:w-6 w-2 h-2"
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
          </div>
         
        </div>

        {Details ? (
          <div class=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
            <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
              {/* <!-- Modal content --> */}
              <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                {/* <!-- Modal header --> */}
                <div class="flex justify-between items-start py-2 px-4 py-2rounded-t border-b dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-ntext lg:text-xl dark:text-white">
                    Transaction Details
                  </h3>
                  <button
                    type="button"
                    class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                    onClick={() => setDetails(false)}
                  >
                    <svg
                      class="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                {/* <!-- Modal body --> */}
                <div className=" grid grid-cols-2">
                  <div className=" flex flex-col justify-center items-center my-10 border-r">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className=" h-20 w-20 text-ntext"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                      />
                    </svg>
                    <div className=" text-lg font-semibold text-lprimary uppercase my-4">
                      ECO BANK - TP-X1335
                    </div>
                    <div className=" text-base text-ntext">9 Dec 2021</div>
                    <div className=" items-end flex flex-col justify-center">
                      <div className=" text-xl text-ntext font-bold">
                        N200,500
                      </div>
                      <div className=" text-vlprimary">Completed</div>
                    </div>
                  </div>
                  <div className=" flex flex-col justify-center items-center my-10">
                    
                  </div>
                </div>

                {/* <!-- Modal footer --> */}
              </div>
            </div>
          </div>
        ) : null}
      </div>
      <Footer />
    </>
  );
};

export default Transaction;
