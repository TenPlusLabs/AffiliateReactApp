import { useState } from "react";
const TwoStep = () => {
  const [accountModal, setaccountModal] = useState(false);
  const [editaccountModal, seteditaccountModal] = useState(false);
  const [editTwoStepModal, seteditTwoStepModal] = useState(false);
  const [vModal, setvModal] = useState(false);
  const [vvModal, setvvModal] = useState(false);
  const resetModal = () => {
    setaccountModal(!accountModal);
    seteditaccountModal(false);
    seteditTwoStepModal(false);
  };
  const resetedit = () => {
    setaccountModal(false);
    seteditTwoStepModal(false);
    seteditaccountModal(!editaccountModal);
  };
  const resettwoedit = () => {
    setaccountModal(false);
    seteditTwoStepModal(!editTwoStepModal);
    seteditaccountModal(false);
  };
  const resetvModal = () => {
    setvModal(false)
    setvvModal(true)
  };
  return (
    <>
      <div class=" flex flex-col min-w-0 break-words bg-white mb-6 shadow-lg rounded border-l-4 border-primary lg:mx-32 ">
        <div class="flex flex-row justify-between content-start items-center py-2 px-5 space-x-5 border-b  text-ntext">
          <div className=" flex items-center flex-row justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-ntext"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => resetModal()}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <h1 className=" text-lg font-popins font-bold text-ntext">
              {" "}
              Two Steps Verification
            </h1>
          </div>
          <div className=" text-ntext cursor-pointer flex flex-row space-x-2">
            <span className=" " onClick={() => resettwoedit()}>
              Turn Off
            </span>
            <span>|</span>
            {accountModal ? (
              <div onClick={() => resetedit()}>
                {" "}
                 Edit
              </div>
            ) : null}
          </div>
        </div>
        <div>
          {accountModal ? (
            <div className=" flex flex-col flex-grow w-full  py-2 items-start  px-6">
              <div className=" text-sm text-ntext font-semibold">
                We are sending verification codes to the mobile number
              </div>
              <div className=" text-ntext">+2348******223</div>
            </div>
          ) : null}
        </div>
        <div>
          {editaccountModal ? (
            <div className=" ">
            <div className=" flex flex-col justify-between py-5">
           
                <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5  flex flex-col justify-between  border-b ">
                  <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                    <label className=" font-bold text-base">Phone Number</label>
                    <label> Country code</label> 
                    <div className=" flex flex-row  items-center">
                      <div className=" items-center space-x-3 flex flex-row">
                       <input
                          type="text"
                          name="accounttype"
                          placeholder="e.g 5592231013"
                          className="  border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                     
                 
                        <input
                          type="text"
                          name="accounttype"
                          placeholder="8148436223"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                 
                </div>
                <div class="flex  flex-row items-center  justify-center mb-5 space-x-5">
                  <button className="bg-lprimary py-2 px-5 text-white font-popins font-medium " onClick={()=> setvModal(!vModal)}>
                    Next
                  </button>
                  <button className="border border-lprimary py-2 px-5 text-lprimary font-popins font-medium " onClick={() => seteditaccountModal(false)}>
                    Cancel
                  </button>
                </div>
              
            </div>
          </div>
          ) : null}
          {editTwoStepModal ? (
            <div className=" ">
              <div className=" flex flex-row justify-start items-center my-4 mx-10 space-x-4 ">
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
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <div className=" text-sm flex flex-col  text-lprimary">
                  <div className="  text-ntext font-semibold text-xl">
                    What is Two-step verification?
                  </div>
                  <div className="  text-ntext md:pr-32">
                    Two-step verification is a way to use Tenplus more securely.
                    When you perform certain account-related actions, we will send a code to your mobile phone that you entered to verify its you
                  </div>
                </div>
              </div>
            </div>
          ) : null}


{vModal ? (
            <div class=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
              <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex justify-between items-start py-2 px-4 py-2rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-ntext lg:text-xl dark:text-white">
                      Security Verification
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setvModal(false)}
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
                  <div className=" grid grid-cols-1 border-b">
                    <div className=" flex flex-col px-3 text-center justify-center items-center my-10 border-r">
                      <svg
                        className=" h-20 w-20 text-ntext"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M11,17V7H4V17H11M11,3A2,2 0 0,1 13,5V19A2,2 0 0,1 11,21H4C2.89,21 2,20.1 2,19V5A2,2 0 0,1 4,3H11M16.5,3H21.5A1.5,1.5 0 0,1 23,4.5V7.5A1.5,1.5 0 0,1 21.5,9H18L15,12V9L15,4.5A1.5,1.5 0 0,1 16.5,3Z"
                        />
                      </svg>
                      <div className=" text-sm font-semibold text-lprimary">
                        To Turn On Two-Step Verification, Enter The Verification Code
                      </div>
                      <div className=" text-base text-lprimary">
                        We sent to {" "}
                        <span className=" text-ntext text-sm font-semibold">
                          +234*******223
                        </span>
                      </div>
                      <input
                        type="text"
                        name="accounttype"
                        placeholder="667577"
                        className=" my-2 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className=" flex flex-row w-full justify-center">
                    <button className="bg-lprimary px-5 text-white font-popins font-medium py-2 my-2 " onClick={()=> resetvModal()}>
                      Submit
                    </button>
                  </div>
                  <div className=" flex flex-col items-center justify-center py-4 text-base text-lprimary">
                    <div>
                      {" "}
                      Did'nt get the code?{" "}
                      <span className=" text-ntext">Resend</span>
                    </div>
                    <span className=" text-ntext py-4">Call Me</span>
                  </div>
                  {/* <!-- Modal footer --> */}
                </div>
              </div>
            </div>
          ) : null}
{vvModal ? (
            <div class=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
              <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex justify-between items-start py-2 px-4 py-2rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-ntext lg:text-xl dark:text-white">
                      Security Verification
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setvvModal(false)}
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
                  <div className=" grid grid-cols-1 border-b">
                    <div className=" flex flex-col justify-center items-center my-10 border-r">
        
                      <div className=" text-xl font-semibold text-lprimary my-5">
                        Two-Step Verification Turned On
                      </div>
                      <div className=" text-base text-lprimary">
                        Copy and Save The following Recorvery Code To a Safe Place
                      </div>
                      <div className=" py-4 px-6 text-center text-lg font-bold text-ntext border my-3"> T-677V887</div>
                    </div>
                  </div>
                  <div className=" flex flex-row w-full justify-center">
                    <button className="bg-lprimary px-10 text-white font-popins font-medium py-2 my-2 " onClick={() => setvvModal(false)}>
                      OK
                    </button>
                  </div>
                  
                  {/* <!-- Modal footer --> */}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default TwoStep;
