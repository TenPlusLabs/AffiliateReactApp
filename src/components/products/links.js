import Header from "../partials/header";
import Nav from "../partials/nav";
import Footer from "../partials/footer";
const Linkss = () => {
  return (
    <>
      <Header />
      <Nav />
      <div className=" flex-col border shadow-md mx-3  lg:mx-44 my-10 rounded-md py-4 px-1 flex justify-between bg-white">
        <div className=" py-2 px-2 border-b flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-ntext"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
          <div className=" text-lg text-ntext font-bold ">
            Web Advertising
          </div>
        </div>
        <div className="  mx-5  my-6 text-base font-medium text-lprimary">
          Mobile Category
        </div>
        <div className=" grid grid-cols-2 mx-4 my-3 ">
          <div className=" flex flex-col px-4">
            <div className=" text-lg font-medium text-ntext my-3">
              Banner Parameters
            </div>
            <div className=" text-sm font-normal">
              Banner are images that you can use while advertizing, commercial
              campaigns and offers, you can choose the size that fits your
              website or social Media pages
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext uppercase">
                Banner Size
              </div>
              <select name="" id="" className=" shadow py-2 px-2">
                <option value="Mobile">Mobile Category</option>
                <option value="Mobile">Mobile Category</option>
                <option value="Mobile">Mobile Category</option>
                <option value="Mobile">Mobile Category</option>
                <option value="Mobile">Mobile Category</option>
              </select>
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext uppercase">
                Additional Tracking
              </div>
              <div className=" text-sm font-normal">
                You can add your own additional tracking parameters to the URL
              </div>
            </div>

            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext ">
                Sub Affiliate ID
              </div>
              <input
                type="text"
                placeholder="Sub Affiliate ID"
                className=" shadow py-2 px-2"
              />
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext">
                Channel
              </div>
              <input
                type="text"
                placeholder="Channel"
                className=" shadow py-2 px-2"
              />
            </div>

            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext">
                Tracking Tag 3
              </div>
              <input
                type="text"
                placeholder="Tracking Tag 3"
                className=" shadow py-2 px-2"
              />
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext">
                Tracking Tag 4
              </div>
              <input
                type="text"
                placeholder="Tracking Tag 4"
                className=" shadow py-2 px-2"
              />
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext">
                Tracking Tag 5
              </div>
              <input
                type="text"
                placeholder="Tracking Tag 5"
                className=" shadow py-2 px-2"
              />
            </div>
          </div>
          <div className=" flex flex-col px-4">
            <div className=" text-lg font-medium text-ntext">
              Banner Parameters
            </div>
            <div className=" text-sm font-normal">
              Banner are images that you can use while advertizing, commercial
              campaigns and offers, you can choose the size that fits your
              website or social Media pages
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-2 text-sm font-medium text-ntext uppercase">
                Banner preview
              </div>
              <div className=" rounded-lg shadow-md border">
                <img src="images/image.png" alt="" className=" py-2 px-2" />
              </div>
            </div>
            <div className=" flex flex-col w-full ">
              <div className=" my-4 text-sm font-medium text-ntext uppercase ">
                Generated Url
              </div>
              <div className=" flex flex-col w-full flex-grow">
                <div className=" my-2 text-sm font-medium text-ntext ">
                  Image URL
                </div>
                <div className=" flex flex-row w-full justify-between text-center space-x-3">
                  <input
                    type="text"
                    value={"https://tenplus.com"}
                    className=" text-ntext shadow py-1 px-2 border-2 border-dotted w-full text-sm"
                  />
                  <button className="bg-lprimary py-1 px-5 text-white font-popins w-32 text-xs font-medium  hover:bg-dprimary ">
                    {" "}
                    Download
                  </button>
                </div>
                <div className=" text-lprimary text-xs py-2">
                  Image to be used with ad URL to promote via social media page
                </div>
              </div>
              <div className=" flex flex-col w-full flex-grow">
                <div className=" my-2 text-sm font-medium text-ntext ">
                  Add URL
                </div>
                <div className=" flex flex-row w-full justify-between text-center space-x-3">
                  <input
                    type="text"
                    value={"https://tenplus.com/ad123mjgn,zjldks"}
                    className=" text-ntext shadow py-1 px-2 border-2 border-dotted w-full text-sm"
                  />
                  <button className="bg-lprimary py-1 px-5 text-white font-popins w-32 text-xs font-medium  hover:bg-dprimary ">
                    {" "}
                   Copy
                  </button>
                </div>
                <div className=" text-lprimary text-xs py-2">
                  To promote via social media page
                </div>
              </div>
              <div className=" flex flex-col w-full flex-grow">
                <div className=" my-2 text-sm font-medium text-ntext ">
                  Banner Code
                </div>
                <div className=" flex flex-row w-full justify-between text-center space-x-3">
                  <input
                    type="text"
                    value={"<a href='https://tenplus.com/imgaes/image123jhjh.png'></a>"}
                    className=" text-ntext shadow py-1 px-2 border-2 border-dotted w-full text-sm"
                  />
                  <button className="bg-lprimary py-1 px-5 text-white font-popins  hover:bg-dprimary w-32 text-xs font-medium ">
                    {" "}
                    Copy
                  </button>
                </div>
                <div className=" text-lprimary text-xs py-2">
                  To promote via Your Website
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Linkss;
