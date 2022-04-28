import { useState } from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  const [Nav, setNav] = useState(!false);
  return (
    <div className=" bg-white h-10 flex  items-center md:sticky border-b-2 border-primary justify-between mx-20">
      <Link to={"/"}>
        {" "}
        <div className=" font-popins text-primary ml-10 ">
          <h1>Tenplus</h1>
        </div>
      </Link>
      <div className="flex font-popins  h-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setNav(!Nav)}
          className="h-6 w-6 md:hidden"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>

        <ul
          className={
            " font-popins bg-vlprimary  border-red-50 items-center justify-between flex-row md:flex " + (Nav ? "hidden" : null)
          }
        >
          <Link to={"/about"} className=" border-r-4   h-full px-10  py-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <li>Home</li>
          </Link>
          <Link
            to={"/commision"}
            className=" border-r-4  py-2 px-10  h-full flex "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <li>Commission</li>
          </Link>

          <Link
            to={"/affiliate"}
            className=" border-r-4  py-2 px-10  h-full flex "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
              />
            </svg>
            <li>Affiliate Market</li>
          </Link>

          <Link to={"/faq"} className="   py-2 px-10  h-full flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-6"
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
            <li>FAQ</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
