// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
const Transaction = () => {

  const [Upcoming, setUpcoming] = useState(false);
  const [Latest, setLatest] = useState(true);
  const [Details, setDetails] = useState(false);
  const  resetLatest = () =>{
    setLatest(true);
    setUpcoming(false);
  }
  const  resetUpcoming = () =>{
    setLatest(false);
    setUpcoming(true);
  }
  return (
    <>
     
       
        <div class="relative flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded mx-10 ">
          
        <div className="flex flex-col my-3 items-center">
          <h1 className=" font-bold text-2xl text-ntext">Transactions</h1>{" "}
         
        </div>
        <div class="rounded-t mb-0 px-4 py-3 border-0">
            <div class="flex  items-center justify-between border-b">
              <div class=" px-4  justify-between flex items-center">
                <div className=" flex justify-between items-center space-x-4">
                  <h3
                    class="font-semibold text-base text-blueGray-700 focus:border-b-2 focus:border-primary  cursor-pointer"
                    onClick={() => resetLatest()}
                  >
                    Transactions
                  </h3>
                  <h3
                    class="font-semibold text-base text-blueGray-700  border-primary cursor-pointer"
                    onClick={() => resetUpcoming()}
                  >
                    Links
                  </h3>
                </div>
              </div>
              <div class="px-4  flex ">
               {Upcoming ? (<Link to={"/promotesingle"}> <button class=" animate-pulse flex  text-ntext items-center active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  View All{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 "
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
                  </svg>{" "}
                </button></Link>) : null}
             {Latest ?  (<Link to={"/transactions"}> <button class=" animate-pulse flex  text-ntext items-center active:bg-indigo-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                  View All{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6 "
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
                  </svg>{" "}
                </button></Link>) : null}
              </div>
            </div>
          </div>
          {Upcoming ? (
            <table className="table-responsive w-full rounded ">
            <thead>
              <tr>
                <th className="border-2 w-5 px-1 py-2 bg-dprimary text-white uppercase"></th>
                <th className="border-2 w-5 px-1 py-2 bg-dprimary text-white uppercase">
                  Product
                </th>
                <th className="border-2 w-5 px-1 py-2 bg-dprimary text-white uppercase">
                 Name
                </th>
                <th className="border-2 w-64  py-2 bg-dprimary text-white uppercase">
                  Features
                </th>

                <th className="border-2 w-10  py-2 bg-dprimary text-white uppercase">
                  Price
                </th>
                <th className="border-2 w-10  py-2 bg-dprimary text-white uppercase">
                  Commission
                </th>
                <th className="border-2 w-4 px-4 py-2 bg-dprimary text-white uppercase"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-2 px-1 py-1">1</td>
                <td className="border-2 px-1 py-1 items-center flex  justify-center">
                  <img src="images/image.png" alt="" className=" w-20 h-20" />
                </td>
                <td className="border-2 px-2 py-1">
                 Banana Island
                </td>
                <td className="border-2 px-2 py-1">
                  {" "}
                  Online vendors, shop owners,Traders, Merchants and services
                  on the internet.items-center flex justify-centeritems-center
                  flex justify-center
                </td>
              
                <td className="border-2 px-1 py-1 text-center">N200,000</td>
                <td className="border-2 px-1 py-1 text-center">2%</td>
                <td className="border-2 px-1 py-1 text-center">
                  <Link to={"/links"}>
                    <button
                      type="submit"
                      className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                    >
                      View Link
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-2 px-1 py-1">2</td>
                <td className="border-2 px-1 py-1 items-center flex  justify-center">
                  <img src="images/image.png" alt="" className=" w-20 h-20" />
                </td>
                <td className="border-2 px-2 py-1">
                 Banana Island
                </td>
                <td className="border-2 px-2 py-1">
                  {" "}
                  Online vendors, shop owners,Traders, Merchants and services
                  on the internet.items-center flex justify-centeritems-center
                  flex justify-center
                </td>
                <td className="border-2 px-1 py-1 text-center">N200,000</td>
                <td className="border-2 px-1 py-1 text-center">2%</td>
                <td className="border-2 px-1 py-1 text-center">
                  <Link to={"/links"}>
                    <button
                      type="submit"
                      className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                    >
                      View Link
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-2 px-1 py-1">3</td>
                <td className="border-2 px-2 py-1 items-center flex  justify-center">
                  <img src="images/image.png" alt="" className=" w-20 h-20" />
                </td>
                <td className="border-2 px-2 py-1">
                 Banana Island
                </td>
                <td className="border-2 px-2 py-1">
                  {" "}
                  Online vendors, shop owners,Traders, Merchants and services
                  on the internet.items-center flex justify-centeritems-center
                  flex justify-center
                </td>
                <td className="border-2 px-1 py-1 text-center">N200,000</td>
                <td className="border-2 px-1 py-1 text-center">2%</td>
                <td className="border-2 px-1 py-1 text-center">
                  <Link to={"/links"}>
                    <button
                      type="submit"
                      className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                    >
                      View Link
                    </button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td className="border-2 px-1 py-1">4</td>
                <td className="border-2 px-2 py-1 items-center flex  justify-center">
                  <img src="images/image.png" alt="" className=" w-20 h-20" />
                </td>
                <td className="border-2 px-2 py-1">
                 Banana Island
                </td>
                <td className="border-2 px-2 py-1">
                  {" "}
                  Online vendors, shop owners,Traders, Merchants and services
                  on the internet.items-center flex justify-centeritems-center
                  flex justify-center
                </td>
                <td className="border-2 px-1 py-1 text-center">N200,000</td>
                <td className="border-2 px-1 py-1 text-center">2%</td>
                <td className="border-2 px-1 py-1 text-center">
                  <Link to={"/links"}>
                    <button
                      type="submit"
                      className="bg-lprimary py-2 px-5 text-white font-popins font-medium hover:bg-dprimary "
                    >
                      View Link
                    </button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          ) : null}
          {Latest ? (
         <div>
      
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
         
        
         
        
            </div>
          ) : null}
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
    </>
  );
};

export default Transaction;
