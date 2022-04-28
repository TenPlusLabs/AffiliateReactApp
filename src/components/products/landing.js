import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
// import { Link } from "react-router-dom";
import Footer from "../partials/footer";
import { Link } from "react-router-dom";
// import {useState} from "react"
const Products = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <div className=" bg-white flex-col border shadow-md  lg:mx-10 my-10 rounded-md py-4 px-1 flex justify-between">
        <div className=" py-3 px-2 border-b flex justify-between flex-col items-center">
          <div className=" text-2xl text-ntext ">Imagine Your Future!</div>
          <div className=" text-xl text-lprimary">
            What do you what to sell today?
          </div>
          <div className=" text-lg text-ntext">I want to sell....</div>
        </div>
        <div className="  mx-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-6">
         <Link to={"/singleProduct"}> <div className="  cursor-pointer  shadow-md border rounded-xl mr-5 mt-5 h-52 flex flex-grow flex-col relative   ">
            <div
              className=" flex text-2xl text-white rounded-xl items-center text-center h-full w-full  font-bold"
              style={{ backgroundImage: "url(images/m.png)" }}
            >
              {" "}
             <div className="mx-auto">Mobile Development</div> 
            </div>
          </div></Link>
          <Link to={"/singleProduct"}> <div className="  cursor-pointer  shadow-md border rounded-xl mr-5 mt-5 h-52 flex flex-grow flex-col relative   ">
            <div
              className=" flex text-2xl text-white rounded-xl items-center text-center h-full w-full  font-bold"
              style={{ backgroundImage: "url(images/w.png)" }}
            >
              {" "}
             <div className="mx-auto">Mobile Development</div> 
            </div>
          </div></Link>
          <Link to={"/singleProduct"}> <div className="  cursor-pointer  shadow-md border rounded-xl mr-5 mt-5 h-52 flex flex-grow flex-col relative   ">
            <div
              className=" flex text-2xl text-white rounded-xl items-center text-center h-full w-full font-bold"
              style={{ backgroundImage: "url(images/p.png)" }}
            >
              {" "}
             <div className="mx-auto">Content Writing</div> 
            </div>
          </div></Link>
          <Link to={"/singleProduct"}><div className="  cursor-pointer  shadow-md border rounded-xl mr-5 mt-5 h-52 flex flex-grow flex-col relative    ">
            <div
              className=" flex text-2xl text-white rounded-xl items-center text-center h-full w-full  font-bold"
              style={{ backgroundImage: "url(images/logo.jpg)" }}
            >
              {" "}
             <div className="mx-auto">Web Development</div> 
            </div>
          </div></Link>
          <Link to={"/singleProduct"}> <div className="  cursor-pointer  shadow-md border rounded-xl mr-5 mt-5 h-52 flex flex-grow flex-col relative   ">
            <div
              className=" flex text-2xl text-white rounded-xl items-center text-center h-full w-full  font-bold"
              style={{ backgroundImage: "url(images/p.png)" }}
            >
              {" "}
             <div className="mx-auto">UI/UX Development</div> 
            </div>
          </div></Link>
          <Link to={"/singleProduct"}> <div className="  cursor-pointer shadow-md border rounded-xl mr-5 mt-5 h-52 flex flex-grow flex-col relative bg-primary   ">
            <div
              className=" flex text-2xl text-white rounded-xl items-center text-center h-full w-full opacity-50 font-bold"
              style={{ backgroundImage: "url(images/image.png)" }}
            >
              {" "}
             <div className="mx-auto">Mobile Development</div> 
            </div>
          </div></Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
