import Header from "../partials/header";
import { Link } from "react-router-dom";
import Footer from "../partials/footer";
// import {useState} from "react"
const singleProduct = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <div className=" flex-col border shadow-md  lg:mx-44 my-10 rounded-md py-4 px-1 flex justify-between">
        <div className=" py-3 px-2 border-b flex items-center">
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
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <div className=" text-xl text-ntext ">Web Development</div>
        </div>
        <div className="  mx-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-6">
         <Link to={"/promotesingle"}><div className=" mr-5 mt-5 flex flex-grow flex-col   ">
              <div className="mx-auto relative bg-lprimary py-6 px-4 text-white font-semibold hover:underline cursor-pointer ">Mobile Development</div>
          </div></Link>
          <Link to={"/promotesingle"}><div className=" mr-5 mt-5 flex flex-grow flex-col   ">
              <div className="mx-auto relative bg-lprimary py-6 px-4 text-white font-semibold hover:underline cursor-pointer ">Mobile Development</div>
          </div></Link>
          <Link to={"/promotesingle"}><div className=" mr-5 mt-5 flex flex-grow flex-col   ">
              <div className="mx-auto relative bg-lprimary py-6 px-4 text-white font-semibold hover:underline cursor-pointer ">Mobile Development</div>
          </div></Link>
          <Link to={"/promotesingle"}> <div className=" mr-5 mt-5 flex flex-grow flex-col   ">
              <div className="mx-auto relative bg-lprimary py-6 px-4 text-white font-semibold hover:underline cursor-pointer ">Mobile Development</div>
          </div></Link>
         
          
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default singleProduct;
