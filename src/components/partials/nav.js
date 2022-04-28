import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [Drop, setDrop] = useState(false);
  const [Nav, setNav] = useState(true);
  const [DropHelp, setDropHelp] = useState(false);

  const hadndleset = () => {
    setDrop(!Drop);
    setDropHelp(false);
  };
  const hadndlehelp = () => {
    setDrop(false);
    setDropHelp(!DropHelp);
  };
  return (
    <>
    <div className=" lg:hidden flex flex-row justify-end content-end items-end right">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        onClick={() => setNav(!Nav)}
        className="h-10 w-10  text-ntext "
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    

      <div className="  flex-row   flex  items-center sticky  font-popins text-white  justify-between  font-thin md:font-normal">
      <div
          className={
            " lg:flex font-normal text-sm absolute flex-col flex lg:flex-row font-popins    h-full  lg:justify-center lg:mx-auto w-full " + (Nav ? "hidden" : "")
             
          }
        >
          <ul
            className={
              "lg:items-center justify-center w-full  flex flex-row font-popins  lg:flex-row lg:space-x-10 lg:flex  bg-lprimary  px-4 py-4 "
              
            }
          >
         <div className="lg:flex lg:justify-between lg:items-center">
         <Link
              to={"/"}
              className="  lg:py-1 border-gray-400  lg:h-full lg:px-4   flex"
            >
              <li>Home</li>
            </Link>
            <Link
              to={"/product"}
              className="  lg:py-1   lg:h-full lg:px-4   flex"
            >
              <li>Promote</li>
            </Link>
            <Link
              to={"/promotesingle"}
              className="  lg:py-1 border-gray-400  lg:h-full lg:px-4   flex"
            >
              <li>Links</li>
            </Link>
            <Link
              to={"/transactions"}
              className="  lg:py-1 border-gray-400   lg:px-4  lg:h-full flex "
            >
              <li>Transaction</li>
            </Link>

            <Link
              to={"/report"}
              className="  lg:py-1 border-gray-400   lg:px-4  lg:h-full flex "
            >
              <li>Report</li>
            </Link>
            <Link
              to={"/refer"}
              className="  lg:py-1 border-gray-400    lg:px-4  lg:h-full flex "
            >
              <li>Refer a friend</li>
            </Link>

            <Link
              to={"/withdrawal"}
              className="  lg:py-1 border-gray-400      lg:px-4 lg:h-full flex "
            >
              <li>Withdraw</li>
            </Link>
         </div>
            <div className=" lg:flex lg:justify-between lg:items-center lg:pl-32">
              <li>
                <li>
                  <button
                    class="text-white  hover:lprimary text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0"
                    type="button"
                    onClick={() => hadndlehelp()}
                  >
                    Help{" "}
                    <svg
                      class="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </button>

                  {DropHelp ? (
                    <ul className="absolute bg-lprimary  md:-ml-4 px-4 py-4 cursor-pointer ">
                      <Link to={"/pricing"}>
                        {" "}
                        <li className=" border-b py-1 w-full  hover:text-ntext">
                          Pricing and Fees
                        </li>
                      </Link>
                      <Link to={"/howto"}>
                        {" "}
                        <li className=" border-b py-1 w-full hover:text-ntext">
                          How to Videos
                        </li>
                      </Link>
                      <Link to={"/support"}>
                        {" "}
                        <li className=" border-b py-1 w-full hover:text-ntext">
                          Support Center
                        </li>
                      </Link>
                    </ul>
                  ) : null}
                </li>
              </li>

              <li>
                <button
                  class="text-white  hover:lprimary text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-0"
                  type="button"
                  onClick={() => hadndleset()}
                >
                  Settings{" "}
                  <svg
                    class="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </button>

                {Drop ? (
                  <ul className="absolute bg-lprimary  lg:-ml-4 px-4 py-4 cursor-pointer">
                    <Link to={"/bank"}>
                      {" "}
                      <li className=" border-b py-1 w-full  hover:text-ntext">
                        Bank Accounts
                      </li>
                    </Link>
                    <Link to={"/profile"}>
                      <li className=" border-b py-1 w-full hover:text-ntext">
                        Profile Settings
                      </li>
                    </Link>
                    <Link to={"security"}>
                      <li className=" border-b py-1 w-full hover:text-ntext">
                        Security Settings
                      </li>
                    </Link>
                    <Link to={"/verify"}>
                      <li className=" border-b py-1 w-full hover:text-ntext">
                        Verification Center
                      </li>
                    </Link>
                  </ul>
                ) : null}
              </li>

              <Link
                to={"/signout"}
                className="  lg:py-1 border-gray-400   lg:px-4  lg:h-full flex "
              >
                <li>Sign Out</li>
              </Link>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
