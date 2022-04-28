import Header from "../partials/header";
import Nav from "../partials/nav";
import Greetings from "../partials/greetings";
import Footer from "../partials/footer";
// import {useState} from "react"
const Refer = () => {
  //  const [Modal, setModal] = useState(false);
  return (
    <>
      <Header />
      <Nav />

      <Greetings />
      <div class=" xl:w-8/12 mb-20 md:mb-12 xl:mb-10 px-4 md:mx-auto mt-24 border rounded-lg  my-4">
      
        <div class="relative  px-4 flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded border-l-4 border-primary ">
        <div className="flex flex-row my-5 justify-between ">
          <h1 className=" font-bold text-ntext">Refer a Friend</h1>{" "}
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
          <div class="flex flex-row justify-between content-start items-center md:py-10 px-5 space-x-5  text-ntext">
            <div className="flex flex-col ">
              <svg className=" h-5 w-5 md:w-10 md:h-10" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M13 11A3 3 0 1 0 10 8A3 3 0 0 0 13 11M13 7A1 1 0 1 1 12 8A1 1 0 0 1 13 7M17.11 10.86A5 5 0 0 0 17.11 5.14A2.91 2.91 0 0 1 18 5A3 3 0 0 1 18 11A2.91 2.91 0 0 1 17.11 10.86M13 13C7 13 7 17 7 17V19H19V17S19 13 13 13M9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17A5.6 5.6 0 0 0 19.2 13.06C24 13.55 24 17 24 17M8 12H5V15H3V12H0V10H3V7H5V10H8Z"
                />
              </svg>
            </div>
            <div className=" flex flex-col justify-between flex-grow ">
              <div className=" font-bold font-popins text-lg">
                Earn N2000 when you refer a friend
              </div>
              <div className=" font-semibold py-2">Here's how it works</div>
              <div className=" flex flex-row md:space-x-6 space-x-4">
                <div className=" md:w-1/6 flex py-2 text-sm">
                  {" "}
                  <div className=" text-lg md:text-4xl font-extralight "> 1.</div> Tell
                  Your friend about ten plus
                </div>
                <div className=" md:w-1/6 flex py-2 text-sm font-normal">
                  {" "}
                  <div className=" text-lg md:text-4xl font-extralight "> 2.</div> Your
                  Friend Signs up{" "}
                </div>
                <div className=" md:w-1/6 flex py-2 text-sm">
                  {" "}
                  <div className=" text-lg md:text-4xl font-extralight "> 3.</div> You Both
                  earn Reward
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col justify-between items-centercontent-start py-2 px-5 space-x-5   text-ntext items-center">
            <div className="flex flex-col ">
              <h1 className=" text-2xl font-bold">Share with friends</h1>
            </div>
            <div class="mt-2 lg:mb-2 mb-2">
              <button
                class="text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                flex
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  {" "}
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>{" "}
              </button>
              <button
                class=" text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  <path d="M 15 2 C 7.832 2 2 7.832 2 15 C 2 22.168 7.832 28 15 28 C 22.168 28 28 22.168 28 15 C 28 7.832 22.168 2 15 2 z M 11.666016 6 L 18.332031 6 C 21.457031 6 24 8.5420156 24 11.666016 L 24 18.332031 C 24 21.457031 21.457984 24 18.333984 24 L 11.667969 24 C 8.5429688 24 6 21.457984 6 18.333984 L 6 11.667969 C 6 8.5429688 8.5420156 6 11.666016 6 z M 11.666016 8 C 9.6450156 8 8 9.6459688 8 11.667969 L 8 18.333984 C 8 20.354984 9.6459688 22 11.667969 22 L 18.333984 22 C 20.354984 22 22 20.354031 22 18.332031 L 22 11.666016 C 22 9.6450156 20.354031 8 18.332031 8 L 11.666016 8 z M 19.667969 9.6660156 C 20.035969 9.6660156 20.333984 9.9640312 20.333984 10.332031 C 20.333984 10.700031 20.035969 11 19.667969 11 C 19.299969 11 19 10.700031 19 10.332031 C 19 9.9640312 19.299969 9.6660156 19.667969 9.6660156 z M 15 10 C 17.757 10 20 12.243 20 15 C 20 17.757 17.757 20 15 20 C 12.243 20 10 17.757 10 15 C 10 12.243 12.243 10 15 10 z M 15 12 A 3 3 0 0 0 15 18 A 3 3 0 0 0 15 12 z"></path>
                </svg>
              </button>
              <button
                class=" text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  {" "}
                  <path d="M28,6.937c-0.957,0.425-1.985,0.711-3.064,0.84c1.102-0.66,1.947-1.705,2.345-2.951c-1.03,0.611-2.172,1.055-3.388,1.295 c-0.973-1.037-2.359-1.685-3.893-1.685c-2.946,0-5.334,2.389-5.334,5.334c0,0.418,0.048,0.826,0.138,1.215 c-4.433-0.222-8.363-2.346-10.995-5.574C3.351,6.199,3.088,7.115,3.088,8.094c0,1.85,0.941,3.483,2.372,4.439 c-0.874-0.028-1.697-0.268-2.416-0.667c0,0.023,0,0.044,0,0.067c0,2.585,1.838,4.741,4.279,5.23 c-0.447,0.122-0.919,0.187-1.406,0.187c-0.343,0-0.678-0.034-1.003-0.095c0.679,2.119,2.649,3.662,4.983,3.705 c-1.825,1.431-4.125,2.284-6.625,2.284c-0.43,0-0.855-0.025-1.273-0.075c2.361,1.513,5.164,2.396,8.177,2.396 c9.812,0,15.176-8.128,15.176-15.177c0-0.231-0.005-0.461-0.015-0.69C26.38,8.945,27.285,8.006,28,6.937z"></path>
                </svg>
              </button>
              <button
                class="text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="40"
                  height="40"
                  viewBox="0 0 30 30"
                >
                  <path d="M27,15c0,6.627-5.373,12-12,12S3,21.627,3,15S8.373,3,15,3S27,8.373,27,15z M10.403,11.021 c0.935,0,1.496-0.561,1.496-1.309c0-0.748-0.561-1.309-1.403-1.309C9.561,8.403,9,8.964,9,9.712 C9,10.46,9.561,11.022,10.403,11.021z M9,20h3v-8H9V20z M19.459,12c-1.412,0-2.165,0.465-2.541,1.116V12H14v8h2.917 c0,0,0-4.186,0-4.372c0-1.302,0.942-1.488,1.224-1.488s1.035,0.279,1.035,1.488V20H22v-4.372C22,13.116,20.871,12,19.459,12z"></path>
                </svg>
              </button>
            </div>
            <div className=" md:my-2">
              <form className="flex border my-0.5 mx-0.5 ">
                <button className=" bg-primary md:px-2 md:py-2 text-white">
                  Your refaral Link
                </button>
                <input
                  type="text"
                  className=" flex-grow felx md:px-5 text-lprimary"
                  value=" https://www.tenplus.com/ref1234"
                />
              </form>
            </div>
          </div>
        </div>
        <footer class=" py-4 ">
          <div class="  md:px-4">
            <div class="flex flex-col items-center  justify-center mx-auto text-lprimary ">
              * After Your friend Register you will get a bonus
            </div>
          </div>
        </footer>
      </div>
      <Footer />
    </>
  );
};

export default Refer;
