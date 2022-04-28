import { useState } from "react";
const CompanyDetails = () => {
    const [accountModal, setaccountModal] = useState(false);
    const [editaccountModal, seteditaccountModal] = useState(false);


    const  resetModal = () =>{
        setaccountModal(!accountModal);
        seteditaccountModal(false);
      }
      const  resetedit = () =>{
        setaccountModal(false);
        seteditaccountModal(!editaccountModal);
      }
    return ( <>
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
                Company Details
              </h1>
              </div>
              <div className=" text-ntext cursor-pointer" onClick={() => resetedit()}>{accountModal ? (<div>Edit</div>) : null}</div>
            </div>
            <div>
              {accountModal ? (
                <div className=" ">
                <div className=" flex flex-col justify-between py-5">
                    <div className=" grid grid-cols-2 py-2 items-center  px-6">
                        <div className=" text-sm text-ntext font-semibold">
                            Company Name:
                        </div>
                        <div className=" text-ntext text-sm">
                           Tenplus Digital Labs
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 py-2 items-center  px-6">
                        <div className=" text-sm text-ntext font-semibold">
                            Type of Business entity:
                        </div>
                        <div className=" text-ntext text-sm">
                           Private Corperation (Co/Corp/Inc)
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 py-2 items-center  px-6">
                        <div className=" text-sm text-ntext font-semibold">
                            Contact Name:
                        </div>
                        <div className=" text-ntext text-sm">
                          Abdullahi Jibril
                        </div>
                    </div>
                    <div className=" grid grid-cols-2 py-2 items-center  px-6">
                        <div className=" text-sm text-ntext font-semibold">
                            Contact Email:
                        </div>
                        <div className=" text-ntext text-sm">
                           ceo@tenpluslabs.com
                        </div>
                    </div>
                </div>
                </div>
              ) : null}
            </div>
            <div>
              {editaccountModal ? (
                <div className=" ">
                <div className=" flex flex-col justify-between py-5">
                    <form action="">
                <div className=" my-2  rounded-sm px-2 mx-5 py-4 md:px-5  flex flex-col justify-between  border-b ">
                 
                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        <label>Company Name</label>
                        <input
                          type="text"
                          name="accounttype"
                          placeholder="e.g Ten Plus Digital Lab"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>

                      <div className=" flex flex-row items-center space-x-2 text-lprimary">
                        <div className=" flex r flex-col w-full justify-start ">
                          <label> Type of Business entity:</label>
                          <select
                            type="text"
                            name="accounttype"
                            value="USA"
                            className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          >
                            <option value="Nigeri">FCMB</option>
                            <option value="Nigeri">GTB</option>
                            <option value="Nigeri">First Bank</option>
                          </select>
                        </div>
                      </div>

                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        <label>Contact Name</label>
                        <input
                          type="text"
                          name="accounttype"
                          placeholder="e.g 5592231013"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        
                        <input
                          type="text"
                          name="accounttype"
                          placeholder="Company Name"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      <div>
                      <div className=" flex r flex-col w-full justify-start text-lprimary my-4">
                        <div className=" flex flex-col">
                        <div>Contact Email</div> 
                        <div className=" text-xs font-light">Used to sign in and receive message from us</div>
                        </div>
                        <input
                          type="email"
                          name="accounttype"
                          placeholder="e.g tenplus@gmail.com"
                          className="border-b border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        />
                      </div>
                      </div>
                </div>
                <div class="flex  flex-row items-center  justify-center mb-5 space-x-5">
                      <button className="bg-lprimary py-2 px-5 text-white font-popins font-medium ">
                        Save
                      </button>
                      <button className="border border-lprimary py-2 px-5 text-lprimary font-popins font-medium " onClick={() => seteditaccountModal(false)}>
                       Cancel
                      </button>
                    </div>
                </form>
                </div>
                </div>
              ) : null}
            </div>
          </div>
    </> );
}
 
export default CompanyDetails;