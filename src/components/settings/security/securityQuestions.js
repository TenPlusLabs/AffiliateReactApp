import { useState } from "react";
const SecurityQ = () => {
  const [accountModal, setaccountModal] = useState(false);
  const [editaccountModal, seteditaccountModal] = useState(false);
  const [Modal, setModal] = useState(false);
  const [vModal, setvModal] = useState(false);

  const resetModal = () => {
    setaccountModal(!accountModal);
    seteditaccountModal(false);
  };
  const resetedit = () => {
    setaccountModal(false);
    seteditaccountModal(!editaccountModal);
  };

  const resetVerification = () => {
    setModal(false);
    setvModal(true);
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
              Security Question
            </h1>
          </div>
          <div
            className=" text-ntext cursor-pointer"
            onClick={() => resetedit()}
          >
            {accountModal ? <div>Change</div> : null}
          </div>
        </div>
        <div>
          {accountModal ? (
            <div className=" ">
              <div className=" flex flex-col justify-between py-5">
                <div className=" flex flex-row py-2 items-center  px-6">
                  <div className=" text-sm text-ntext font-semibold">
                    Forgot Your Answer? Click{" "}
                    <span className=" font-semibold text-lprimary">Change</span>{" "}
                    to reset your security Question
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <div>
          {editaccountModal ? (
            <div className=" flex flex-col flex-grow w-full  py-4 items-start  px-6">
              <div className=" text-sm text-ntext font-semibold">
                Select new Security Questions below. We may ask the Questions to
                verify it's you, to approve account actions or help recorver
                lost password
              </div>
              <div className=" flex flex-col w-full ">
                <label className=" text-sm text-lprimary py-3">
                  Security Question 1
                </label>
                <select
                  type="text"
                  name="accounttype"
                  value="USA"
                  className="border-b border-gray-300 text-ntext text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                </select>
                <input
                  type="text"
                  name="accounttype"
                  placeholder="Answer"
                  className=" my-2 border-b border-gray-300 text-ntext text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className=" flex flex-col w-full ">
                <label className=" text-sm text-lprimary py-3">
                  Security Question 2
                </label>
                <select
                  type="text"
                  name="accounttype"
                  value="USA"
                  className="border-b border-gray-300 text-ntext text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                </select>
                <input
                  type="text"
                  name="accounttype"
                  placeholder="Answer"
                  className=" my-2 border-b border-gray-300 text-ntext text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div className=" flex flex-col w-full ">
                <label className=" text-sm text-lprimary py-3">
                  Security Question 3
                </label>
                <select
                  type="text"
                  name="accounttype"
                  value="USA"
                  className=" text-ntext border-b border-gray-300  text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                  <option value="Nigeri">
                    What is the first name of your grandfather?
                  </option>
                </select>
                <input
                  type="text"
                  name="accounttype"
                  placeholder="Answer"
                  className=" my-2 border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
              <div class="flex  flex-row items-center w-full py-5 justify-center mb-5 space-x-5">
                <button
                  className="bg-lprimary py-2 px-5 text-white font-popins font-medium "
                  onClick={() => setModal(!Modal)}
                >
                  Change
                </button>
                <button
                  className="border border-lprimary py-2 px-5 text-lprimary font-popins font-medium "
                  onClick={() => seteditaccountModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : null}

          {Modal ? (
            <div class=" flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center h-modal md:h-full md:inset-0">
              <div class="relative px-4 w-full max-w-2xl h-full md:h-auto">
                {/* <!-- Modal content --> */}
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div class="flex justify-between items-start py-2 px-4  rounded-t border-b dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-ntext lg:text-xl dark:text-white">
                      Security Verification
                    </h3>
                    <button
                      type="button"
                      class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      onClick={() => setModal(false)}
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
                        Verify using the code sent to you
                      </div>
                      <div className=" text-base text-ntext">
                        +234*******223
                      </div>
                      <button
                        className="bg-lprimary px-5 text-white font-popins font-medium py-2 my-2 "
                        onClick={() => resetVerification()}
                      >
                        Send Code
                      </button>
                    </div>
                    <div className=" flex flex-col justify-center items-center my-10">
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
                      <div className=" text-sm font-semibold text-lprimary">
                        Verify using my code
                      </div>
                      <div className=" text-base text-white">
                        +234*******223
                      </div>
                      <button
                        className="bg-lprimary px-5 text-white font-popins font-medium py-2 my-2 "
                        onClick={() => resetVerification()}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                  <div className=" flex flex-row items-center justify-center py-4 text-base text-lprimary">
                    <span>
                      For Assistance{" "}
                      <span className=" text-ntext cursor-pointer">
                        Contact Us
                      </span>
                    </span>
                  </div>
                  {/* <!-- Modal footer --> */}
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
                    <div className=" flex flex-col justify-center items-center my-10 border-r">
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
                        To Complete Your Request Enter The Verification Code
                      </div>
                      <div className=" text-base text-lprimary">
                        Code we sent{" "}
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
                    <button className="bg-lprimary px-5 text-white font-popins font-medium py-2 my-2 ">
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
        </div>
      </div>
    </>
  );
};

export default SecurityQ;
