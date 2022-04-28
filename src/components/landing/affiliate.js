const Affiliate = () => {
  return (
    <>
      <div className=" mx-2 flex justify-between items-center font-popins  lg:mx-10 lg:space-x-10 lg:flex-row flex-col   ">
        <div className=" flex justify-between bg-lprimary flex-col rounded-md lg:w-64 ">
          <div className="flex justify-between flex-col rounded-md bg-primary py-5 px-5">
            <div className="flex justify-between flex-col rounded-md w-full">
              <h5 className=" text-lprimary font-semibold text-sm font-popins ">
                Available Commisions Balance
              </h5>
              <div className="flex items-center justify-between pb-7 border-b ">
                <div className=" text-white font-bold text-3xl">N500.0</div>
                <div className=" text-light">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex space-x-6 pt-4">
                <div className=" font-normal text-sm text-lprimary">
                  <div>Commission</div>
                  <div>Maturaturation</div>
                </div>
                <div className="font-normal text-sm text-lprimary">N0.00</div>
              </div>
              <div className="flex space-x-6 pt-4">
                <div className=" font-normal text-sm text-lprimary">
                  <div>Total Amount</div>
                  <div>Withdrawn</div>
                </div>
                <div className="font-normal text-sm text-lprimary">N0.00</div>
              </div>
              <button className="  py-4 px-6 my-2 mx-2 bg-lprimary items-center text-white font-bold text-sm hover:bg-dprimary">
                {" "}
                Request Withdrawal
              </button>
            </div>
          </div>
          <div className=" px-2 py-2 text-ntext flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-20 "
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              You sill be able to request a withdrawal as soon as your ballance
              reaches the minimum of required amount of <span>N3,000</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-grow lg:my-0 my-5 bg-white rounded-lg  ">
          <div className=" text-ntext font-semibold text-4xl px-5">
            Affliate
          </div>
          <div className="flex justify-between mb-10">
            <h5 className=" mx-5 text-lg">
              <span className=" text-light  ">Portal</span> / Affiliate
            </h5>
            <h5 className=" text-light lg:mx-5">
              These statistics are in realtime and update instantly
            </h5>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3  justify-between  flex-col">
            <div className=" rounded-md shadow-md border flex flex-grow flex-col mx-3  px-4 py-4 my-2">
              <div className=" flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col items-center font-bold">
                <div className=" text-ntext font-medium text-6xl">0</div>
                <div className=" text-xl text-light ">Clicks</div>
              </div>
            </div>
            <div className=" rounded-md shadow-md border flex flex-grow flex-col mx-3 px-4 py-4 my-2">
              <div className=" flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col items-center font-bold">
                <div className=" text-ntext font-medium text-6xl">0</div>
                <div className=" text-xl text-light">Signups</div>
              </div>
            </div>
            <div className=" rounded-md shadow-md border flex flex-grow flex-col mx-3 px-4 py-4 my-2">
              <div className=" flex justify-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 text-light"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex justify-center flex-col items-center font-bold">
                <div className=" text-ntext font-medium text-6xl">0%</div>
                <div className=" text-xl text-light">Conversions</div>
              </div>
            </div>
          </div>

          <div className=" rounded-md   flex flex-grow flex-col px-4 py-4 my-10">
            <form className="flex border my-0.5 mx-0.5 ">
              <button className=" bg-primary py-1 px-2 lg:px-4 lGpy-4 text-white text-xs ">
                Your refaral Link
              </button>
              <input
                type="text"
                className=" flex-grow felx  px-3 lg:px-5 text-lprimary"
                value=" https://www.tenplus.com/ref1234"
              />
              <button className=" bg-primary py-1 px-2 lg:px-4 lGpy-4 text-white text-xs ">
                Copy
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Affiliate;
