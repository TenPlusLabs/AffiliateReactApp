import { Link } from "react-router-dom";
const Greetings = () => {
  return (
    <>
      <div className=" mx-2 md:flex-row  border shadow-md  lg:mx-10 my-10 rounded-md py-4 px-1 flex justify-between items-center md:space-x-28 bg-white">
        <div className=" flex flex-col px-2  ">
        
          <h3 className=" font-semibold text-xl text-ntext">Abdullahi Jibril</h3>
         
          <h4 className=" font-medium text-sm text-ntext">Customer ID: <span className=" text-sm font-normal text-ntext">43850677</span> </h4>
        </div>
        <div className=" flex  justify-between flex-grow items-center ">
          <div className=" flex md:flex-col px-2 flex-row md:font-normal -mt-9">
            <div className=" text-sm">
              Local Time: <span className=" md:pl-3 font-medium">02:47</span>
            </div>
            <div className=" text-sm">
              Last Vist:
              <span className=" md:pl-7 font-medium">
                08/15/2021 11:17 EST
              </span>
            </div>
          </div>
       
          <div>
            <div className="flex  py-2 px-2 ">
            <div className=" h-16 w-16 rounded-full bg-dprimary mr-3 hidden md:block "> <img src="images/logo.jpg" alt="" className=" h-16 w-16 rounded-full bg-dprimary mr-3" /></div>
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
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div className="border-r-2 h-6 mx-2"></div>
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
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>

            <Link to={"/notification"}> <div className="rounded-full h-4 w-4 bg-primary -mt-1 -ml-4 text-white font-medium text-center text-xs animate-ping">1</div></Link> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Greetings;
